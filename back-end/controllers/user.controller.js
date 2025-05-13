import User from "../models/user.model.js";

export const getUser = async (req, res ) =>{
  const {username }= req.params;
  const user  = await User.findOne({username})
  const {hashedPasswored , ...detailsWithoutPassowrd} = user.toObject() ;
  res.status(200).json(detailsWithoutPassowrd)
}
// user controler
const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  },
};
export default userController;

