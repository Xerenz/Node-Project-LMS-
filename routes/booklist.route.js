const express = require('express');
const router = express.Router();

const book_controller = require("../controller/booklist.controller");

router.get('/', book_controller.view_book);

module.exports = router;