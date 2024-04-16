var express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', (req, res) => {
    controller.postPlayers(req,res);
});

router.get('/', (req,res) => {
    controller.getAllPlayers(req,res);
});

module.exports = router;