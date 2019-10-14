const router = require("express").Router();
const messageRoutes = require("./message");
const eventRoutes = require("./event");
const registerRoutes = require("./register")

router.use("/messages", messageRoutes);
router.use("/events", eventRoutes);
router.use("/register", registerRoutes)

module.exports = router;