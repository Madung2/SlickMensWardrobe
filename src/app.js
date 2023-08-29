
const db = require('./models/_run.js');
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/routes.js');


//DB
db.sequelize.sync({ force: true })
  .then(() => console.log('DB 연결 성공!!'))
  .catch((err) => console.log('DB 연결 실패=> ' + err))

//프론트엔드
app.get('/', (req, res) => {
  res.send(`Slick Men Wardrobe;  Backend is running...`);
});

//백엔드
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//미들웨어
app.use(express.json()); //json을 사용하는 미들웨어

//라우터
app.use(router);