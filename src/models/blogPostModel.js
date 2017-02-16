import mongoose from 'mongoose';
import Comment from './commentsModel';
let Schema =mongoose.Schema;


  let blogPost =new Schema({
    title : {
     type : String,
     required : true
   },
   blogText :{
     type :String,
     required: true
   },
   comments:{
     type :[Schema.Types.ObjectId],
     ref : 'Comment'
   },
   likes:{
     type : [Number],
     default :0
   },
   dislike : {
     type: [Number],
     default : 0
   },
   postedDate: {
     type : Date,
     default : Date.now
   },
   updatedAt :{
     type : Date,
     default:Date.now
   }});
  module.exports =mongoose.model('BlogPost', blogPost);
