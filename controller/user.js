const usermodel = require("../model/user.js");

exports.createUser = async (req, res) => {
  try {
    const { name = null, number = null, password = null } = req.body;

    const response = await usermodel.create({ name, number, password });
    res.status(201).json({
      success: true,
      data: {
        name,
        number,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      error: "Validation error",
    });
  }
};
