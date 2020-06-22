const router = require("express").Router();
const todo = require("../models/todo");

router.get("/", async (req, res) => {
  const allTodo = await todo.find().sort({ _id: "-1" });
  res.send(allTodo);
});

router.post("/new-todo", async (req, res) => {
  const newTodo = new todo({
    title: req.body.title,
  });

  try {
    const saveTodo = await newTodo.save();
    res.status(200).send(saveTodo);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
});

//deleting-specific-route
router.delete("/remove/:id", async (req, res) => {
  await todo.findOneAndDelete({ _id: req.params.id });
  try {
    res.status(200).send("Successfully deleted");
  } catch (err) {
    if (err) {
      res.send(err);
    }
  }
});

//deleting-all-todos
router.delete("/remove-all", async (req, res) => {
  await todo.deleteMany();
  try {
    res.status(200).send("All Todos deleted");
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
});

//updating todo
router.put("/update/:id", async (req, res) => {
  const editTodo = await todo.findOne({ _id: req.params.id });
  if (editTodo) {
    editTodo.title = req.body.title;
    editTodo.check = req.body.check;
  }
  try {
    const updateTodo = await editTodo.save();
    res.status(200).send(updateTodo);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
});

module.exports = router;
