const express = require('express');
const router = express.Router();
const passport = require('passport');
const {validate} = require('../controllers/admin_validator');
const {UserController} = require('../controllers/index.controller');
router.post(
    '/add/teacher',
    passport.authenticate('jwt', {session: false}),
    validate.validateSignUpTecher(),
    UserController.admin_add_teacher
);
router.post(
    '/add/student',
    passport.authenticate('jwt', {session: false}),
    validate.validateSignUpStudent(),
    UserController.admin_add_student
);
router.get(
    '/detail/:user&:id',
    passport.authenticate('jwt', {session: false}),
    (req, res, next) => {
        const {user, id} = req.params;
        user == 'teacher'
            ? UserController.admin_get_teacher_detail(res, next, id)
            : UserController.admin_get_student_detail(res, next, id)
    },
);
router.get(
    '/list/teacher',
    passport.authenticate('jwt', {session: false}),
    UserController.admin_get_teacher_list
);
router.get(
    '/list/student',
    passport.authenticate('jwt', {session: false}),
    UserController.admin_get_student_list
);
router.post(
    '/update',
    passport.authenticate('jwt', {session: false}),
    UserController.admin_update_user
);
router.get(
    '/update/detail',
    passport.authenticate('jwt', {session: false}),
    UserController.admin_get_edit_profile_user,
);
module.exports = router;