echo "Removendo a pasta node_modules" &&
npm run --silent rimraf node_modules &&
echo "Obtendo alterações" &&
git pull &&
echo "Instalando dependências" &&
npm --silent install &&
echo "Executando testes" &&
npm --silent test &&
echo "Obtendo versão e changelog" &&
cp package.json _package.json &&
cp package-lock.json _package-lock.json &&
bump=$(npm run --silent recommended-bump) &&
echo "Parte do SemVer a ser alterada: ${1:-$bump}" &&
npm --silent --no-git-tag-version version ${1:-$bump} &&
echo "Gerando changelog" &&
npm run --silent changelog &&
git add CHANGELOG.md &&
version=$(npm run --silent json -- -f package.json version) &&
git commit -m "docs(changelog): v$version" &&
mv -f _package.json package.json &&
mv -f _package-lock.json package-lock.json &&
echo "Versão: ${3:-$version}" &&
echo "Criando tag no git" &&
npm --silent version ${1:-$bump} -m "chore(release): v%s" &&
git push --follow-tags &&
echo "Github Release" &&
npm run --silent conventional-github-releaser -p ${2:-$preset}
