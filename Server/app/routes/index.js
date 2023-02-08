
const loginRouter = require("./login.route");

function route(app) {
  app.use('/api/v1/login', loginRouter);
  app.use('/', () => {
    console.log("Hello world")
  })
}

module.exports = route;