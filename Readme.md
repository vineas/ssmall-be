<br />
<p align="center">
  <h3 align="center">SS Mall</h3>
  <p align="center">
    <a href="https://github.com/vineas/ssmall-be"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://ssmall-be.vercel.app/">Api Demo</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
  - [Documentation](#documentation)
# About The Project

Router:
1. Product
    /products

2. Cart
    /cart

3. History
    /history


## Built With

These are the libraries and service used for building this backend API

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [ElephantSQL](https://www.postgresql.org)

# Installation

1. Clone this repository

```sh
git clone https://github.com/vineas/ssmall-be
```

2. Change directory to ssmall-be

```sh
cd ssmall-be
```

3. Install all of the required modules

```sh
npm install
```

4. Create ElephantSQL database, query are provided in [query.sql](./query.sql)

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env.example](./.env.example)

```txt
- Please note that this server requires Google Drive API credentials and Gmail service account
- Otherwise API endpoint with image upload and account register won't work properly
```

6. Run this command to run the server

```sh
npm run server
```

- Or run this command for running in development environment

```sh
npm run dev
```

- Run this command for debugging and finding errors

```sh
npm run lint
```

## Documentation

Documentation files are provided in the [docs](./docs) folder

- [Postman API colletion]()
- [PostgreSQL database query](./query.sql)

API endpoint list are also available as published postman documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/27926114/2s9Yynk47Z)