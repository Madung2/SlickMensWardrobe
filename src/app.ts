
import express, {Request, Response, Application} from 'express';
// const db = require('./models/_run.ts');
import sequelize  from './configs/database';
// const express = require('express');
// const app = express();
// const router = require('./routes/routes.ts');
const port = 3000;
const app: Application = express();



//미들웨어
app.use(express.json()); //json을 사용하는 미들웨어

//프론트엔드
app.get('/', (req: Request , res : Response) => {
  res.send(`Slick Men Wardrobe;  Backend is running...`);
});


sequelize.authenticate()
.then(() => {
        console.log('데이터베이스 연결 성공');
        
        // 서버 시작
        app.listen(port, () => {
          console.log(`Server is running on http://localhost:${port}`);
        });
      })
      .catch((error: Error) => {
        console.error('데이터베이스 연결 실패:', error);
    });
    
    // //라우터
    // app.use(router);