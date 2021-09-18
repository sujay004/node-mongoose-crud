import express from 'express';
import bodyParser from 'body-parser';
import user from './routes/user'
import connectDB from './config/database'

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/user',user)

app.get('/', (req, res) => {
    console.log('Route working');
    res.end('Route working');
});

app.listen(3000, () => {
  console.log('Port 3000 running on..!!');
});
