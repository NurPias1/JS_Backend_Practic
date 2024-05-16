const express = require("express");
const router = express();
const {
  getAlluser,
  creatUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getAlluser);
router.post("/", creatUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
