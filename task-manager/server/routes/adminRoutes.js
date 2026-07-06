const express = require('express')
const protect = require('../middleware/authMiddleware')
const router = express.Router()
const {getAllUsers,blockUser,unblockUser,deleteUser,getAlltasks} = require("../controllers/adminController")






router.get('/users',protect,isAdmin,getAllUsers)
router.patch('/users/:id/block',protect,isAdmin,blockUser)
router.patch('/users/:id/unblock',protect,isAdmin,unblockUser)
router.delete('/users/:id',protect,isAdmin,deleteUser)
router.get('/tasks',protect,isAdmin,deleteUser)
router.delete('/tasks/:id',protect,deletetasks)


module.exports = router