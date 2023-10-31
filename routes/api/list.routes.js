const ListControllers = require("../../controllers/list.controller");
const ListControl = new ListControllers();
const ListRouter = require("express").Router();

ListRouter.get("/:userId", ListControl.ShowList);
ListRouter.post("/:userId", ListControl.CreateList);
ListRouter.delete("/:id", ListControl.DeleteList);
ListRouter.patch("/:id", ListControl.UpdateList);

module.exports = ListRouter;
