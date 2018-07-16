# See https://github.com/angular-schule/angular-cli-ghpages
cp dist/a4app/index.html dist/a4app/404.html
ng build --prod --base-href "https://hopbit.github.io/a4app/"
ngh --dir dist/a4app
