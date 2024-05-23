import { tasks } from "./constants.mjs";

export const resolveIndexByTaskId = (req, res, next) => {
    const { params: { id } } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send({ msg: "Invalid id" });
    const findTaskIndex = tasks.findIndex((task) => task.id === parsedId);
    if (findTaskIndex === -1) return res.status(404).send({ msg: "Task not found"});
    req.findTaskIndex = findTaskIndex;
    next(); // to po prostu zewnętrzna metoda którą można kopiować wiele razy
}