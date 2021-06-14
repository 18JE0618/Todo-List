const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');
var items = ["buy food", "cook food", "eat food"];
app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        day: "numeric",
        weekday: "long",
        month: "long"
    }
    var day = today.toLocaleDateString("en-us", options);
    res.render("list", { kindofday: day, newItems: items });
}
);
app.post("/", function (req, res) {
    var newToDo = req.body.newItem;

    items.push(newToDo);
    //console.log(items);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("server started on port 3000");
});