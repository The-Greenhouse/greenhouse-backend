const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();


router.route('/register')
    .post(
        AuthController.Register
    );

router.route('/login')
    .post(
        AuthController.Login
    );

// router.route('/getforgotpassword')
//     .get(
//         AuthController.getForgotEjs
//     );

// router.route('/forgotpassword')
//     .post(
//         AuthController.forgotPassword
//     );


// router.route('/verifyToken')
//     .post(
//         AuthController.verifyToken
//     );

// router.route('/resetPassword')
//     .post(
//         AuthController.resetPassword
//     );

// router.route('/changePassword')
//     .post(
//         authenticate,
//         AuthController.changePassword
//     );

// router.route('/logout')
//     .post(
//         authenticate,
//         AuthController.logoutUser
//     );

// router.route('/updateProfile')
//     .post(
//         authenticate,
//         uploadController.uploadFile,
//         AuthController.updateProfile
//     );

// router.route('/getUserProfile')
//     .get(
//         authenticate,
//         AuthController.getUserProfile
//     );



module.exports = router;
