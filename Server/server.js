const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

connectDB();

const allowedOrigins = ["http://localhost:4000"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/helicopters", require("./routes/helicopters"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server connected on port: ${PORT}`));
