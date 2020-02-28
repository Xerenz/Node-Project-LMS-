const express = require('express');
const router = express.Router();

const user_controller = require("../controller/userlist.controller");

router.get('/', user_controller.view_usersbook);

module.exports = router;