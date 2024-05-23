import { Router } from "express";
import { tasks } from "../utils/constants.mjs";
import { resolveIndexByTaskId } from "../utils/middlewares.mjs";

const router = Router();

router.get('/tasks', (req, res) => {
    return res.status(200).send(tasks);
})

router.post('/tasks', (req, res) => {
    const { body } = req;
    const newTask = { id: tasks[tasks.length - 1].id + 1, ...body }
    tasks.push(newTask)
    return res.status(201).send(newTask)
})

// mapping put korzysta z zewnętrznego middleware

router.put('/tasks/:id', resolveIndexByTaskId, (req, res) => {
    const { findTaskIndex, body } = req;
    tasks[findTaskIndex] = { id: tasks[findTaskIndex].id, ...body };
    return res.status(201).send(tasks[findTaskIndex]);
})

router.delete('/tasks/:id', resolveIndexByTaskId, (req, res) => { 
    const { findTaskIndex } = req;
    tasks.splice(findTaskIndex, 1);
    return res.status(200).send({ msg: "Task successfully deleted" })
})

export default router;