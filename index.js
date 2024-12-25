import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

var preview = '';
var title = '';
var content = '';
var author = '';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
    if(!title && !preview){
        res.render("index.ejs",{
            page: "home",
            title: '',
            preview: '',
            author: '',
        });
    } else{
        res.render("index.ejs",{
            page: "home",
            title: title,
            preview: preview,
            author: author,
        });
    }
});

app.get("/about", (req,res) => {
    res.render("about.ejs",{
        page: "about",
    });
});

app.get("/contact", (req,res) => {
    res.render("contact.ejs", {
        page: "contact",
    });
});

app.get("/write", (req,res) => {
    res.render("write.ejs", {
        page: "write",
    });
});

app.get("/post1", (req,res) => {
    res.render("post1.ejs",{
        page: '',
        title: title,
        preview: preview,
        content: content,
        author: author,
    });
});

app.post("/create", (req,res) => {
    content = req.body["content"];
    title = req.body["title"];
    preview = req.body["preview"];
    author = req.body["author"];
    res.render("index.ejs", {
        page: "home",
        title: title,
        preview: preview,
        author: author,
    })
});

app.listen(port,() => {
    console.log(`Server started at port ${port}`);
});