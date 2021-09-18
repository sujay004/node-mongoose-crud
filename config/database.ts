import { ConnectOptions, connect } from 'mongoose';
import config from 'config';

// mongoose.connect('mongodb://localhost:27017/');

const connectDB = async () => {
  try {
    const mongoURI: string = config.get('mongoURI');
    // const options: ConnectOptions = {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // };
    await connect(mongoURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
