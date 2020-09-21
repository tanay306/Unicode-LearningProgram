# Project Management System
Tasks for Unicode learning period

## Project Structure

```
.
├── .gitignore              -> Git ignore file for node_modules and vscode configs
├── controllers/            -> contains functions related to each route
├── models/                 -> Contains DB models
├── routes/                 -> Files exporting respective routers for each endpoint)
├── app.js                  -> Connects to DB, Sets up express app with routers, middlewares etc and exports it
└── package.json            -> Npm package.json file
```
## Usage
```
npm start
```
## Endpoints
All root endpoints have their separate router in `./routes` folder

|Endpoints              |Description                                                                    |Methods               |
|-----------------------|-------------------------------------------------------------------------------|----------------------|
|/                      |The default page (just for redirects)                                          |GET                   |
|/signIn                |Sign In page                                                                   |POST                  |
|/signUp                |Sign Up page                                                                   |GET, POST             |
|/signOut               |Sign Out page                                                                  |POST                  |
|/employees             |List of all emplloyees                                                         |GET, POST, DELETE     |
|/employees/:employeeId |Details of specified employee                                                  |GET, PUT, DELETE      |
|/projects              |List of all projects                                                           |GET, POST, DELETE     |
|/projects/:projectId   |Details of specified project                                                   |GET, PUT, DELETE      |
|/customers             |List of all customers                                                          |GET, POST, DELETE     |
|/customers/:customerId |Details of specified customer                                                  |GET, PUT, DELETE      |

The get request on the sign up page is basically to check if the user is authenticated or not. All the routes pertaining to the employees, projects and customers require authentication.

## Testing

Index Page

<img src="screenshot/index.jpg">

Sign Up

<img src="screenshot/signup.jpg">

Sign In

<img src="screenshot/signin.jpg">

When logged as an admin
The admin has a right to access any route.

<img src="screenshot/admin1.jpg">

<img src="screenshot/admin2.jpg">

<img src="screenshot/admin3.jpg">

When logged in as employee
The employee has restricted access to most routes. Employee have only access to get or put route to his particular route and to get the particular project he is in.


<img src="screenshot/emp1.jpg">

<img src="screenshot/emp2.jpg">

<img src="screenshot/emp3.jpg">

<img src="screenshot/emp4.jpg">

When logged in as customer
The customer also has certain restricted access. Customers are only granted access to this particular route, the project route he has given and the particular employees working for that project

<img src="screenshot/cust1.jpg">

<img src="screenshot/cust2.jpg">

<img src="screenshot/cust3.jpg">

<img src="screenshot/cust4.jpg">

Sign Out

<img src="screenshot/signout.jpg">