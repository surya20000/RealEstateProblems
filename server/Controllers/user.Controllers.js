import Problems from "../Models/user.model.js";

export const postProblems = async (req, res) => {
  try {
    console.log(req.body);
    const createdProblem = await Problems.create(req.body);
    console.log("Created a dateabase entry", createdProblem);
    return res
      .status(201)
      .json({ message: "Problem Submitted Successfully!!", createdProblem });
  } catch (error) {
    res.status(500).send(error.message)
  }
};

export const getProblems = async (req, res) => {
  try {
    const email = req.body.email;
    if (email === process.env.validEmail) {
      const allProblems = await Problems.find({});
      return res.status(200).json({ allProblems });
    }
    else{
      res.status(500).send("Invalid Email Please try again")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
};
