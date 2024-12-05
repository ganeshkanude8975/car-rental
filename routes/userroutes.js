var express = require ("express");

var router = express.Router();
var exe = require("./connection")

router.get("/",function(req,res){
    res.render("user/home.ejs")
})

router.get("/about",function(req,res){
    res.render("user/about.ejs")
})
router.get("/services",function(req,res){
    res.render("user/services.ejs")
})
router.get("/blog",function(req,res){
    res.render("user/blog.ejs")
})
router.get("/contact",function(req,res){
    res.render("user/contact.ejs")
})
router.get("/carbook",function(req,res){
    res.render("user/carbook.ejs");
})

router.get("/carbookform",function(req,res){
    res.render("user/carbookform.ejs")
})

router.post("/save_book_car",async function(req,res){
    var d = req.body;
    var sql=`insert into carbook(user_name,user_mobile,user_pick_up_date,user_drop_out_date,user_pick_up_time ,user_drop_out_time ,user_total_people_in_car ,user_adhar_no ,user_travel_peoples,carbookname)values('${d.user_name}','${d.user_mobile}','${d.user_pick_up_date}','${d.user_drop_out_date}','${d.user_pick_up_time}' ,'${d.user_drop_out_time}' ,'${d.user_total_people_in_car}' ,'${d.user_adhar_no}' ,'${d.user_travel_peoples}','${d.carbookname}')`;
    var data = await exe(sql);
    res.redirect("/services");
})

module.exports = router;