require('dotenv').config()

let fs = require('fs'),
    crypto = require('crypto'),
    child_process = require('child_process'),
    rimraf = require('rimraf');

const { env } = require('process');

let websiteName = "Weee City Platform",
    websitePushID = "web.city.weee.admin",
    allowedDomains = [
        "http://admin.weee.city",
        "https://admin.weee.city",
        "https://weee.city",
        "https://dev.weee.city",
        "https://api.weee.city",
        "http://localhost:3000",
        "http://localhost:4000",
    ],
    webServiceURL = "https://admin.weee.city/apn",
    urlFormatString = "https://weee.city/%@",
    certP12 = "pushcert.p12",
    certPasswd = env.CERT_PASS; 

async function generateWebsiteDict(path){

    let website = {
        "websiteName": websiteName,
        "websitePushID": websitePushID,
        "allowedDomains": allowedDomains,
        "urlFormatString": urlFormatString,
        "authenticationToken": env.AUTH_TOKEN,
        "webServiceURL": webServiceURL
    };

    let raw_files = fs.readdirSync('src/packages/icon.iconset/')
        .filter(v=>v.endsWith('.png'))
        .map(v=>'icon.iconset/' + v);

    if (fs.existsSync(path)) {
        rimraf.sync(path);
    }

    fs.mkdirSync(path);
    fs.mkdirSync(path + "/icon.iconset");

    for (let i in raw_files) {
        //console.log(raw_files[i]);
        child_process.execSync("cp '" + __dirname + '/' + 'src/packages/' + raw_files[i] + "' '" + path + '/' + raw_files[i] + "'");
    }

    console.log("website.json");
    fs.writeFileSync(path + '/website.json', JSON.stringify(website));

    return raw_files;
}

async function generateManifest(path, packageVersion = 1, raw_files){
    console.log("manifest.json");
    console.log("path", path);
    let manifest = {}

    raw_files.push("website.json");
    for (let i in raw_files) {
        let file = raw_files[i];
        if(packageVersion == 1) {
            let sha1 = crypto.createHash('sha1');
            
            if(file==='website.json'){
                sha1.update(fs.readFileSync(path + '/' + file));
            }else{
                sha1.update(fs.readFileSync(path + '/' + file), 'binary');
            }
            manifest[file.replace('/',"\/").replace("\\\\","\\")] = sha1.digest('hex');
        } else {
            let sha512 = crypto.createHash('sha512');
            if(file==='website.json'){
                sha512.update(fs.readFileSync(path + '/' + file));
            }else{
                sha512.update(fs.readFileSync(path + '/' + file), 'binary');
            }
            manifest[file.replace('/',"\/").replace("\\\\","\\")] = {
                "hashType": "sha512",
                "hashValue": sha512.digest('hex')
            };
        }
    }

    fs.writeFileSync(path + '/manifest.json', JSON.stringify(manifest).replace(/\//g, '\\/'));

    return raw_files;
}
// Create signature

async function generateSignature(path){
    
    /** Create PEM certificate */
    child_process.execSync("openssl pkcs12 -in '" + certP12 + "' -out pushcert.pem -nodes -clcerts -passin pass:" + certPasswd);
    /** Create PEM private key */
    child_process.execSync("openssl pkcs12 -in '" + certP12 + "' -nocerts -out 'private.pem' -passin pass:" + certPasswd + " -passout pass:" + certPasswd);
    /** Create signer PEM certificate */
    child_process.execSync("openssl pkcs12 -in '" + certP12 + "' -clcerts -nokeys -out 'cert.pem' -passin pass:" + certPasswd);
    /** Sign files */
    child_process.execSync("openssl smime -binary -sign -signer cert.pem -inkey private.pem -in '" + path + "/manifest.json' -out '" + path + "/signature' -outform DER -passin pass:" + certPasswd);
    //console.log("openssl smime -binary -pk7out -sign -certfile pushcert.pem -signer cert.pem -inkey private.pem -in '" + path + "/manifest.json' -out '" + path + "/signature' -outform DER -passin pass:" + certPasswd);
}

async function archivePackage(path, raw_files){
    raw_files.push("manifest.json");
    raw_files.push("signature");

    if (fs.existsSync(path + ".zip")) {
        fs.unlinkSync(path + ".zip");
    }

    let archiver = require('archiver'),
            output = fs.createWriteStream(path + ".zip"),
            archive = archiver('zip');

    archive.pipe(output);

    console.log("building Package");
    for (let i in raw_files) {
        let file = raw_files[i];
        archive.append(fs.createReadStream(path + "/" + file), {name: file});
    }

    archive.finalize(function (err, bytes) {
        if (err)
            throw err;

        console.log(bytes + ' total bytes');

        fs.unlink("cert.pem");
        fs.unlink("private.pem");
        rimraf.sync(path);
    });

    fs.rmdirSync(path, { recursive: true });
}

function cleanUp(){
    fs.rmSync('./pushcert.pem');
    fs.rmSync('./private.pem');
    fs.rmSync('./cert.pem');
}

async function makePackage(packageVersion = 1){
    const websiteFolder = packageVersion===1? "src/packages/v1/": "src/packages/v2/";
    const path = __dirname + '/' + websiteFolder + 'pushPackage';

    console.log(path);
    console.log(packageVersion);

    const images = await generateWebsiteDict(path);
    const files = await generateManifest(path, packageVersion, images);
    await generateSignature(path);
    await archivePackage(path, files);
}

(async function(){
    await makePackage(1)
    await makePackage(2)
    await cleanUp();
})();
