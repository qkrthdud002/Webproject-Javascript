const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Home wit router');
});

module.exports=router;