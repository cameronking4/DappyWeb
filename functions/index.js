const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const { user } = require("firebase-functions/lib/providers/auth");
const app = express();

admin.initializeApp({
  apiKey: "AIzaSyDQP1Z-CDFguyomlVStNP7ar2U8lq_aqTg",
  authDomain: "swaptact-988da.firebaseapp.com",
  databaseURL: "https://swaptact-988da.firebaseio.com",
  projectId: "swaptact-988da",
  storageBucket: "swaptact-988da.appspot.com",
  messagingSenderId: "872574258487",
  appId: "1:872574258487:web:c30154944dda6153731eb2",
  measurementId: "G-RRPQ1YWCWP"
});
const db = admin.firestore();
app.use(cors());
app.use(express.json());

app.post("/getUser", (req, res) => {
//  const token = req.body.token;
  const uid = req.body.uid;
//  var tokenCheck=[];
  var uidCheck=[];
  var sendUser=[];
  (async () => {
    try {
      await db
        .collection("Users")
        .get()
        .then((snapshot) => {
          
           snapshot.forEach((user) => {
              sendUser.push({id:user.id,...user.data()}) ;
            
          });
          return sendUser;
        })
        .then((users) => {
          
          uidCheck=users.filter(user=>{
            return(user.id===uid)
          }) 
          
//          tokenCheck=users.filter(user=>{
//            return(user.token===token)
//          }) 
          return users.filter(user=>{
            return(user.id===uid)
          }) [0]
        }).then(user=>{
          console.log(user)
//          if(!tokenCheck[0]){
//            return res.json({message:`no user with this token ${token} found`})
//          }if(!tokenCheck[0]){
//            return res.json({message:`no user with this token ${token} found`})
//          }
          if(!uidCheck[0]){
            return res.json({message:`no user with this Id ${uid} found`})
          }else{
          return res.json(user)}
        })
        ;
    } catch (error) {
      return res.json(error);
    }
  return null}
  
  )();
});
exports.app = functions.https.onRequest(app);
