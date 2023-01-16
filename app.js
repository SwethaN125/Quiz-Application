const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
});

app.post("/",function(req,res){
  let s = 0;
  if(req.body.q1 === "1")
    ++s;
  if(req.body.q2 === "1")
      ++s;
  if(req.body.q3 === "1")
      ++s;
  if(req.body.q4 === "1")
      ++s;
  if(req.body.q5 === "1")
      ++s;

  let f="";
  if(s>=4)
    f="Excellent!";
  else if(s>=2)
    f="Good!";
  else
    f="Better luck next time!";

  res.render("submit",{name:req.body.name,score:s,feedback:f});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
