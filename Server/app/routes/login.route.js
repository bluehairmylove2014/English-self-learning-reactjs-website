const express = require("express");
const router = express.Router();

const {
    getAll,
    getAccountByEmail,
    getLastAccountID,
    addNewAccount
} = require("../controllers/login.controller");

router.get("/getAll", getAll);
router.get("/getAccountByEmail", getAccountByEmail);
router.get("/getLastAccountID", getLastAccountID);
router.get("/addNewAccount", addNewAccount);

module.exports = router;