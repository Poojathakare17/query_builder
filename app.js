var express = require("express");
var go_to_create = require('./query/create_query');
var go_to_select = require('./query/select_query');
var go_to_insert = require('./query/insert_query');
var go_to_update = require('./query/update_query');
var go_to_remove = require('./query/remove_query');
var bodyParser = require('body-parser');
var app = express();

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});

app.use(bodyParser.json());  

app.get('/create', function (req, res) {
   var createQueryInstance = new go_to_create();
   createQueryInstance.createQuery(function(err,result){
       if(err){
           res.json({
               data:err,
               value:false
           })
       } else{
             res.json({
               data:result,
               value:true
           })
       }
   });
});

app.get('/select', function (req, res) {
   var selectQueryInstance = new go_to_select();
   selectQueryInstance.selectQuery(function(err,result){
       if(err){
           res.json({
               data:err,
               value:false
           })
       } else{
             res.json({
               data:result,
               value:true
           })
       }
   });
});

app.get('/update', function (req, res) {
   var updateQueryInstance = new go_to_update();
   updateQueryInstance.updateQuery(function(err,result){
       if(err){
           res.json({
               data:err,
               value:false
           })
       } else{
             res.json({
               data:result,
               value:true
           })
       }
   });
});

app.get('/insert', function (req, res) {
   var insertQueryInstance = new go_to_insert();
   insertQueryInstance.insertQuery(function(err,result){
       if(err){
           res.json({
               data:err,
               value:false
           })
       } else{
             res.json({
               data:result,
               value:true
           })
       }
   });
});

app.get('/remove', function (req, res) {
   var removeQueryInstance = new go_to_remove();
   removeQueryInstance.removeQuery(function(err,result){
       if(err){
           res.json({
               data:err,
               value:false
           })
       } else{
             res.json({
               data:result,
               value:true
           })
       }
   });
});