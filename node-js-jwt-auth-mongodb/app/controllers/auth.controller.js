const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });

    await user.save();

    if (req.body.roles) {
      const roles = await Role.find({ name: { $in: req.body.roles } });

      user.roles = roles.map(role => role._id);
      await user.save();
    } else {
      const role = await Role.findOne({ name: "user" });
      user.roles = [role._id];
      await user.save();
    }

    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).send({ message: err.message || "An error occurred while registering the user." });
  }
};


exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate("roles", "-__v").exec();

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({ id: user._id }, config.secret, {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400 // 24 hours
    });

    const authorities = user.roles.map(role => "ROLE_" + role.name.toUpperCase());

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token
    });
  } catch (err) {
    console.error("Error in signin:", err);
    res.status(500).send({ message: err.message || "An error occurred while signing in." });
  }
};
