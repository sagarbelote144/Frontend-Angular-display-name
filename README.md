##Appplication guide

1. Run `ng serve`.
2. Go to browser, enter `http://localhost:4200/`. 
3. The application is built using MEAN stack dvelopment
4. The firstname, middlename and lastname are asynchronously fetched from backend written in Node.Js
5. api.service.ts established a connection to backend API at this `http://localhost:4000/api`.
6. The different routes which are being hit in one call are `http://localhost:4000/api/firstName`,`http://localhost:4000/api/middleName`, `http://localhost:4000/api/lastName`(You can check the same separately in the browser).
5. Backend API forms the connection with MongoDB.
5. Once request is received from the Angular app, Node.JS API fetches the data from database and returns it to Angular application.
6. Subsequemtly, the data is displyaed on the web application.
