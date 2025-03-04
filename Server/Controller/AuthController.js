import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname, email } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    username,
    password: hashedPass,
    firstname,
    lastname,
    email,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// login User

export const loginUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await UserModel.findOne({username: username})


        if(user)
        {
            const validity = await bcrypt.compare(password, user.password)


            validity? res.status(200).json(user): res.status(401).json("Your username or password is not correct!")
        }
        else{
            res.status(404).json("Account Not Found!")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}