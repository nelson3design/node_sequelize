

const express = require('express')


// importar o aquivo TasksController
const tasksController = require('./controllers/TasksController')



const router = express.Router()

// router.get('/',(req, res)=>{
//     res.send('salut le monde')
// })



// criar uma tarefa
router.post('/', tasksController.createTasks)


// lista todas as tarefas
router.get('/', tasksController.allTasks)

// lista uma tarefa
router.get('/:id', tasksController.Tasks)


// editar uma tarefa
router.put('/:id', tasksController.updateTasks)


// excluir uma tarefa
router.delete('/:id', tasksController.deleteTasks)



module.exports = router

