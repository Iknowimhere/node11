import User from "../models/user.model.js";

let register = async (req, res, next) => {
  let { name, email, password } = req.body;
  try {
  let newUser = await User.create({
    name,
    email,
    password,
    image: req.file?.path,
  });

  res.json(newUser);
  } catch (error) {
    next(error)
  }
};
export { register };
