const express = require("express");
const router = express();
const {
  getAlluser,
  creatUser,
  updateUser,
} = require("../controllers/user.controller");

router.get("/", getAlluser);
router.post("/", creatUser);
router.put("/:id", updateUser);

module.exports = router;
