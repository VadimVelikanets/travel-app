const {Router} = require('express')
const User = require('../models/user')
const router = Router()
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require('path')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const {check, validationResult} = require('express-validator');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './client/public/uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.route('/register')
    .post(   upload.single('photo') ,

    async (req, res) =>{

        try{

            console.log(req.body)

            const errors = validationResult(req)
            // if(!errors.isEmpty()){
            //     return res.status(400).json({errors: errors.array(), message: "Incorrect register data"})
            // }
            const {email, password, userName} = req.body
            let photo =''
            if(req.file.filename !== ''){
                photo =req.file.filename;
            } else{
                photo =''
            }

            //Проверка на существование email в базе
            // const candidateEmail = await User.findOne({email: email})
            // if(candidateEmail){
            //     return res.status(400).json({message: "User is already exist"})
            // }
            // //Проверка на существование userName в базе
            // const candidate = await User.findOne({userName: userName})
            // if(candidate){
            //     return res.status(400).json({message: "User is already exist"})
            // }
            //Хешируем пароль
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, userName, password: hashedPassword, photo})
            await user.save()
            res.status(201).json({message: "User created"})
        } catch (e){
            res.status(500).json({message: "Something went wrong"})
        }
    })

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при входе в систему'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id, email: email, userName: user.userName, photo: user.photo })

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })

module.exports  = router