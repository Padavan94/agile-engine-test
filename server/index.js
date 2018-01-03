var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    assert = require('assert'),
    mongoose = require('mongoose');

//database connection
var uristring = process.env.MONGODB_URI || 'mongodb://localhost:27017/agileEngine';
mongoose.connect(uristring);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//used middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var port = process.env.PORT || 9000;

//routes
var router = express.Router();


var productSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    name: String,
    colors: Array
});


var Product = mongoose.model('products', productSchema);

router.get('/', function(req, res) {
    Product.find({}, function (err, products) {
      if (err) return handleError(err);
      res.json(products)
    })

});

router.post('/save', function(req, res) {
    console.log(req.body)
    let prod = new Product(req.body)
    let promise = prod.save();
    promise.then(function (doc) {
        res.json({status: 'success'})
    })
});

router.post('/delete', function(req, res) {
    let promise = Product.find({_id: req.body.id}).remove().exec();

    promise.then(function (doc) {
        res.json({status: 'success'})
    })
});

app.use('/api', router);

app.listen(port);