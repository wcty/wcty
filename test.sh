#!bin/bash

git diff --quiet main~1 main .github/workflows/deploy.yml
if [ $? -ne 0 ] ; 
then 
  echo "Updated depl"
fi

git diff --quiet main~1 main package.json
if [ $? -ne 0 ] ; 
then 
  echo "Updated pack"
fi