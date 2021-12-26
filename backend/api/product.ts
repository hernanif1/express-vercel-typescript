const exp = require("express");
const router = exp.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
});

module.exports = router;
