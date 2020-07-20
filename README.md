# ShopSafe
A web application for informed and safe shopping during COVID-19. Created by [Gabriel Stewart](https://github.com/glstewart17), [Raul Palomo](https://github.com/Raulp8), and [Carol Li](https://github.com/caroljli).

## Running Development Server
```
// Install Angular
npm install -g @angular/cli

// Build Frontend
cd shopsafe-frontend/
ng build --delete-output-path=false

// Run Local Web Application 
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
