# Tech stack used

This challenge uses the following tech stack:

- [React](https://reactjs.org) for frontend
- [Express](http://expressjs.com/) with [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for db

## Configuration

Don't forget to add your own `MONGOURI` from MongoDB database in the `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Automated tests

I have used **@testing-library/react** and **jest** for testing on frontend (/client). I have only written couple of very basic tests due to shortage of time.

## Screenshots

Homepage/Landing page

![Landing](https://iili.io/FdkNYQ.png)

Register page

![Register](https://iili.io/FdkvTP.png)

Login page

![Login](https://iili.io/FdkOvV.png)

Dashboard page

![Dashboard](https://iili.io/FdkeyB.png)


## Support note

If something breaks or doesn't work, please contact at **haseeb.khanzada@ymail.com**
