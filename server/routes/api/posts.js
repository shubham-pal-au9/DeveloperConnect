const express = require('express');
const router = express.Router();

//@route    api/posts
//@desc     Test route
//@access   Public

router.get('/',(req,res) => (
    res.send("Posts API")
))

module.exports = router;


