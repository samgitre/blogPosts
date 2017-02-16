import mongoose from 'mongoose';
import config from './config';

export default callback =>{
  let db = mongoose.connect(config.dbConString);
  callback(db);
  console.log("conneted to data house !!!");

}
