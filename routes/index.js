var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Cart = require('../models/cartX');
var Cart2 = require('../models/cart2');
var Category = require('../models/category');
var nodemailer = require('nodemailer');
var Product = require('../models/product');
var Order = require('../models/order');
var PStats = require('../models/productStats');
var CStats = require('../models/categoryStats');
var MStats = require('../models/makeStats');
var Order2 = require('../models/order2');
var Make = require('../models/make');
var Models = require('../models/models');
var xlsx = require('xlsx')
var multer = require('multer')
const fs = require('fs')
var path = require('path');
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var moment = require('moment')
/*const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;*/
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";
/*const connectEnsureLogin = require('connect-ensure-login')*/


var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})



var upload = multer({
    storage:storage
})








router.get('/', function (req, res, next) {
  var messages = req.flash('error');
  
  res.render('login', { messages: messages, hasErrors: messages.length > 0});
});
router.post('/', passport.authenticate('local.signin', {
  failureRedirect: '/',
  failureFlash: true
}), function (req, res, next) {
  if(req.user.role == "admin"){
    res.redirect("/orderVI");
  }else{
      res.redirect('/')
  }
  
});





router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
    if(err) return next(err);
    res.redirect("/");
  });
});

  
  
//

router.get('/orderVI',isLoggedIn, function(req,res){
    let ord6 =[]
    var id = req.user._id
    User.find({_id:id},  function(err,nocs){
   
  let num = nocs[0].num
    
  
    Order.find({},function(err,docs){
  var size = docs.length - 1
  
  let cart=[]
     let cart2=[]
     let prop = []
      for(var i = 0; i<docs.length;i++){
     
  
  
  
  
    // cart.push(docs[i].cart)
     //console.log(cart.length)
    
  
     cart2.push(docs[i].cart)
    let name = docs[i].buyerName
    let mobile = docs[i].buyerMobile
     if(i == size){
      console.log(cart2.length, 'cart length')
     for(var x=0;x<cart2.length;x++){
       
       let properties = Object.keys(cart2[x].items);
       //console.log(properties.length,'properties length'+ x)
       //console.log(properties,'properties'+ x)
  let sz = properties.length - 1
      for(var c = 0; c<properties.length;c++){
        prop.push(properties[c])
        //console.log(properties[c])
        if(c == sz){
         // console.log(properties[c])
         // prop.push(properties[c])
  //console.log(properties +'index'+ x)
  //console.log(prop,'prop')
  //console.log(prop.length)
  //console.log(prop.length,'outta loop')
  //console.log(prop,'prop')
  //console.log(prop.length,'prop length')
  
  let psize= Object.keys(cart2[x].items)
  //psize.push(Object.keys(cart2[x].items))
  //console.log(psize.length,'psize length')
  let psizeX = psize.length
  
  
  
  
  let count = -1
  for(num;num<prop.length;num++){
  count++
  //console.log(num,'n')
  //console.log(count, 'count')
  
  if(count <=psizeX){
  
    ord6.push(cart2[x].items[prop[num]])
    //console.log(x+'x'+ 'n'+ num)
  
   //console.log(cart2[x].items[prop[n]],'zvinobuda')
   User.findByIdAndUpdate(id,{$set:{num:num}},  function(err,docs){
   
  
   })
   
  }
  else if (count>psizeX){
  break;
  
  }
   
    
   //console.log(count,'count')
   // console.log(cart2[x].items[prop[n]],'zvafa'+ n)
   // console.log(cart2[x].items[prop[n]],'zvafa'+ n)
  // ord6.push(cart2[x].items[prop[n]])
   //console.log(cart2[x].items[prop[x]].item)
   
  }
  
  
  }
  
  //console.log(cart2[x].items[prop[c]],'zvafa'+ x)
      }
  
  //
     }
     //console.log(ord6.length, 'length')
     //console.log(ord6)
     console.log(ord6.length,'length')
   
     for(var q=0;q<ord6.length;q++){
    
    
    let ord = new Order2()
    
    ord.name = ord6[q].item.name
    ord.category = ord6[q].item.category
    ord.type = ord6[q].item.type
    ord.id = ord6[q].item._id
    ord.price = ord6[q].price
    ord.buyerName=name
    ord.buyerMobile = mobile
    ord.status = ord6[q].status
    ord.date = ord6[q].date
    ord.price2 = ord6[q].price2
    ord.qty = ord6[q].qty
    ord.make = ord6[q].item.make
    ord.save()
  
     }
   
     
  }
  
      }
  
  
  
      res.redirect('/user')
    })
   
  })
  
  })
  
  router.get('/user',isLoggedIn,function(req,res){
    var id = req.user._id
    Order2.find({},function(err,nocs){
     console.log(nocs.length,'size'+'user')
        let size = nocs.length
    User.findByIdAndUpdate(id,{$set:{num:size}},function(err,doc){
if(!err){
  res.redirect('/pstats')
}
})
      
    })
 
  })
  
  router.get('/pstats',isLoggedIn,function(req,res){
    Order2.find({},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let id = docs[i].id;
        let name= docs[i].name
        let category = docs[i].category
        let make = docs[i].make
        let type = docs[i].type
  
        
       
          PStats.find({id:id},function(err,tocs){
          let size = tocs.length
       
          if(tocs == 0){
            let ord = new PStats()
  
            ord.name =name
            ord.id =id
            ord.qty = 0
            ord.category = category
            ord.make = make
            ord.type= type
            ord.save()
  
          }
         
  
        })
     
      }
      res.redirect('/pup')
    })
  })
  
  
      
  router.get('/pup',function(req,res){
    PStats.find({},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        let id = docs[i].id
        PStats.find({id:id},function(err,nocs){
          if(nocs.length > 1){
            PStats.findByIdAndRemove(nocs[1]._id, function(err,tocs){
  
            })
          }
        })
      }
      res.redirect('/pstats2')
    })
  })
  
  
  
  
  
  router.get('/pstats2',function(req,res){
   
    Order2.find({},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let name = docs[i].name
        let id = docs[i].id
  
        Order2.find({ id:id},function(err,tocs){
          let arr=[]
          for(var c = 0;c<tocs.length; c++){
            arr.push(tocs[c].qty)
              }
         let total=0;
          for(var c in arr) { total += arr[c]; }
        
          //subtracting total income from amount owing
         console.log(total,'total',id)
  
  
         PStats.find({id:id},function(err,locs){
  console.log(id,'id')
          if(locs.length >= 1){
            let id2 = locs[0]._id
            PStats.findByIdAndUpdate(id2,{$set:{qty:total}},function(err,kocs){
  
            })
          }
  
  
  
         })
        })
       
      }
      res.redirect('/cstats')
    })
  })
  
  
  
  
  
  router.get('/cstats',isLoggedIn,function(req,res){
    Order2.find({},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let id = docs[i].id;
        let name= docs[i].name
        let category = docs[i].category
        let make = docs[i].make
        let type = docs[i].type
  
        
       
          CStats.find({category:category},function(err,tocs){
          let size = tocs.length
       
          if(tocs.length == 0){
            let ord = new CStats()
  
          
           
            ord.qty = 0
            ord.category = category
            ord.make = make
            ord.type= type
            ord.save()
  
          }
         
  
        })
      
      }
      res.redirect('/cup')
    })
  })
  
  
  
      
  router.get('/cup',function(req,res){
    CStats.find({},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        let category = docs[i].category
        CStats.find({category:category},function(err,nocs){
          if(nocs.length > 1){
            for(var a = 1;a<nocs.length;a++){
            CStats.findByIdAndRemove(nocs[a]._id, function(err,tocs){
  
            })
          }
          }
        })
      }
      res.redirect('/cstats2')
    })
  })
  
  
  
  
  
  router.get('/cstats2',function(req,res){
   
    Order2.find({},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let make = docs[i].make
        let category = docs[i].category
  
        Order2.find({category:category},function(err,tocs){
          let arr=[]
          for(var c = 0;c<tocs.length; c++){
            arr.push(tocs[c].qty)
              }
         let total=0;
          for(var c in arr) { total += arr[c]; }
        
          //subtracting total income from amount owing
         console.log(total,'total')
  
  
         CStats.find({category:category},function(err,locs){
  
          if(locs){
            let id2 = locs[0]._id
            CStats.findByIdAndUpdate(id2,{$set:{qty:total}},function(err,kocs){
  
            })
          }
  
  
  
         })
        })
   
      }
      res.redirect('/mstats')
    })
  })
  
  
  
  router.get('/mstats',isLoggedIn,function(req,res){
    Order2.find({},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let id = docs[i].id;
        let name= docs[i].name
        let category = docs[i].category
        let make = docs[i].make
        let type = docs[i].type
  
        
       
          MStats.find({make:make},function(err,tocs){
          let size = tocs.length
       
          if(tocs.length == 0){
            let ord = new MStats()
  
          
           
            ord.qty = 0
            ord.category = category
            ord.make = make
            ord.type= type
            ord.save()
  
          }
         
  
        })
       
      }
      res.redirect('/mup')
    })
  })
  
  
  router.get('/mup',function(req,res){
    MStats.find({},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        let make = docs[i].make
        MStats.find({make:make},function(err,nocs){
          if(nocs.length > 1){
            for(var a = 1;a<nocs.length;a++){
            MStats.findByIdAndRemove(nocs[a]._id, function(err,tocs){
  
            })
          }
          }
        })
      }
      res.redirect('/mstats2')
    })
  })
  
  router.get('/mstats2',function(req,res){
   
    Order2.find({},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let make = docs[i].make
        let category = docs[i].category
  
        Order2.find({make:make},function(err,tocs){
          let arr=[]
          for(var c = 0;c<tocs.length; c++){
            arr.push(tocs[c].qty)
              }
         let total=0;
          for(var c in arr) { total += arr[c]; }
        
          //subtracting total income from amount owing
         console.log(total,'total')
  
  
         MStats.find({make:make},function(err,locs){
  
          if(locs){
            let id2 = locs[0]._id
            MStats.findByIdAndUpdate(id2,{$set:{qty:total}},function(err,kocs){
  
            })
          }
  
  
  
         })
        })
      }
      res.redirect('/user2')
    })
  })
  

  router.get('/user2',isLoggedIn,function(req,res){
    var id = req.user._id
    Order2.find({},function(err,nocs){
     console.log(nocs.length,'size'+'user2')
        let size = nocs.length
    User.findByIdAndUpdate(id,{$set:{num:size}},function(err,doc){
if(!err){
  res.redirect('/dash')
}
})
      
    })
 
  })
  
  //category Chart 
  
  router.post('/categoryChart', function(req,res){
  
          CStats.find({},function(err,docs){
            if(docs == undefined){
              res.redirect('/')
            }else
        
               res.send(docs)
           
            
             })
        
        })
  
  
  
       
  
  
  
        router.get('/dash',isLoggedIn,function(req,res){
          var pro = req.user
            res.render('index',{pro:pro})
          })
  
  
          router.post('/makeChart', function(req,res){
  
            MStats.find({},function(err,docs){
              if(docs == undefined){
                res.redirect('/')
              }else
          
                 res.send(docs)
             
              
               })
          
          })
    

  
router.get('/addCategory',isLoggedIn,function(req,res){
  var pro = req.user
    res.render('catg',{pro:pro})
  })
  
  
  router.post('/addCategory', isLoggedIn,  function(req,res){
    var pro = req.user
   name = req.body.name;
        req.check('name','Enter Name Of Category').notEmpty();
  
      
        
        var errors = req.validationErrors();
             
        if (errors) {
        
          req.session.errors = errors;
          req.session.success = false;
          res.render('catg',{ errors:req.session.errors,pro:pro})
        
      }
      else{
        
        Make.findOne({'name':name})
          .then(cat =>{
              if(cat){ 
    
             req.session.message = {
              type:'errors',
               message:'Make already exists'
             }     
                res.render('catg', {
                   message:req.session.message ,pro:pro
                })
              }else
      
        var cat = new Make();
      
        cat.name = name;
     
       
     
      
      
        cat.save()
          .then(cat =>{
           
            req.session.message = {
              type:'success',
              message:'Make added'
            }  
            res.render('catg',{message:req.session.message,pro:pro});
        
      
        })
      
          .catch(err => console.log(err))
        
        
        })
      }
      
      
  })
  
  
  router.get('/products',isLoggedIn, (req, res) => {
    var pro = req.user
    Product.find({},(err, docs) => {
        if (!err) {
            res.render("list", {
               list:docs,pro:pro
              
            });
        }
    });
    });
    
    
    
  
  
  
  
  
  
  router.get('/catgSeq',isLoggedIn,function(req,res){
    var pro = req.user
    var arr1=[]  
    Make.find({}, function(err,docs){
      arr1=docs;
    res.render('batch',{arr1:arr1,pro:pro})
  
    })
    
    })
    
    router.post('/catgSeq',isLoggedIn, function(req,res){
         var pro = req.user

  var category = req.body.category
    var id = req.user._id;
   
    
      req.check('category','Enter Category').notEmpty();
  
     
      var errors = req.validationErrors();
      if (errors) {
     
        req.session.errors = errors;
        req.session.success = false;
        res.render('batch',{errors:req.session.errors,pro:pro})
     
      
     }
     else
    User.findOne({ 'id':id})
    .then(clax =>{
        if(clax){ 
       User.findByIdAndUpdate(id,{$set:{ category:category}},function(err,docs){
    console.log(id)
    
       })
       res.redirect('/typeX')
    
        }else
    
        req.session.message = {
          type:'errors',
          message:'User does not exist'
        }   
      res.render('batch',{message:req.session.message, pro:pro});
      
    
    
    
      })
    
    })
    
  
    router.get('/typeX',isLoggedIn,function(req,res){
  
       var pro = req.user.category
       console.log(pro,'pro')
        res.render('type',{pro:pro})
    
    
        
        })
  
        router.post('/typeX', isLoggedIn,  function(req,res){
          var pro = req.user
            name = req.body.category;
            type = req.body.type;
                 req.check('category','Enter Name Of Category').notEmpty();
                 req.check('type','Enter Type of Product').notEmpty();
               
                 
                 var errors = req.validationErrors();
                      
                 if (errors) {
                 
                   req.session.errors = errors;
                   req.session.success = false;
                   res.render('type',{ errors:req.session.errors,pro:pro})
                 
               }
               else{
                 
                   Category.findOne({'name':name,'type':type})
                   .then(cat =>{
                       if(cat){ 
             
                      req.session.message = {
                       type:'errors',
                        message:'Type already exists'
                      }     
                         res.render('type', {
                            message:req.session.message ,
                         })
                       }else
               
                       Category.findOne({'name':name})
                       .then(cat =>{
                      console.log(cat._id,'cat')
  
                        Category.findByIdAndUpdate(cat._id,{$set:{ type:type}},function(err,docs){
                            console.log('klopp')
                            
                               })
  
                              
                           })
                          
                
                           res.redirect('/typeX')
               
               
               
                 })
               }
               
               
           })
         
  
  
    /*
    router.get('/import',function(req,res){
      res.render('imports')
    })
    
  
    
    router.post('/import', upload.single('file'),  (req,res)=>{
     
    
      if(!req.file){
          req.session.message = {
            type:'errors',
            message:'Select File!'
          }     
            res.render('imports/students', {message:req.session.message}) 
          }else if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
              req.session.message = {
                  type:'errors',
                  message:'Upload Excel File'
                }     
                  res.render('imports', {message:req.session.message
                       
                   }) 
    
    
    
          }
            
          else{
       
  
          
              const file = req.file.filename;
      
              
                   var wb =  xlsx.readFile('./public/uploads/' + file)
           
                   var sheets = wb.Sheets;
                   var sheetNames = wb.SheetNames;
       
                   var sheetName = wb.SheetNames[0];
       var sheet = wb.Sheets[sheetName ];
       
          for (var i = 0; i < wb.SheetNames.length; ++i) {
           var sheet = wb.Sheets[wb.SheetNames[i]];
       
           console.log(wb.SheetNames.length)
           var data =xlsx.utils.sheet_to_json(sheet)
               
           var newData = data.map(async function (record){
       
          
         
        
            
           
  
  
            
  
  req.body.name = record.name     
  req.body.price = record.price  
  req.body.description = record.description 
  req.body.status = record.status  
  req.body.category = record.category  
  req.body.title = record.title
  req.body.filename = record.filename  
             
  
              
          
              try{
                req.check('price','Enter price').notEmpty();
                req.check('name','Enter Name').notEmpty();
                req.check('description','Enter Description').notEmpty();
                req.check('status','Enter status').notEmpty();
                req.check('title','Enter Title').notEmpty();
                req.check('filename','Enter Filename').notEmpty();
             
  
  
                var errors = req.validationErrors();
    
                if (errors) {
                  
                  req.session.errors = errors;
                  req.session.success = false;
                  for(let x=0;x<req.session.errors.length;x++){
                    throw new SyntaxError(req.session.errors[x].msg +" "+"on line")
                  }
                
            }
  
  
        
          
            var product = new Product();
                    product.name = req.body.name;
                    product.price = req.body.price
                    product.description = req.body.description;
                    product.status = req.body.status;
                    product.category= req.body.category;
                    product.title = req.body.title
                    product.filename = req.body.filename;
              
                  
                   
                    product.save()
                      .then(productId =>{
  
                     
                      })
               
                       
                   
                       
                     
                      // .catch(err => console.log(err))
                    }
                    catch(e){
                      res.send(e.message)
                     }
                      })
                    
                    
           
                    }
                    
                    
                      
                      
          
                     
          
                      
               
                  }
        
          
    
    
    })
    
  
  
  
  
  
  
  
  
  */
  
  
  
  
  
  
  
  
  
    
    router.get('/addProducts',isLoggedIn,function(req,res){
      var pro = req.user
      res.render('imports',{pro:pro})
    })
    
  
    
    router.post('/addProducts',isLoggedIn, upload.single('file'),  (req,res)=>{
      var pro = req.user
    
      if(!req.file){
          req.session.message = {
            type:'errors',
            message:'Select File!'
          }     
            res.render('imports/students', {message:req.session.message}) 
          }else if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
              req.session.message = {
                  type:'errors',
                  message:'Upload Excel File'
                }     
                  res.render('imports', {message:req.session.message,pro:pro
                       
                   }) 
    
    
    
          }
            
          else{
       
  
          
              const file = req.file.filename;
      
              
                   var wb =  xlsx.readFile('./public/uploads/' + file)
           
                   var sheets = wb.Sheets;
                   var sheetNames = wb.SheetNames;
       
                   var sheetName = wb.SheetNames[0];
       var sheet = wb.Sheets[sheetName ];
       
          for (var i = 0; i < wb.SheetNames.length; ++i) {
           var sheet = wb.Sheets[wb.SheetNames[i]];
       
           console.log(wb.SheetNames.length)
           var data =xlsx.utils.sheet_to_json(sheet)
               
           var newData = data.map(async function (record){
       
          
         
        
            
           
  
  
            
  
  req.body.name = record.name     
  req.body.price = record.price  
  req.body.price2 = record.price2  
  req.body.description = record.description 
  req.body.status = record.status  
  req.body.category = record.category  
  req.body.type = record.type
  req.body.zwl = record.zwl
  
  req.body.make = record.make
  req.body.filename = record.filename  
             
  
              
          
              try{
                req.check('price','Enter price').notEmpty();
                req.check('name','Enter Name').notEmpty();
           
                req.check('make','Enter Make').notEmpty();
                req.check('description','Enter Description').notEmpty();
                req.check('status','Enter status').notEmpty();
                req.check('category','Enter Category').notEmpty();
                req.check('filename','Enter Filename').notEmpty();
               
             
  
  
                var errors = req.validationErrors();
    
                if (errors) {
                  
                  req.session.errors = errors;
                  req.session.success = false;
                  for(let x=0;x<req.session.errors.length;x++){
                    throw new SyntaxError(req.session.errors[x].msg +" "+"on line")
                  }
                
            }
  
  
        
          
            var product = new Product();
                    product.name = req.body.name;
                    product.price = req.body.price
                    product.price2 = req.body.price2
                    product.description = req.body.description;
                    product.status = req.body.status;
                    product.category= req.body.category;
                    product.type = req.body.type;
                    product.zwl = req.body.zwl;
                  
                    product.make = req.body.make;
                    product.filename = req.body.filename;
              
                  
                   
                    product.save()
                      .then(productId =>{
  
                     
                      })
               
                       
                   
                       
                     
                      // .catch(err => console.log(err))
                    }
                    catch(e){
                      res.send(e.message)
                     }
                      })
                    
                    
           
                    }
                    
                    
                      
                      
          
                     
          
                      
               
                  }
        
          
    
    
    })
    
  
  
  
  
  
  
    
    router.get('/importMake',isLoggedIn,function(req,res){
      var pro = req.user
      res.render('importmak',{pro:pro})
    })
    
  
    
    router.post('/importMake',isLoggedIn, upload.single('file'),  (req,res)=>{
      var pro = req.user
    
      if(!req.file){
          req.session.message = {
            type:'errors',
            message:'Select File!'
          }     
            res.render('importmak', {message:req.session.message}) 
          }else if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
              req.session.message = {
                  type:'errors',
                  message:'Upload Excel File'
                }     
                  res.render('importmak', {message:req.session.message,pro:pro
                       
                   }) 
    
    
    
          }
            
          else{
       
  
          
              const file = req.file.filename;
      
              
                   var wb =  xlsx.readFile('./public/uploads/' + file)
           
                   var sheets = wb.Sheets;
                   var sheetNames = wb.SheetNames;
       
                   var sheetName = wb.SheetNames[0];
       var sheet = wb.Sheets[sheetName ];
       
          for (var i = 0; i < wb.SheetNames.length; ++i) {
           var sheet = wb.Sheets[wb.SheetNames[i]];
       
           console.log(wb.SheetNames.length)
           var data =xlsx.utils.sheet_to_json(sheet)
               
           var newData = data.map(async function (record){
       
          
         
        
            
           
  
  
            
  
  req.body.name = record.name     
  
             
  
              
          
              try{
            
                req.check('name','Enter Name').notEmpty();
   
               
             
  
  
                var errors = req.validationErrors();
    
                if (errors) {
                  
                  req.session.errors = errors;
                  req.session.success = false;
                  for(let x=0;x<req.session.errors.length;x++){
                    throw new SyntaxError(req.session.errors[x].msg +" "+"on line")
                  }
                
            }
  
  
        
          
            var product = new Make();
                    product.name = req.body.name;
                   
              
                  
                   
                    product.save()
                      .then(productId =>{
  
                     
                      })
               
                       
                   
                       
                     
                      // .catch(err => console.log(err))
                    }
                    catch(e){
                      res.send(e.message)
                     }
                      })
                    
                    
           
                    }
                    
                    
                      
                      
          
                     
          
                      
               
                  }
        
          
    
    
    })
    
  
  
  
  
  
  
  
  
  
  
    
    router.get('/importModel',isLoggedIn,function(req,res){
      var pro = req.user
      res.render('importmod',{pro:pro})
    })
    
  
    
    router.post('/importModel',isLoggedIn, upload.single('file'),  (req,res)=>{
      var pro = req.user
    
      if(!req.file){
          req.session.message = {
            type:'errors',
            message:'Select File!'
          }     
            res.render('importmod', {message:req.session.message}) 
          }else if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
              req.session.message = {
                  type:'errors',
                  message:'Upload Excel File'
                }     
                  res.render('importmod', {message:req.session.message,pro:pro
                       
                   }) 
    
    
    
          }
            
          else{
       
  
          
              const file = req.file.filename;
      
              
                   var wb =  xlsx.readFile('./public/uploads/' + file)
           
                   var sheets = wb.Sheets;
                   var sheetNames = wb.SheetNames;
       
                   var sheetName = wb.SheetNames[0];
       var sheet = wb.Sheets[sheetName ];
       
          for (var i = 0; i < wb.SheetNames.length; ++i) {
           var sheet = wb.Sheets[wb.SheetNames[i]];
       
           console.log(wb.SheetNames.length)
           var data =xlsx.utils.sheet_to_json(sheet)
               
           var newData = data.map(async function (record){
       
          
         
        
            
           
  
  
            
  
  req.body.num = record.num     
  req.body.make = record.make 
  
             
  
              
          
              try{
            
                req.check('num','Enter Num').notEmpty();
                req.check('make','Enter Make').notEmpty();
   
               
             
  
  
                var errors = req.validationErrors();
    
                if (errors) {
                  
                  req.session.errors = errors;
                  req.session.success = false;
                  for(let x=0;x<req.session.errors.length;x++){
                    throw new SyntaxError(req.session.errors[x].msg +" "+"on line"+record.count)
                  }
                
            }
  
  
        
          
            var product = new Models();
                    product.make = req.body.make;
                    product.num = req.body.num;
                   
              
                  
                   
                    product.save()
                      .then(productId =>{
  
                     
                      })
               
                       
                   
                       
                     
                      // .catch(err => console.log(err))
                    }
                    catch(e){
                      res.send(e.message)
                     }
                      })
                    
                    
           
                    }
                    
                    
  
                      
                      
          
                     
          
                      
               
                  }
        
          
    
    
    })
 
    

    router.get('/orders',isLoggedIn, (req, res) => {
      var pro = req.user
      Order2.find({},(err, docs) => {
          if (!err) {
              res.render("list", {
                 list:docs,pro:pro
                
              });
          }
      });
      });
      
      router.get('/clients',isLoggedIn,(req,res)=>{
        User.find({role:'client'},function(err,docs){
          if (!err) {
            res.render("clientList", {
               list:docs,
              
            });
        }
        })
      })
      
   router.get('/orderX/:id',isLoggedIn,  (req, res) => {

    var id = req.params.id
    var pro = req.user

  
     Order.findByIdAndUpdate(id,{$set:{status:'delivered'}},(err, docs) => {
         if (!err) {
             res.render("orderReport", {
                list:docs,pro:pro
               
             });
         }
     });
    
   });





    router.get('/report', isLoggedIn, function (req, res, next) {
      var pro = req.user
      Order.find({}, function(err, orders) {
          if (err) {
              return res.write('Error!');
          }
          var cart;
          orders.forEach(function(order) {
              cart = new Cart(order.cart);
              order.items = cart.generateArray();
          });
          res.render('orders', { orders: orders,pro:pro });
      });
  });


  router.get('/categories',isLoggedIn, (req, res) => {
    var pro = req.user
    Category.find({},(err, docs) => {
        if (!err) {
            res.render("list", {
               list:docs,pro:pro
              
            });
        }
    });
    });

    router.get('/type',isLoggedIn, (req, res) => {
      var pro = req.user
      Category.find({},(err, docs) => {
          if (!err) {
              res.render("list", {
                 list:docs,pro:pro
                
              });
          }
      });
      });














      
  
router.get('/forgot', function (req, res, next) {
  var messages = req.flash('error');
  res.render('forgot', { messages: messages, hasErrors: messages.length > 0});
});

router.post('/forgot',function(req,res){
  const { email } = req.body;

  let errors = [];

  //------------ Checking required fields ------------//
  if (!email) {
      errors.push({ msg: 'Please enter an email Address' });
  }

  if (errors.length > 0) {
      res.render('forgot', {
          errors,
          email
      });
  } else {
      User.findOne({ email: email }).then(user => {
          if (!user) {
              //------------ User already exists ------------//
              errors.push({ msg: 'User with Email Address does not exist!' });
              res.render('forgot', {
                  errors,
                  email
              });
          } else {

              const oauth2Client = new OAuth2(
                  "173872994719-pvsnau5mbj47h0c6ea6ojrl7gjqq1908.apps.googleusercontent.com", // ClientID
                  "OKXIYR14wBB_zumf30EC__iJ", // Client Secret
                  "https://developers.google.com/oauthplayground" // Redirect URL
              );

              oauth2Client.setCredentials({
                  refresh_token: "1//04T_nqlj9UVrVCgYIARAAGAQSNwF-L9IrGm-NOdEKBOakzMn1cbbCHgg2ivkad3Q_hMyBkSQen0b5ABfR8kPR18aOoqhRrSlPm9w"
              });
              const accessToken = oauth2Client.getAccessToken()

              const token = jwt.sign({ _id: user._id }, JWT_RESET_KEY, { expiresIn: '30m' });
              const CLIENT_URL = 'http://' + req.headers.host;
              const output = `
              <h2>Please click on below link to reset your account password</h2>
              
              <a href="${CLIENT_URL}/forgot/${token}">click here</a>
              <p><b>NOTE: </b> The activation link expires in 30 minutes.</p>
              `;

              User.updateOne({ resetLink: token }, (err, success) => {
                  if (err) {
                      errors.push({ msg: 'Error resetting password!' });
                      res.render('forgot', {
                          errors,
                          email
                      });
                  }
                  else {
                      const transporter = nodemailer.createTransport({
                         
                          service: 'gmail',
                          auth: {
                              user: "cashreq00@gmail.com",
                              pass: "itzgkkqtmchvciik",
                          },
                      });

                      // send mail with defined transport object
                      const mailOptions = {
                          from: '"Auth Admin" <cashreq00@gmail.com>', // sender address
                          to: email, // list of receivers
                          subject: "Account Password Reset: Part Connection ✔", // Subject line
                          html: output, // html body
                      };

                      transporter.sendMail(mailOptions, (error, info) => {
                          if (error) {
                              console.log(error);
                              req.flash(
                                  'error_msg',
                                  'Something went wrong on our end. Please try again later.'
                              );
                              res.redirect('/forgot');
                          }
                          else {
                              console.log('Mail sent : %s', info.response);
                              req.flash(
                                  'success_msg',
                                  'Password reset link sent to email address. Please follow the instructions.'
                              );
                              res.redirect('/');
                          }
                      })
                  }
              })

          }
      });
  }
})



//------------ Reset Password Route ------------//
router.get('/reset/:id', (req, res) => {
  // console.log(id)
  res.render('users/reset', { id: req.params.id })
});

router.post('/reset/:id',(req,res)=>{
  var { password, confirmPassword } = req.body;
    const id = req.body.id
    console.log('id',id)
    let errors = [];

    //------------ Checking required fields ------------//
    if (!password || !confirmPassword) {
        req.flash(
            'error_msg',
            'Please enter all fields.'
        );
        res.redirect(`/reset/${id}`);
    }

    //------------ Checking password length ------------//
    else if (password.length < 8) {
        req.flash(
            'error_msg',
            'Password must be at least 8 characters.'
        );
        res.redirect(`/reset/${id}`);
    }

    //------------ Checking password mismatch ------------//
    else if (password != confirmPassword) {
        req.flash(
            'error_msg',
            'Passwords do not match.'
        );
        res.redirect(`/reset/${id}`);
    }

    else {
       var user = User();
       password=req.body.password=encryptPassword(req.body.password)

console.log(password)
       User.findByIdAndUpdate(id,{$set:{password:password}},function(err,toc){

       })

       res.redirect('/');
             
            
    }
});


router.get('/forgot/:token', (req,res)=>{
  const { token } = req.params;

  if (token) {
      jwt.verify(token, JWT_RESET_KEY, (err, decodedToken) => {
          if (err) {
              req.flash(
                  'error_msg',
                  'Incorrect or expired link! Please try again.'
              );
              res.redirect('/');
          }
          else {
              const { _id } = decodedToken;
              User.findById(_id, (err, user) => {
                  if (err) {
                      req.flash(
                          'error_msg',
                          'User with email ID does not exist! Please try again.'
                      );
                      res.redirect('/');
                  }
                  else {
                      res.redirect(`/reset/${_id}`)
                  }
              })
          }
      })
  }
  else {
      console.log("Password reset error!")
  }

});









// change password
  
// change password
router.get('/pass2',isLoggedIn, (req, res) => {
  var pro = req.user
   User.findById(req.user._id, (err, doc) => {
       if (!err) {
           res.render("change", {
              
               user: doc,pro:pro
             
           });
       }
   });
 });
 
 

 
 router.post('/pass2',isLoggedIn, function(req,res){
   var user = new User();
   var pro = req.user
   req.check('password','Enter New Password').notEmpty();
 
   req.check('confirmPassword', 'Confirm Password').notEmpty();
 
 
 req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
 var errors = req.validationErrors();
 
 
 
 
  if (errors) {
 
  
 
     req.session.errors = errors;
     req.session.success = false;
     res.render('change',{  errors:req.session.errors, pro:pro 
    })
 
   
   
 
 
 }
 else if (req.body.password === req.body.confirmPassword && !req.validationErrors()){
   user.password=req.body.password=encryptPassword(req.body.password)
 
 
 
 
 
 User.findOneAndUpdate({_id:req.body._id},req.body,
  { new: true }, (err, doc) => {
     if (!err) {
     
       req.session.message = {
         type:'success',
         message:'Password Change Successful'
       }  
       res.render('change',{message:req.session.message, user:req.user, pro:pro
        }); }
     else {
       console.log('error'+err)
 
     }
   
 })
 }
 
 
 
 })
 
 
 
     
 function encryptPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  
  };
             
     
     


  module.exports = router;

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else{
        res.redirect('/')
    }
  }
  
    
    