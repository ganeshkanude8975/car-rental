var express = require ("express");

var router = express.Router();

var exe = require("./connection");
const { route } = require("./userroutes");

router.get("/",function(req,res){
    res.render("admin/home.ejs")
})
router.get("/company_info",function(req,res){
    res.render("admin/company_info.ejs")
})
router.get("/Blog",function(req,res){
    res.render("admin/blog.ejs");
})

router.post("/insert_company_info",function(req,res){
    res.send(req.body);
})
module.exports = router;