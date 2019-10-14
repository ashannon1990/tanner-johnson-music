const router = require("express").Router();
const adminController = require("../../controllers/adminController");

// Matches with "/api/user"
router.route("/")
  // .get(adminController.findAll)
  .post(adminController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  // .get(adminController.findById)
  // .put(adminController.update)
  // .delete(adminController.remove);

module.exports = router;
