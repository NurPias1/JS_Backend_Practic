let users = require("../models/users.mode");
const { v4: uuidv4 } = require("uuid");

const getAlluser = (req, res) => {
  res.status(200).json({ users });
};
//creat user
const creatUser = (req, res) => {
  const newuser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newuser);
  res.status(200).json({ users });
};
//update user
const updateUser = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ massage: id });
};
module.exports = { getAlluser, creatUser, updateUser };
