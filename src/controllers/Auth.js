const {"User"} = require("../models");
const User = require("../models/User");

const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },
  saveRegister (req, res) {

    


  },
};

module.exports = authController;
