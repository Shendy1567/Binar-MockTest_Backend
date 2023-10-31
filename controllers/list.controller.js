const { List, User } = require("../models");

module.exports = class ListController {
  async CreateList(req, res) {
    try {
      const { userId } = req.params;
      const { list, dueDate } = req.body;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({
          status: "Error",
          message: `User with id: ${id} is not found`,
        });
      }
      await List.create({
        userId,
        list,
        dueDate,
        completed: false,
      });
      return res.status(200).json({
        status: "Success",
        message: "List Successfully registered",
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }

  async ShowList(req, res) {
    try {
      const { userId } = req.params;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({
          status: "Error",
          message: `User with id: ${userId} is not found`,
        });
      }
      const data = await List.findAll({
        where: {
          userId,
        },
        order: [["dueDate", "ASC"]],
      });

      if (!data) {
        return res.status(404).json({
          status: "Error",
          message: "This user didn't have list yet",
        });
      }

      return res.status(200).json({
        status: "Success",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }

  async UpdateList(req, res) {
    try {
      const { id } = req.params;
      const { list, dueDate, completed } = req.body;
      const data = await List.findByPk(id);
      if (!data) {
        return res.status(404).json({
          status: "Error",
          message: `List not found`,
        });
      }
      const updateFields = {};
      if (list) {
        updateFields.list = list;
      }
      if (dueDate) {
        updateFields.dueDate = dueDate;
      }
      if (completed !== undefined) {
        updateFields.completed = completed;
      }
      console.log(updateFields);

      await List.update(updateFields, {
        where: { id },
      });
      return res.status(200).json({
        status: "Success",
        message: "List Successfully updated",
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }

  async DeleteList(req, res) {
    try {
      const { id } = req.params;
      const data = await List.findByPk(id);
      if (!data) {
        return res.status(404).json({
          status: "Error",
          message: "List not found",
        });
      }
      await List.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({
        status: "Success",
        message: "List Successfully Deleted",
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }
};
