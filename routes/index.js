var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Cart2 = require('../models/cart2');
var Category = require('../models/category');

var Product = require('../models/product');
var Order = require('../models/order');
var Make = require('../models/make');
var Models = require('../models/models');
var xlsx = require('xlsx')
var multer = require('multer')
const fs = require('fs')
var path = require('path');



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



/* GET home page. */
/*
router.get('/', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});*/



router.get('/',function(req,res){
Product.find(function(err,docs){
    console.log(docs.length,'length')
    for(var i = 0;i<docs.length;i++){
        console.log(docs[i].zwl)
      let zwl =   docs[i].zwl
      let price = docs[i].price
      let price2 = zwl * price
      Product.findByIdAndUpdate(docs[i]._id,{$set:{price2:price2}},function(err,locs){

      })
    }
    res.redirect('/shop')
})

})


router.get('/shop',function(req, res, next){

    var successMsg = req.flash('success')[0];
    req.session = null;
    var arr = []
    Make.find({},function(err,mocs){
arr = mocs
  
    Product.find({status:'best selling'},function (err, locs) {
        console.log(locs.length,'size')
        var productChunksx = [];
        var chunkSizex = 3;
        for (var i = 0; i < 4; i += chunkSizex) {
            productChunksx.push(locs.slice(i, i + chunkSizex));
        }

        Product.find({status:'best selling'},function (err, docs) {
            console.log(docs.length,'size')
            var productChunks = [];
            var chunkSize = 4;
            for (var i = 0; i <docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
        res.render('index2',{products: productChunks, productsX: productChunksx, successMsg: successMsg, noMessages: !successMsg,arr:arr})
    })
   
})
})
  })


  router.get('/shopX',function(req, res, next){
 
    req.session.cart2 = null;
    var arr = []
    Make.find({},function(err,mocs){
arr = mocs
    Product.find({status:'best selling'},function (err, locs) {
        console.log(locs.length,'size')
        var productChunksx = [];
        var chunkSizex = 3;
        for (var i = 0; i < 4; i += chunkSizex) {
            productChunksx.push(locs.slice(i, i + chunkSizex));
        }

        Product.find({status:'best selling'},function (err, docs) {
            console.log(docs.length,'size')
            var productChunks = [];
            var chunkSize = 4;
            for (var i = 0; i <docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
        res.render('index3',{products: productChunks, productsX: productChunksx,arr:arr})
    })
  })
})
  })




router.post('/fill',function(req,res){

console.log(req.body.value)
    var category = req.body.value
Product.find({make:category},function(err,docs){

    if(docs == undefined){
        res.redirect('/')
       }else
      
         res.send(docs)

})

})








router.get('/search',function(req,res){
  var arr = []
  Category.find({},function(err,mocs){
arr = mocs
  Product.find({},function (err, docs) {
    Product.find({},function (err, gocs) {
      
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 3; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('searc', {title: 'Angular Bearings', productsX: productChunks,arrX:arr});
  })
});
})
})

router.post('/search',function(req,res){
  var arrX = []
  Make.find({},function(err,mocs){
arrX = mocs
let mod = req.body.category_product;
   var name=req.body.s
console.log(name,'name')  
  Product.find({make:mod},function (err, gocs) {
    Product.find({name:name},function (err, ocs) {
      if(ocs.length > 0){
        var arr =[]
        arr = gocs
let filename = ocs[0].filename
let  name = ocs[0].name
var id = ocs[0]._id
let price = ocs[0].price
let type = ocs[0].type
let category = ocs[0].category

console.log(filename,name, 'klopp')

Product.find({type:type},function (err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 4; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
  
    Product.find({category:category},function (err, kocs) {
      
        
      var productChunksX = [];
      var chunkSizeX = 4;
      for (var i = 0; i < 3; i += chunkSize) {
          productChunksX.push(kocs.slice(i, i + chunkSizeX));
      }

//res.render('searc',{name:name, filename:filename,id:id,price:price, products:productChunks,arr:arr, arrX:arrX,productsX:productChunksX})
res.redirect('/search/'+id)

    })
})
      }else{
        res.render('search9',{name:name,arrX:arrX})
      }
    })
  
  })

});
})




router.get('/search/:id',function(req,res){
  var arr = []
  var id = req.params.id
  var arrX = []
  Make.find({},function(err,mocs){
arrX = mocs
  Product.find({_id:id},function (err, docs) {
    Product.find({},function (err, gocs) {
      let filename = docs[0].filename
      let price = docs[0].price
      let category = docs[0].category
      let make = docs[0].make
      let name = docs[0].name
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 3; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }


    Product.find({category:category},function (err, kocs) {
      
        
      var productChunksX = [];
      var chunkSizeX = 4;
      for (var i = 0; i < 3; i += chunkSize) {
          productChunksX.push(kocs.slice(i, i + chunkSizeX));
      }
    res.render('searc', { productsX: productChunks,make:make,name:name, category:category, products:productChunksX,arrX:arrX,filename:filename,price:price,id:id});
  })
})
});
})
})




















router.get('/searchX/',function(req,res){
  var arr = []
  if(req.params.id){

  var id = req.params.id
Make.find({},function(err,mocs){
arrX = mocs
  Product.find({_id:id},function (err, docs) {
    Product.find({},function (err, gocs) {
      
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 3; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
 res.redirect('searchX/`{{id}}`')
  })

});
})}else{
  
  Make.find({},function(err,mocs){
arrX = mocs
  Product.find({},function (err, docs) {
    Product.find({},function (err, gocs) {
      
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 3; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('searcZim', { productsX: productChunks,arrX:arrX});
  })

});
})
}
})

router.get('/searchX/:id',function(req,res){
  var arr = []
  var id = req.params.id
  Make.find({},function(err,mocs){
arrX = mocs
  Product.find({_id:id},function (err, docs) {
    Product.find({},function (err, gocs) {
      let filename = docs[0].filename
      let price = docs[0].price2
      let category = docs[0].category
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 3; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }


    Product.find({category:category},function (err, kocs) {
      
        
      var productChunksX = [];
      var chunkSizeX = 4;
      for (var i = 0; i < 3; i += chunkSize) {
          productChunksX.push(kocs.slice(i, i + chunkSizeX));
      }
    res.render('searcZim', { productsX: productChunks, products:productChunksX,arrX:arrX,filename:filename,price2:price,id:id});
    })
  })
});
})
})




router.get('/about',function(req,res){
    res.render('about')
})


router.get('/review/:id',function(req,res){
  var id = req.params.id
  var arrX = []
  Make.find({},function(err,mocs){
arrX = mocs
  Product.find({_id:id},function(err,docs){
      let name = docs[0].name
      let filename = docs[0].filename
let category = docs[0].category
let price = docs[0].price
let make = docs[0].make
let type = docs[0].type
  Product.find({name:name},function(err,gocs){
      let num  = gocs.length;
      console.log(num,'name')
      Product.find({type:type},function (err, docs) {
        var productChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < 4; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
      
        Product.find({category:category},function (err, kocs) {
          
            
          var productChunksX = [];
          var chunkSizeX = 4;
          for (var i = 0; i < 3; i += chunkSize) {
              productChunksX.push(kocs.slice(i, i + chunkSizeX));
          }
      res.render('searc',{name:name,category:category,make:make, filename:filename,id:id,price:price, products:productChunks, arrX:arrX,productsX:productChunksX})
  })
})
  })
})
  })
  })





router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    console.log(productId,'smolich')
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    var total

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/sec');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
    
        console.log(product.id,'product')
        console.log(productId,'productId')
      
       
        //res.send(cart);
       // console.log(req.session.cart);
       res.send(cart);
    });
});



router.get('/add-to-cartX/:id', function(req, res, next) {
  var productId = req.params.id;
  console.log(productId,'smolich')
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  var total

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/sec');
     }
      cart.add(product, product.id);
      req.session.cart = cart;
  
      console.log(product.id,'product')
      console.log(productId,'productId')
    
     
      //res.send(cart);
     // console.log(req.session.cart);
     res.redirect('/cart')
  });
});

router.get('/add-to-cart1/:id', function(req, res, next) {
  var productId = req.params.id;
  console.log(productId,'smolich')
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  var total

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/sec');
     }
      cart.add(product, product.id);
      req.session.cart = cart;
  
      console.log(product.id,'product')
      console.log(productId,'productId')
    
     
      //res.send(cart);
     // console.log(req.session.cart);
   res.redirect('/cartX')
  });
});


/*
router.get('/add-to-cartX/:id', function(req, res, next) {
    var productId = req.params.id;
    console.log(productId,'smolich')
      var cart = new Cart(req.session.cart ? req.session.cart : {});
    var cart2 = new Cart2(req.session.cart2 ? req.session.cart2 : {});
  
    var total

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/sec');
       }
        cart2.add(product, product.id);
        req.session.cart2 = cart2;
        cart.add(product, product.id);
        
        console.log(product.id,'product')
        console.log(productId,'productId')
      
       
        //res.send(cart);
       // console.log(req.session.cart);
       res.send(cart);
    });
});*/










router.get('/add-to-cart3/:id', function(req, res, next) {
    var productId = req.params.id;
    console.log(productId,'smolich')
    var cart = new Cart2(req.session.cart ? req.session.cart : {});
    var total

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/sec');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(product.id,'product')
        console.log(productId,'productId')
      
       
        //res.send(cart);
       // console.log(req.session.cart);
       res.send(cart);
    });
});


router.get('/mf135/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Conrod Bearing',arrX:mocs, products: productChunks,arr:arr});
});
})
})
})

router.get('/mf135/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Main Bearing',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})










router.get('/mf135/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
})
})



router.get('/mf135/liners',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'liners'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Liners',arrX:arrX, products: productChunks,arr:arr});
});
})
})
})


router.get('/mf135/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})






router.get('/mf135/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})






router.get('/mf135/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Seals',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

router.get('/mf135/thrust',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'thrust washer'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf135/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

router.get('/mf135/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 135', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 135',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf375/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})





router.get('/mf375/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Main Bearing',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf375/front',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', type:'front bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Front Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf375/rear',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', type:'rear bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Rear Bearing',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf375/balancers',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'balancers'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Balancers',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf375/sleeves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'sleeves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Sleeves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf375/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf375/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf375/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Piston Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf375/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Seals', products: productChunks,arr:arr});
});
})

})



router.get('/mf375/thrust',function(req,res){

  Product.find({make:'MASSEY FERGUSON 375', category:'thrust washer'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
})
})


router.get('/mf375/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf375/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 375',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf399/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 375', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf399/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Main Bearing',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

router.get('/mf399/sleeves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'sleeves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Sleeves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})





router.get('/mf399/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf399/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf399/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf399/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Seals',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf399/thrust',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'thrust'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf399/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf399/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 399', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 399 Others',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})





router.get('/mf440/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 440', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 440 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf440/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 440', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 440 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf440/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 440', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 440 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})





router.get('/mf440/sleeves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 440', category:'sleeves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 440 Sleeves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

router.get('/mf440/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 440', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 440 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

router.get('/mf440/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 440', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 440 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf290/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf290/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Main Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf290/front',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', type:'front bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Front Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf290/rear',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', type:'rear bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Rear Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})





router.get('/mf290/balancers',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'balancers'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Balancers',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf290/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf290/sleeves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'sleeves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Sleeves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf290/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf290/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf290/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf290/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Seals',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf290/thrust',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'thrust washer'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf290/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf290/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 290 Others',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})






router.get('/mf240/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Conrod Bearing',arrX:arrX, products: productChunks,arr:arr});
});
  })
})
})

router.get('/mf240/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Main Bearing',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})










router.get('/mf240/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
})
})



router.get('/mf240/liners',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'liners'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Liners',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf240/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})






router.get('/mf240/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })

})






router.get('/mf240/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Seals',arrX:arrX, products: productChunks,arr:arr});
});
  })
})

})

router.get('/mf240/thrust',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'thrust washer'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf240/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

router.get('/mf240/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 240', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 240',arrX:arrX, products: productChunks,arr:arr});
});
})
  })

})







router.get('/mf390/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf390/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Main Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf390/front',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', type:'front bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Front Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })

})



router.get('/mf390/rear',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', type:'rear bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Rear Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})





router.get('/mf390/balancers',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'balancers'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Balancers',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf390/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf390/sleeves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'sleeves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Sleeves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf390/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf390/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf390/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/mf390/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Seals',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf390/thrust',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 290', category:'thrust washer'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/mf390/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/mf390/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'MASSEY FERGUSON 390', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'MASSEY FERGUSON 390 Others',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




/*
router.get('/shop', function (req, res, next) {
  var id1 = '63182117b23ba72ea533c298';
  var id2 = '6318217bb23ba72ea533c29b';
  var id3 = '631821aab23ba72ea533c29e';
  var id4 = '631821d9b23ba72ea533c2a1';
    Product.find({ctegory:'work suits'},function (err, docs) {
        var productChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('health-shop', {title: 'Shopping Cart', products: productChunks,id1:id1, id2:id2, id3:id3, id4:id4});
    });
});*/



router.get('/ld8860/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld8860/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Main Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld8860/front',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', type:'front bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Front Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/ld8860/rear',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', type:'rear bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Rear Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})





router.get('/ld8860/balancers',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'balancers'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Balancers',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld8860/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/ld8860/sleeves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'sleeves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Sleeves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld8860/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/ld8860/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/ld8860/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/ld8860/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Seals',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld8860/thrust',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'thrust washer'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld8860/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/ld8860/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 8860', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 8860 Others',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})









///

router.get('/ld7860/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Conrod Bearing',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

router.get('/ld7860/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Main Bearing',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})










router.get('/ld7860/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
})
})



router.get('/ld7860/liners',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'liners'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Liners',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/ld7860/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})






router.get('/ld7860/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})






router.get('/ld7860/seals',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'seals'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Seals',arrX:arrX, products: productChunks,arr:arr});
});
})
  })

})

router.get('/ld7860/thrust',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'thrust washer'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Thrust Washer Set',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld7860/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld7860/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/ld7860/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'LANDINI 7860', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'LANDINI 7860',arrX:arrX, products: productChunks,arr:arr});
});
})
  })

})



///FORD
router.get('/f6640/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/f6640/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Main Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/f6640/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/f6640/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/f6640/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/f6640/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/f6640/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/f6640/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6640', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6640 Others',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


//FORD 2
router.get('/f6610/conrod',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', type:'conrod bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Conrod Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/f6610/main',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', type:'main bearing'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Main Bearings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/f6610/gaskets',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', category:'gaskets'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Gaskets',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/f6610/pistons',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', category:'pistons'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Pistons',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/f6610/pumps',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', category:'pumps'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Pumps',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})




router.get('/f6610/rings',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', category:'rings'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Rings',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})



router.get('/f6610/valves',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', category:'valves'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Valves',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})


router.get('/f6610/others',function(req,res){
  var arrX =[]
  Make.find({},function(err,mocs){
    arrX = mocs
  Product.find({make:'FORD 6610', category:'others'},function (err, docs) {
    Product.find({},function (err, gocs) {
        var arr =[]
        arr = gocs
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop', {title: 'FORD 6610 Others',arrX:arrX, products: productChunks,arr:arr});
});
})
  })
})

//autocomplete teacherName & uid

router.get('/autocompleteTS/', function(req, res, next) {


    var regex= new RegExp(req.query["term"],'i');
    
    var uidFilter =Product.find({name:regex},{'name':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
    
    
    uidFilter.exec(function(err,data){
    
    
    console.log('data',data)
    
    var result=[];
    
    if(!err){
     if(data && data.length && data.length>0){
       data.forEach(user=>{
    
        
     
    
          
         let obj={
           id:user._id,
           label: user.name,
    
       
         /*  name:name,
           surname:surname,
           batch:batch*/
          
          
       
         
          
    
           
         };
        
         result.push(obj);
         console.log('object',obj.id)
       });
    
     }
    
     res.jsonp(result);
     console.log('Result',result)
    }
    
    })
    
    });


//this routes autopopulates teachers info from the id selected from automplet1
router.post('/autoTS',function(req,res){
    var fullname = req.body.code
    
    
    
    Products.find({name:fullname},function(err,docs){
    if(docs == undefined){
     res.redirect('/autoTS')
    }else
    
      res.send(docs[0])
    })
    
    
    })
    
    



   //adding product categories
   router.get('/addCategory', function(req,res){
 res.render('categoryX')
    
  })
  
  
  
  router.post('/addCategory', function(req,res){
    var category1 = req.body.category1;
  
  
      req.check('category1','Enter Category').notEmpty();
     
    
      
      var errors = req.validationErrors();
           
      if (errors) {
      
        req.session.errors = errors;
        req.session.success = false;
        res.render('categoryX',{ errors:req.session.errors,})
        
    }
    else{
      
        Category.findOne({'category1':category1})
        .then(clax =>{
            if(clax){ 
             
           req.session.message = {
            type:'errors',
             message:'Category already exists'
           }     
              res.render('categoryX', {
                 message:req.session.message 
          
            })
            }else
    
      var cat = new Category();
    
      cat.category1 = req.body.category1;
      
    
    
      cat.save()
        .then(cat =>{
        
          req.session.message = {
            type:'success',
            message:'Category added'
          }  
          res.render('categoryX',{message:req.session.message,});
      
    
      })
    
        .catch(err => console.log(err))
      
      
      })
    }
    
    
    
    
    
    
    })
  
  
  
  
router.get('/addX',function(req, res, next){

    Category.find({}, function(err,docs){
let arr = docs
    res.render('add-product',{arr:arr})
    })
})

router.post('/addX',upload.single('file'),function(req, res, next) {

console.log(req.body.description,"desc")
    req.check('name','Enter Product Name').notEmpty();
    req.check('price','Enter Price').notEmpty().isNumeric();
    req.check('description','Enter Description').notEmpty();
    req.check('category1','Enter Category').notEmpty();


    if(!req.file){
        Category.find({}, function(err,docs){
            let arr = docs
        
          req.session.message = {
            type:'errors',
            message:'Select File!'
          }     
            res.render('add-product', {message:req.session.message,arr:arr
            })
        })
             
            }
               
var errors = req.validationErrors();
if (errors) {
    Category.find({}, function(err,docs){
        let arr = docs

  req.session.errors = errors;
  req.session.success = false;
  res.render('add-product',{ errors:req.session.errors, arr:arr})
    })

}

            else{
                const imageFile = req.file.filename;
        
                var product = new Product();
                        product.name = req.body.name;
                        product.price = req.body.price
                        product.description = req.body.description;
                        product.status = 'null';
                        product.category= req.body.category1;
                        product.title = req.body.title
                        product.filename = imageFile;
                  
                      
                       
                        product.save()
                          .then(productId =>{

                            res.redirect('/addX')
                          })
                        }
           
})


router.get('/cart', function(req, res, next) {
  var arrX = []
  
  Make.find({},function(err,mocs){
    arrX = mocs
    if (!req.session.cart) {
        return res.render('cart', {products: null,arrX:arrX});
    } 

     var cart = new Cart2(req.session.cart);
     res.render('cart', {products: cart.generateArray(), totalPrice: cart.totalPrice,arrX:arrX});
  })
 });


router.get('/cartX', function(req, res, next) {
  var arrX = []
  
  Make.find({},function(err,mocs){
    arrX = mocs
    if (!req.session.cart) {
        return res.render('cart3', {products: null,arrX:arrX});
    } 
     var cart = new Cart(req.session.cart);
     res.render('cart3', {products: cart.generateArray(), totalPrice2: cart.totalPrice2,arrX:arrX});
  })
 });







/*
router.get('/search/:productId',function(req,res){


    var productId = req.params.id;

    Product.findById(productId, function(err, product) {
    var filename = product.filename
    var name = product.name
    
    res.render('searc',{filename:filename,name:name,id:productId})



    })

    })
*/




router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});


router.get('/reduceX/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/cartX');
});

router.get('/removeX/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cartX');
});

router.get('/shopping-cart', function(req, res, next) {
   if (!req.session.cart) {
       return res.render('cart', {products: null});
   } 
    var cart = new Cart(req.session.cart);
    res.render('cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout',  function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    
    var stripe = require("stripe")(
        "sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    }); 
});





router.get('/addCategory',function(req,res){
  res.render('catg')
})


router.post('/addCategory',   function(req,res){

 name = req.body.name;
      req.check('name','Enter Name Of Category').notEmpty();

    
      
      var errors = req.validationErrors();
           
      if (errors) {
      
        req.session.errors = errors;
        req.session.success = false;
        res.render('catg',{ errors:req.session.errors})
      
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
                 message:req.session.message ,
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
          res.render('catg',{message:req.session.message});
      
    
      })
    
        .catch(err => console.log(err))
      
      
      })
    }
    
    
})









router.get('/catgSeq',function(req,res){
  var arr1=[]  
  Make.find({}, function(err,docs){
    arr1=docs;
  res.render('batch',{arr1:arr1,})

  })
  
  })
  
  router.post('/catgSeq', function(req,res){
       var pro = req.user
  var uid = req.user.uid;
var category = req.body.category
  var id = req.user._id;
 
  
    req.check('category','Enter Category').notEmpty();

   
    var errors = req.validationErrors();
    if (errors) {
   
      req.session.errors = errors;
      req.session.success = false;
      res.render('batch',{errors:req.session.errors})
   
    
   }
   else
  User.findOne({ 'uid':uid})
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
  

  router.get('/typeX',function(req,res){

     var pro = req.user.category
     console.log(pro,'pro')
      res.render('type',{pro:pro})
  
  
      
      })

      router.post('/typeX',   function(req,res){

          name = req.body.category;
          type = req.body.type;
               req.check('category','Enter Name Of Category').notEmpty();
               req.check('type','Enter Type of Product').notEmpty();
             
               
               var errors = req.validationErrors();
                    
               if (errors) {
               
                 req.session.errors = errors;
                 req.session.success = false;
                 res.render('type',{ errors:req.session.errors})
               
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
  






  
  router.get('/importMake',function(req,res){
    res.render('importmak')
  })
  

  
  router.post('/importMake', upload.single('file'),  (req,res)=>{
   
  
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
                res.render('importmak', {message:req.session.message
                     
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
  










  
  router.get('/importModel',function(req,res){
    res.render('importmod')
  })
  

  
  router.post('/importModel', upload.single('file'),  (req,res)=>{
   
  
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
                res.render('importmod', {message:req.session.message
                     
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
  














module.exports = router;



//pk_test_RBqRxgcTy9sSIwuiB62CEC5v00OTSiSYKr
//sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol