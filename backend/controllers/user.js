const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.findOne({ email });
    if (newUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const user = await User.create({
      email,
      name,
      password,
      avatar: {
        public_id: "Sampleid",
        url: "https://",
      },
    });
    const token = await user.generateToken();
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("JWtoken", token, options).json({
      success: true,
      message: "Congrats! User registered Sucessfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = await user.generateToken();
    console.log(token);
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
