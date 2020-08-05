# ShopSafe :shopping_cart:
A web application for informed and safe shopping during COVID-19. 

### Contributors
* [Gabriel Stewart](https://github.com/glstewart17)
* [Raul Palomo](https://github.com/Raulp8)
* [Carol Li](https://github.com/caroljli)

### Mentors
* Aditi Jain
* Carl Atupem

### Static Demo

![shopsafe-landing](https://i.imgur.com/eThPtro.gif)

![shopsafe-results](https://media1.giphy.com/media/SV6OJEX8JIfRbo1cTR/giphy.gif)

## Development Information

### Formatting Java Code
```
cd shopsafe-backend/
mvn com.theoryinpractise:googleformatter-maven-plugin:format
```

### Running Development Server
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

### Deployment Instructions
```
// Install Angular
npm install -g @angular/cli

// Build Frontend
cd shopsafe-frontend/
ng build --prod --delete-output-path=false

// Deploy Web Application 
cd ../shopsafe-backend/
mvn package appengine:deploy

// To skip Java tests, add
-Dmaven.test.skip

