const app = require("./app");
const { connect } = require("mongoose");
const { mongoURL } = require("./config");

connect(mongoURL, { dbName: "db-contacts" })
  .then(() => {
    console.log("Database connection successful");

    app.listen(3000, () =>
      console.log("Server running. Use our API on port: 3000")
    );
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
