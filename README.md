# Coders Media
<img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>

## Demo
![Tool Demo](https://github.com/asad1996172/Developers-Social-Media/blob/master/demo%20(2).gif)

This Web application contains the following functionalities:
* Guest page showing a list of all developers
* Sign In/ Sign Up
* Creating Developer Profile
* Adding educations
* Adding work experience
* Adding post and commenting 
* Like and Unliking post

## Installing Node Dependecies
Run the following to install all required node dependencies
```
npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
```
```
npm i -D nodemon concurrently
```
```
npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment uuid
```

## How to Run
1. Make sure MongoDB is installed and running on your system
1. Clone this repo ``` git clone https://github.com/asad1996172/Developers-Social-Media ```
1. Update `.env.test` with the env vars and rename it to `.env`
1. Run server using `npm run server`
1. Run client using `npm run client`
