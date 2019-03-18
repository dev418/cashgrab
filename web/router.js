const {Router} = require("express"),
	  router = Router();

module.exports = router;

router.get("/", (req, res)=>{
	res.render("index.handlebars");
});