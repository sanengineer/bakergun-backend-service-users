# Build Backend Stack CRUD and Private ReSTAPI with Authorization with NodeJS, PostgreSQL, Sequelize and Swagger (API Documentations)

This project use [ExpressJS 🚀](https://expressjs.com) ([NodeJS](https://nodejs.org) framework), EJS for admin dashboard, [PosgreSQL](https://www.postgresql.org/), [Sequelize](https://sequelize.org/) (ORM For NodeJS) and and 🔫 [Swagger](https://swagger.io) (API Documentations).

## Let's Try Demo

on https://bakergun-backend-service-users.herokuapp.com

## Flow Chart Full Stack On This Project

![Flow_Chart_Fullstack_Web_Develompent](https://res.cloudinary.com/dsv9w1ey3/image/upload/v1604595086/github-images/Fullstack_Web_Developers_Simple_Flow_Chart_zpdn9t.png)

## ER Diagram For 🐘 PostgreSQL

![Entity Diagram PostgreSQL](https://res.cloudinary.com/dsv9w1ey3/image/upload/v1602518877/github-images/Challange_Ch_6_Entity_Diagram_z7jldc.png)

## RestAPI

- **Public RestAPI**

        http://localhost:{PORT}/api/v1

- **Admin RestAPI**

        http://localhost:{PORT}/admin-api/v1

### Endpoints URL For Public (Client)

#### Sign Up User Game

- **POST** on:

        Request Body:
        {
           "username": "string",
           "email": "string"
           "password": "string"
        }

        http://localhost:{PORT}/api/v1/user-game

#### Login User Game

- **POST** on:

        Request Body:
        {
           "username": "string",
           "password": "string"
        }

        http://localhost:{PORT}/api/v1/user-game

#### Private ReSTAPI For User Has Sign Up (Need Tokens)

- **GET, PUT, DELETE** on :

        Request Params: ID

        http://localhost:{PORT}/api/v1/user-game/{ID}


        Example:

        http://localhost:8080/api/v1/user-game/1

- **POST** on :

        Request Body:
         {
           "user_id" : integer,
           "fullname": "string",
           "sex" : "string",
           "jobs" : "string"
         }

        http://localhost:{PORT}/api/v1/user-game-biodata

- **GET**, And **PUT** on:

        Request Params: ID

        http://localhost:{PORT}/api/v1/user-game-biodata/{ID}


        Example:

        http://localhost:{PORT}/api/v1/user-game-biodata/1

- **POST** on :

        Request Body:
        {
            "score"  : "string",
            "comment": "string"
        }

        http://localhost:{PORT}/api/v1/user-game-history

- **GET** and **PUT** on :

        Request Params: ID

        http://localhost:{PORT}/api/v1/user-game-history/{ID}


        Example:

        http://localhost:{PORT}/api/v1/user-game-history/1

### Endpoints URL For Admin

#### User Game Data

##### Create One User Game

- **POST** on:

        Request Body:
        {
           "username": "string",
           "email": "string"
           "password": "string"
        }

        http://localhost:{PORT}/admin-api/v1/user-game

##### Get All Users Game or Filtering By Query

- **GET** All on:

        http://localhost:{PORT}/admin-api/v1/user-game

- **GET** All with Filtering by Query:

        Request Query: USERNAME

                http://localhost:{PORT}/admin-api/v1/user-game?username={USERNAME}


        Request Query: EMAIL

                http://localhost:{PORT}/admin-api/v1/user-game?email={EMAIL}



        Example:

        http://localhost:8080/admin-api/v1/user-game?email=hi@sanengineer.com

##### Update One User Game

- **UPDATE** on:

        Request Params: ID

        Request Body:
        {
           "username": "string"
        }

        or

        {
           "email": "string"
        }

        http://localhost:{PORT}/admin-api/v1/user-game/{ID}



        Example

         http://localhost:8080/admin-api/v1/user-game/1

##### Change One User Game Password

- **UPDATE** on:

        Request Params: ID

        Request Body:
        {
          "password": "string"
        }

        http://localhost:{PORT}/admin-api/v1/user-game-password/{ID}



        Example:

        http://localhost:8080/admin-api/v1/user-game-password/1

##### Delete On User Game

- **DELETE** on:

        Request Params: ID

        Request Query: Username

        http://localhost:{PORT}/admin-api/v1/user-game/{ID}?username={USERNAME}



        Example:

        http://localhost:8080/admin-api/v1/user-game/1?username=sanengineer

#### User Game Biodata Data

##### Create One User Game Biodata

- **POST** on:

        Request Body:
         {
           "user_id" : integer,
           "fullname": "string",
           "sex" : "string",
           "jobs" : "string"
         }

        http://localhost:{PORT}/admin-api/v1/user-game-biodata

##### Get All Users Game Biodata or Filtering by Query

- **GET** on:

        http://localhost:{PORT}/admin-api/v1/user-game-biodata

- **GET** All Filtering By Query:

        Request Query: FULLNAME

                http://localhost:{PORT}/admin-api/v1/user-game-biodata?fullname={FULLNAME}


        Request Query: SEX

                http://localhost:{PORT}/admin-api/v1/user-game-biodata?sex={SEX}


        Requst Query: JOBS
                http://localhost:{PORT}/admin-api/v1/user-game-biodata?jobs={JOBS}



        Example:

        http://localhost:{PORT}/admin-api/v1/user-game-biodata?jobs=engineer

##### Update One User Game Biodata

- **UPDATE** on:

        Request Params: ID


        Request Body:
        {
            "fullname": "string"
        }

        or

        {
            "sex": "string"
        }

        or

        {
            "jobs: "string"
        }

        http://localhost:{PORT}/admin-api/v1/user-game-biodata/{ID}



        Example:  http://localhost:8080/admin-api/v1/user-game-biodata/1

##### Delete On User Game Biodata

- **DELETE** on:

        Request Params: ID

        Request Query: FULLNAME

        http://localhost:{PORT}/admin-api/v1/user-game-biodata/{ID}?fullname={FULLNAME}



        Example:

        http://localhost:8080/admin-api/v1/user-game-biodata/1/fullname?sanengineer

#### User Game History Data

##### Create One User Game History

- **POST** on:

        Request Body:
        {
            "score"  : "string",
            "comment": "string"
        }

        http://localhost:{PORT}/admin-api/v1/user-game-history

##### Get All Users Game History or Filtering By Query

- **GET** All on:

        http://localhost:{PORT}/admin-api/v1/user-game-history

- **GET** All Filtering by Query on:

        Request Query: SCORE

                http://localhost:{PORT}/admin-api/v1/user-game-history?score={SCORE}


        Request Query: COMMENT

                http://localhost:{PORT}/admin-api/v1/user-game-history?comment={COMMENT}



        Example:

        http://localhost:8080/admin-api/v1/user-game-history?score=30

##### Update One User Game History

- **UPDATE** on:

        Request Params:ID

        Request BODY:
        {
            "score" : "string"
        }

        or

        {
            "comment" : "string"
        }

        http://localhost:{PORT}/admin-api/v1/user-game-history/{ID}



        Example:

        http://localhost:8080/admin-api/v1/user-game-history/1

##### Delete On User Game History

- **DELETE** on:

        Request Params: ID

        Requst Query: SCORE

        http://localhost:{PORT}/admin-api/v1/user-game-history/{ID}?score={SCORE}



        Example:

        http://localhost:8080/admin-api/v1/user-game-history/1?score=30

## 🔫 Testing RestAPI On Local Machine With Swagger

- **Public RestAPI**

        http://localhost:{PORT}/api-docs/v1

- **Admin RestAPI**

        http://localhost:{PORT}/admin-api-docs/v1

## 🗃️ Production Package Used

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
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)

## Dev Package

- [Dot Env](https://github.com/motdotla/dotenv),
- [Nodemon](https://github.com/remy/nodemon)

## 🍾️ Get Started

        $ npm install

## ⚗️ Development

Use Node Version 12.18.4 LTS (Recomended).

Watch Terminal! when debugging this project.

Watch this:

<video width="100%" height="100%" controls autoplay style="border-radius:6px">
  <source src="https://res.cloudinary.com/dsv9w1ey3/video/upload/v1606207486/github%20video/bakergun_backend_service_user_terminal_logger_for_readme_github_px7vhe.mp4" type="video/mp4">
  </source>
</video>

### 🏃‍♂️️ Run Server On Dev Mode:

        $ cd

        $ npm run dev

---

###### **NOTED**: For deploy on cloud like _Heroku_, please **deactivate** code line `require("dotenv").config()` file db-local-config.js on _config directory_.

###### UI Design : https://www.figma.com/file/LcJvUL3iMNdFZ9lsLu0XHq/Bakergun-UI-3D-Models-UI-UX?node-id=0%3A1

###### Backend Frontend: https://github.com/sanengineer/bakergun-frontend

###### Backend Images Asset Services: https://github.com/sanengineer/bakergun-backend-service-images
