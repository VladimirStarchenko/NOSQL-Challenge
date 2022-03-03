const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  newThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// api/thoughts/<userId>
router.route("/:userId").get(getAllThoughts).post(newThought);
// api/thoughts/<userId>/<thoughtId>
router
  .route("/:userId/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);
// /api/thoughts/:thoughtId/reactions
router.route(":thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
