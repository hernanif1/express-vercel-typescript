const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has success",
    });
  } catch (error) {
    console.error(error);
    return res.statys(500), send("Server error");
  }
});

module.exports = router;
