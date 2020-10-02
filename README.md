# Backend Stack For Bakergun - NodeJS, ExpressJS and Data JSON Dummy

Backend stack ini dibuat dengan [NodeJS](https://nodejs.org), [ExpressJS 🚀](https://expressjs.com)

## Feature

### View

Penggunaan view engine de.

misal :

- localhost:8008 (index)

- localhost:8008/page1 (sub)

- localhost:8008/page2 (sub)

Stepnya, membuat folder baru (misal: Views) di directory root project ini, lalu pakai module export-import dan uncomment codingan yang ada di file server.js .

### Data JSON Dummy

#### gameboard-urlimage.json

isinya object yang hanya memiliki value url image saja.

#### gameboard-id-name-urlimage.json

isinya obji nama key id, key name, dan key imageUrl. Value dari masing-masing key tersebut misal untuk key **name**, value nya bisa di pakai untuk menembak ke attribute **alt** di element img di html.

untuk data json ini tidak diaktifkan, namun siap dipakai. Tinggal mengganti import module dari **_gameboard-urliamge.json_** ke **_gameboard-id-name-urlimage.json_**, lalu aktifan codingan method **READ** by params Id.

#### images.json

Isinya object untuk assets images yang ada d

#### players.json

#### blog.json

Isinya object untuk

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
