const CustomAPIError = require("../errors/custom-error");
const Job = require("../model/Job");

const createJob = async (req, res) => {
  try {
    await Job.create(req.body);
  } catch (error) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  res.json(req.body);
};

module.exports = createJob;
