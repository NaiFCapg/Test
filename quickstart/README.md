This is the Angular frontend assignment for creating a new user

npm install
npm start

The application html nested flow is as fllowing
index -> my-app(app.component)-> create-new-user(create-new-user.component)

the Options for "Pronvince" field is fetched from data.service registed in app.module and requested by create-new-user.coponent. 
The data is obtained from an faked api service defined in in-memory-data.service, later this can be replaced by real java spring backend

##todo
create a submit button and submit the customer data into the java spring backend, when all field is filled.
