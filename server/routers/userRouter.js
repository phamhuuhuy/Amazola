import expess from 'express'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler'
import { generateToken } from '../utils.js';


const userRouter = expess.Router();

const users = [
    {
        name: "Huu Huy",
        email: "admin@example.com",
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
    },
    {
        name: "Heo nho",
        email: "user@example.com",
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false
    }
]

userRouter.get('/seed',
    expressAsyncHandler(
        async (req, res) => {
            const createdUsers = await User.insertMany(users);
            res.send({ createdUsers });
        }))

userRouter.post('/signin',
    expressAsyncHandler(
        async (req, res) => {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    res.send({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        token: generateToken(user)
                    })
                    return
                }
            }
            res.status(401).send({ message: "Invalid email or password" })
        }))

export default userRouter