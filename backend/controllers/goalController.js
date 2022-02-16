const asyncHandler = require("express-async-handler");
// get goals GET
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "all goals" });
});

// create goal POST
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Set goal" });
});

// update goal PUT
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update goal" });
});

//delete goal DELETE
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete goal" });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
