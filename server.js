require("dotenv"). config();
const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
const Routes = require("./clientnew/src/app/route");

app.use([cors(), Routes]);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(2000, () => {
  console.log(`Server is running on 2000`);
});
