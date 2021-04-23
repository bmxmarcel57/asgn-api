let router = require("express").Router();

router.get("/", function (req,res) {
    res.json({
        status: "API is Working.",
        message: "Welcome to the Assignment API"
    });
});

module.exports = router;

