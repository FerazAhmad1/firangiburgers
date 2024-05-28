const usermodel = require("../model/user.js");

exports.createUser = async (req, res) => {
  try {
    let { name = null, number = null, password = null } = req.body;
    number = number * 1;
    const response = await usermodel.create({ name, number, password });
    res.status(201).json({
      success: true,
      data: {
        name,
        number,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: `Validation error ${error.message} `,
    });
  }
};
