import mongoose from 'mongoose';
import BlogPost from './blogPostModel';
let Schema =mongoose.Schema;

  let commentSchema =new Schema({
    title : {
     type : String,
     required : true
   },
   comment :{
     type :String,
     required: true
   },
   blogPost :{
     type : [Schema.Types.ObjectId],
     required:true,
     ref : 'BlogPost'
   },
   likes:{
     type : [Number],
     required :false,
     default :0
   },
   dislikes : {
     type: [Number],
     required : false,
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
  module.exports =mongoose.model('Comment', commentSchema);
