# ShopSafe
A web application for informed and safe shopping during COVID-19.

## Running Development Server
```
// Install Angular
npm install -g @angular/cli

// Build Frontend
cd shopsafe-frontend/
ng build --delete-output-path=false

// Run Local Web Apllication 
cd ../shopsafe-backend/
mvn package appengine:run 

// Add -Dmaven.test.skip to skip tests
```

## Deployment Instructions
```
// Install Angular
npm install -g @angular/cli

// Build Frontend
cd shopsafe-frontend/
ng build --prod --delete-output-path=false

// Deploy Web Application 
cd ../shopsafe-backend/
mvn package appengine:deploy

//Add -Dmaven.test.skip to skip tests
