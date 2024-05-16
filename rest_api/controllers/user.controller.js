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
  res.status(201).json({ users });
};
//update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });

  res.status(200).json(users);
};

// delete
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  res.status(200).json(users);
};

module.exports = { getAlluser, creatUser, updateUser, deleteUser };
