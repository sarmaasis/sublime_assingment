const express = require('express');
const router = express.Router();
const customerController = require('../apis/Controllers/customerController');



router.put('/search', customerController.search);
router.post('/create', customerController.create);
router.get('/getCustomer/:customerId', customerController.getById);
router.get('/uniqueCities', customerController.uniqueCities);

module.exports = router;