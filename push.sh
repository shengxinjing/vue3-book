read -p "Enter deploy message: "
npm run build
rm -rf docs/*
mv content/.vuepress/dist/* docs
git add .
git commit -m "deploy: $REPLY"

git push origin master