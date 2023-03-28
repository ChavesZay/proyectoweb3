const { Router } = require('express');
const router = Router();

const {
    usersGET,
    usersCreate,
    usersUpdate,
    usersUpdatePost,
    usersDELETE,
    usersCreatePost
} = require('../controllers/users.js');


router.get('/',usersGET);
router.get('/',usersCreate);
router.get('/',usersUpdate);

//Validaciones
router.post('/',usersCreatePost);


//Validaciones -solo admin
router.put('/:id',usersUpdatePost);
router.delete('/:id',usersDELETE);

module.exports = router;