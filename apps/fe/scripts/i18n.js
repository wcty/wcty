(async function Main(){
    const fetch = await (await import('node-fetch')).default;
    const fs = await import('fs');
    const { ApolloClient, gql, InMemoryCache } = await import('@apollo/client');

    const client= new ApolloClient({
        cache: new InMemoryCache({
            addTypename: false
            }),
        uri: 'https://hasura-aws.weee.city/v1/graphql',

    })
    const GetKeys = gql`
        query GetKeys{
            i18n{
                key
                en
            }
        }
    `  

    client.query({
        query : GetKeys
    }).then((data) => {
        const json = JSON.stringify(data.data.i18n.reduce( (a,b)=>{
        const {key, ...value} = b
        a[key]=Object.values(value)[0]
        return a
        }, {}), null, ' ')
        fs.writeFile('src/common/i18n/defaultLang.json', json, { flag: 'w' }, err => {})
    }
    )
})()