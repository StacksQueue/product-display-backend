# general

1. extract the zip file. from there, you'll find 3 files

- **product display folder** - contains the angular files for the frontend web display

- **product display backend folder** - contains the nodejs files for the backend apis

- **data.json** - contains the product data to be imported in the mongodb database

# importing data to mongodb

1. open your mongodb compass
2. connect to **`localhost:27017`**
3. create a database called **`productdisplay`**
4. create a collection called **`products`**
5. from your collection **`products`**, import this product.json file

# product display backend

1. navigate the directory of the folder to the terminal by entering this command:

> `$ cd (path of the folder)`

2. install all the dependencies and libraries using npm command

> `$ npm install`

3. run the nodejs project for a dev server by entering this command

> `$ node app.js`

if you have nodemon installed globally

> `$ nodemon app.js `

# product display (frontend)

1. navigate the directory of the folder to the the terminal by entering this command:

> `$ cd (path of the folder)`

2. install all the dependencies and libraries using npm

> `$ npm install`

3. run the angular project for a dev server by entering this command

> `$ ng serve`

4.  navigate to http://localhost:4200/

# notes

you can find the following repositories of this project in my [Github](https://github.com/StacksQueue)

1. [product display front-end](https://github.com/StacksQueue/product-display)
2. [product display back-end](https://github.com/StacksQueue/product-display-backend)

# PAUL ELYSON VILLACERAN
