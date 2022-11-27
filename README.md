<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=300px src="https://ci4.googleusercontent.com/proxy/uvxPNObK-7HhpbW9mY5a0CPqIWsdsnoGoL5xzSfAibgO9Lg_ygWQocAM87ibD1VbeNrSA6q0Ds5vndlgjC2x7v_5H0HVMMd9He5mpurIi1I=s0-d-e1-ft#http://itsmart.pe/recursos_documentos/imagen/arquitectura.png" alt="Challenge Rimac"></a>
</p>

<h3 align="center">Challenge Lambda - NODEJS with TYPESCRIPT</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
  Use of NodeJS with typescript, Lambda of AWS.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment with CI CD](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project exemplifies the correct use of serverless lambda.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Nodejs v.14 or higher

```
node --version
```

### Installing

Configure the serverless framework with your AWS credentials before running this project.
[AWS CREDENTIALS](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)
Visit the official documentation

Add project dependencies [PNPM | YARN]

```
pnpm install
```

or

```
yarn install
```

Run the application in development [Mode-Offline]

```
pnpm dev
```

or

```
serverless offline
```


Run the application in production

```
pnpm deploy
```

or

```
serverless deploy
```

## 🔧 Running the tests <a name = "tests"></a>

run the tests

```
pnpm test
```

or

```
yarn test
```

## 🎈 Usage <a name="usage"></a>

To interact with API.

#### Routes
##### People

```
GET http://localhost:3000/dev/people
```

```
GET http://localhost:3000/dev/people/:id
```

```
POST http://localhost:3000/dev/people
```
##### Planets

```
GET http://localhost:3000/dev/planets
```

```
GET http://localhost:3000/dev/planets/:id
```

```
POST http://localhost:3000/dev/planets
```

## 🚀 Deployment with CI CD <a name = "deployment"></a>



## ⛏️ Built Using <a name = "built_using"></a>

- [Serverless Framework](https://www.serverless.com/) - Framework
- [Lambda](https://aws.amazon.com/es/lambda/) - Lambda AWS
- [API Gateway](https://aws.amazon.com/es/api-gateway/) - API Gateway
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@ArthurDev](https://github.com/ArthurQR98) - Idea & Initial work
