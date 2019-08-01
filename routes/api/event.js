const router = require("express").Router();
const newEventController = require("../../controllers/newEventController");

// Matches with "/api/newEvents"
router.route("/")
  .get(newEventController.findAll)
  .post(newEventController.create);

// Matches with "/api/newEvents/:id"
router
  .route("/:id")
  .get(newEventController.findById)
  .put(newEventController.update)
  .delete(newEventController.remove);

module.exports = router;
