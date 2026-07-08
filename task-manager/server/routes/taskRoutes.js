const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {createTask,getTasks,getoneTask,updateTask,deleteTask} = require('../controllers/taskController')



router.post('/', protect,createTask)
router.get('/',protect,getTasks)
router.get('/:id',protect,getoneTask)
router.patch('/:id',protect,updateTask)
router.delete('/:id',protect,deleteTask)



module.exports = router