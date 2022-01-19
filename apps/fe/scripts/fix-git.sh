#bin/bash

git rm -r --cached .
git add --all .
git commit -a -m "Versioning untracked files"
git push origin master