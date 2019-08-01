const router = require("express").Router();
const messageRoutes = require("./message");
const eventRoutes = require("./event");

router.use("/messages", messageRoutes);
router.use("/events", eventRoutes);

module.exports = router;