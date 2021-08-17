import expess from 'express'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler'
import { generateToken, isAuth } from '../utils.js';


const userRouter = expess.Router();

const users = [
    {
        name: "Huu Huy",
        email: "admin@example.com",
        password: bcrypt.hashSync('1234', 8),
        gender: true,
        isAdmin: true
    },
    {
        name: "Heo nho",
        email: "user@example.com",
        password: bcrypt.hashSync('1234', 8),
        gender: false,
        isAdmin: false
    }
]

userRouter.get('/seed',
    expressAsyncHandler(
        async (req, res) => {
            await User.remove({})
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
                        gender: user.gender,
                        isAdmin: user.isAdmin,
                        token: generateToken(user)
                    })
                    return
                }
            }
            res.status(401).send({ message: "Invalid email or password" })
        }))

userRouter.post('/register',
    expressAsyncHandler(
        async (req, res) => {
            const user = new User({ name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8), gender: req.body.gender });
            const createdUser = await user.save()

            res.send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                gender: createdUser.gender,
                isAdmin: createdUser.isAdmin,
                token: generateToken(createdUser)
            })

        }))

userRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        res.send(user)
    } else {
        res.status(404).send({ message: 'User Not Found' })
    }
}))

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.gender = req.body.gender || user.gender
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8)
        }
        const updatedUser = await user.save()
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            gender: updatedUser.gender,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser)
        })
    }
}))
export default userRouter