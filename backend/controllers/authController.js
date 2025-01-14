import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const user = await User.findOne({username})
  } catch (error) {
    console.log("Error in Signup Controller:", {
      message: error.message,
      code: error.code,
      keyPattern: error.keyPattern,
      keyValue: error.keyValue,
    });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  console.log("login");
};

export const logout = async (req, res) => {
  console.log("logout");
};
