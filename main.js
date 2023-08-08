
//DB Connection
const db = require('./models/_run.js');
db.sequelize.sync({ force: false })
  .then(() => console.log('DB 연결 성공!!'))
  .catch((err) => console.log('DB 연결 실패=> ' + err))





const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send(`Slick Men Wardrobe;  Backend is running...`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});