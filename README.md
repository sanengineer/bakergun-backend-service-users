# Build Backend Stack CRUD and Private ReSTAPI with Authorization with NodeJS, PostgreSQL and Sequelize

This project use [ExpressJS 🚀](https://expressjs.com) ([NodeJS](https://nodejs.org) framework), EJS for admin dashboard, [PosgreSQL](https://www.postgresql.org/) and [Sequelize](https://sequelize.org/) (ORM For NodeJS).

## Let's Try Demo

on https://bakergun-backend-service-users.herokuapp.com

## Flow Chart Full Stack On This Project
![Flow_Chart_Fullstack_Web_Develompent](https://res.cloudinary.com/dsv9w1ey3/image/upload/v1604595086/github-images/Fullstack_Web_Developers_Simple_Flow_Chart_zpdn9t.png)

## ER Diagram For 🐘 PostgreSQL

![Entity Diagram PostgreSQL](https://res.cloudinary.com/dsv9w1ey3/image/upload/v1602518877/github-images/Challange_Ch_6_Entity_Diagram_z7jldc.png)

## Feature

### CRUD Method 

#### Endpoint User Game
        */api/v1/user-game

#### Endpoint User Game Biodata
        */api/v1/user-game-biodata

#### Endpoint User Game Biodata
        */api/v1/user-game-history

### Private Hit ReSTAPI For User Has Sign Up
- **GET, PUT, DELETE** on :

        http://localhost:{PORT}/api/v1/user-game/:id

- **POST** on :
        
        http://localhost:{PORT}/api/v1/user-game-history

- **GET** and **PUT** on :

        http://localhost:{PORT}/api/v1/user-game-history/:id


- **POST** on :
        
        http://localhost:{PORT}/api/v1/user-game-biodata

- **GET**, And **PUT** on:
  
        http://localhost:{PORT}/api/v1/user-game-biodata/:id


## Production Package Used

- [Express](https://github.com/expressjs/express),
- [Morgan](https://github.com/expressjs/morgan),
- [PG](https://github.com/brianc/node-postgres)
- [PG Hstore](https://github.com/scarney81/pg-hstore),
- [JSON Web Token](https://github.com/auth0/node-jsonwebtoken),
- [Cookie Parser](https://github.com/expressjs/cookie-parser),
- [Sequelize](https://github.com/sequelize/sequelize),
- [Passport](https://github.com/jaredhanson/passport),
- [Passport-JWT](https://github.com/themikenicholson/passport-jwt),
- [BcrpytJS](https://github.com/dcodeIO/bcrypt.js)

## Dev Package

- [Dot Env](https://github.com/motdotla/dotenv),
- [Nodemon](https://github.com/remy/nodemon)


## Get Started

        $ npm install

## Development

Use Node Version 12.18.4 LTS (Recomended)

### Run Server On Dev Mode:

        $ cd

        $ npm run dev

----

###### **NOTED**: For deploy on cloud like *Heroku*, please **deactivate** code line `require("dotenv").config()` file db-local-config.js on *config directory*.
###### UI Design : https://www.figma.com/file/LcJvUL3iMNdFZ9lsLu0XHq/Bakergun-UI-3D-Models-UI-UX?node-id=0%3A1

###### Backend Frontend: https://github.com/sanengineer/bakergun-frontend

###### Backend Images Asset Services: https://github.com/sanengineer/bakergun-backend-service-images
