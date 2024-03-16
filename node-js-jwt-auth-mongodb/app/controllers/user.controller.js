const db = require("../models");
const User = db.user;

  exports.allAccess = (req, res) => {
      res.status(200).send("Public Content.");
  };
  
  exports.userBoard = async (req, res) => {
    try {
      // DB call with req.userId to get the user details from the database
      const user = await User.findOne({ _id: req.userId }).populate("roles", "-__v").exec();
  
      // Check if the user exists
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }
  
      // If user exists, send user content along with status
      res.status(200).send({ data: user });
    } catch (error) {
      // Handle errors
      console.error("Error fetching user details:", error);
      res.status(500).send({ message: "Internal server error." });
    }
  };  
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };