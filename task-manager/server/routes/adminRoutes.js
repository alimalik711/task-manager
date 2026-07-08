const express = require('express')
const {protect}= require('../middleware/authMiddleware')
const {isAdmin}= require('../middleware/isAdmin')
const router = express.Router()
const {getAllUsers,blockUser,unblockUser,deleteUser,getAlltasks,deleteTask} = require("../controllers/adminController")






router.get('/users',protect,isAdmin,getAllUsers)
router.patch('/users/:id/block',protect,isAdmin,blockUser)
router.patch('/users/:id/unblock',protect,isAdmin,unblockUser)
router.delete('/users/:id',protect,isAdmin,deleteUser)
router.get('/tasks',protect,isAdmin,getAlltasks)
router.delete('/tasks/:id',protect,deleteTask)


module.exports = router