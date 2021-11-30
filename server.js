require("dotenv"). config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port;
const Routes = require("./clientnew/src/app/route");

app.use([cors(), Routes]);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
