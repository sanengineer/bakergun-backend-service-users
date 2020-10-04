# Backend Stack For Bakergun - NodeJS, ExpressJS and Data JSON Dummy

Backend stack ini n [NodeJS](https://nodejs.org), [ExpressJS 🚀](https://expressjs.com)

## Feature

### View

Penggunaan view engine de.

misal :

- localhostndex)

- localhost:8008/page1 (sub)

- localhost:8008/page2 (sub)

Stepnya, membuat folder baru (misalctory root project ini, lalu pakai module export-import dan uncomment codingan yang ada di file server.js .

### Data JSON Dummy

#### gameboard-urlimage.json

isinya object yang hanya memiliki value url image saja.

#### gameboard-id-name-urlimage.json

isinya obji nama key id, key name, dan key imageUrl. Value dari masing-masing key tersebut misal untuk key **name**, value nya bisa di pakai untuk menembak ke attribute **alt** di element img di html.


### CRUD Method

Di project ini method CRUD sudah **ready to use**, tapi karena suatu hal hanya method READ yang bisa dilakukan.

### Endpoint ReSTAPI

#### Players List

- All Player

        localhost:8008/api/v1/players

- Player

  example: Play

        localhost:8008/api/v1/players/2

####

- Ass

        localhost:8008/api/v1/gameboard

#### B

- All Bl

        localhost:8008/api/v1/blog

- Blog Post by Id

  example: Posy Id 2

        localhost:8008/api/v1/blog/2

## Get

        $ git clone

        $ cd exp

        $ npm i

        $ npm

## Development

### Use Node Version 10.0.0 (Recomended)

### Run Server Dev Mode:

        $ cd

        $ npm run dev
