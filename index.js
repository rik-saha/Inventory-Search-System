var con= require("./connection");
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

// app.get('/', (req, res) => {
//     res.render(__dirname+"front")
//   });

// app.post('/',function(req,res){
//     var Plant_Code= req.body.Plant_Code;
//     var Plant_Name= req.body.Plant_Name;

//     con.connect(function(error){
//         if(error) throw error;

//         var sql = "select * from location where Plant_Name=? OR Plant_Code=?";
//         con.query(sql,[Plant_Code,Plant_Name],function(error,result){
//             if(error) throw error;
//             res.redirect('/location');
//         })
//     })


// });

// app.get('/location',function(req,res) {
//     con.connect(function(error){
//         if (error) console.log(error);
//         var sql= "select * from location";
//         con.query(sql,function(error,result){
//             if(error) throw error;
//             //console.log(result);
//             res.render(__dirname+"/location",{location:result});
//         });
//     });
// });

app.get('/search-item',function(req,res) {
    con.connect(function(error){
        if (error) console.log(error);

        var sql= "SELECT * FROM item_master INNER JOIN material2 ON item_master.SAP_Material_Num = material2.Material INNER JOIN location ON material2.Valuation_Area = location.Plant_Code where item_master.uom_code='45'";

        con.query(sql,function(error,result){
            if(error) throw error;
            //console.log(result);
            res.render(__dirname+"/search-item",{item_master:result});

        });
    });
});


app.get('/search',function(req,res){

    var ITEM_8DIGIT = req.query.ITEM_8DIGIT;
    var ITEM_11DIGIT = req.query.ITEM_11DIGIT;
    var SAP_Material_Num = req.query.SAP_Material_Num;
    var Plant_Code = req.query.Plant_Code;

    con.connect(function(error){
        if(error) throw error;

        var sql= " select * from item_master INNER JOIN material2 ON item_master.SAP_Material_Num = material2.Material INNER JOIN location ON material2.Valuation_Area = location.Plant_Code where ITEM_8DIGIT LIKE '%"+ITEM_8DIGIT +"%' AND ITEM_11DIGIT LIKE '%"+ITEM_11DIGIT+"%' AND SAP_Material_Num LIKE '%"+SAP_Material_Num+"%' AND Plant_Code LIKE '%"+Plant_Code+"%'  ";

        con.query(sql,function(error,result){
            if(error)throw error;
            res.render(__dirname+"/search-item",{item_master:result});

        });
    });

});


app.get('/search-material',function(req,res) {
    con.connect(function(error){
        if (error) console.log(error);

        var sql= "SELECT * FROM material2";

        con.query(sql,function(error,result){
            if(error) throw error;
            //console.log(result);
            res.render(__dirname+"/search-material",{material2:result});

        });
    });
});



app.get('/search1',function(req,res){

    // var ITEM_8DIGIT = req.query.ITEM_8DIGIT;
    // var ITEM_11DIGIT = req.query.ITEM_11DIGIT;
    // var SAP_Material_Num = req.query.SAP_Material_Num;
    // var Plant_Code = req.query.Plant_Code;


    var Material = req.query.Material;
    var Valuation_Area = req.query.Valuation_Area;

    con.connect(function(error){
        if(error) throw error;

        // var sql= " select * from item_master INNER JOIN material2 ON item_master.SAP_Material_Num = material2.Material INNER JOIN location ON material2.Valuation_Area = location.Plant_Code where ITEM_8DIGIT LIKE '%"+ITEM_8DIGIT +"%' AND ITEM_11DIGIT LIKE '%"+ITEM_11DIGIT+"%' AND SAP_Material_Num LIKE '%"+SAP_Material_Num+"%' AND Plant_Code LIKE '%"+Plant_Code+"%'  ";


        var sql= "select * from material2 where Material LIKE '%"+Material+"%' AND Valuation_Area Like '%"+Valuation_Area+"%' ";
        con.query(sql,function(error,result){
            if(error)throw error;
            res.render(__dirname+"/search-material",{material2:result});

        });
    });

});



app.get('/search4',function(req,res){

    var ITEM_8DIGIT = req.query.ITEM_8DIGIT;
    var ITEM_11DIGIT = req.query.ITEM_11DIGIT;
    var SAP_Material_Num = req.query.SAP_Material_Num;
    var Plant_Code = req.query.Plant_Code;


    // var Material = req.query.Material;
    // var Valuation_Area = req.query.Valuation_Area;

    con.connect(function(error){
        if(error) throw error;

         var sql= " select * from item_master INNER JOIN material2 ON item_master.SAP_Material_Num = material2.Material INNER JOIN location ON material2.Valuation_Area = location.Plant_Code where ITEM_8DIGIT LIKE '%"+ITEM_8DIGIT +"%' AND ITEM_11DIGIT LIKE '%"+ITEM_11DIGIT+"%' AND SAP_Material_Num LIKE '%"+SAP_Material_Num+"%' AND Plant_Code LIKE '%"+Plant_Code+"%'  ";


        // var sql= "select * from material2 where Material LIKE '%"+Material+"%' AND Valuation_Area Like '%"+Valuation_Area+"%' ";
        con.query(sql,function(error,result){
            if(error)throw error;
            res.render(__dirname+"/search-material",{item_master:result});

        });
    });

});

app.listen(7000);