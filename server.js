var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");
    //mongoose       = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.route('/')
	.get( (req, res)=> {
		res.send('aca va a retornar la informacion general');
	})
	/*.post()*/;

router.route('/newuser')
	.get( (req, res)=> {
		res.send('aca va a darse de alta un usuario nuevo');
	});

router.route('/newpost')
	.post( (req, res)=> {
		let obj = {
			name : 'jijo',
		};

		console.log(req.body);
		res.end(JSON.stringify(obj));
		/*var response = {
		    status  : 200,
		    success : 'Updated Successfully'
		}

		res.end(JSON.stringify(response));*/
	});

app.use(router);

app.listen(3000, ()=> {
  console.log("Node server running on http://localhost:3000");
});