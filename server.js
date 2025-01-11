const http = require("http");

const dotenv = require("dotenv");

dotenv.config();

const app = http.createServer((req, res) => {});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server has been started on port" + PORT);
});
