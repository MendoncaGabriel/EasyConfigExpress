const express = require('express');
const router = express.Router();
const routerController = require('../../controllers/router');

router.get('/', routerController.home);

module.exports = router;
