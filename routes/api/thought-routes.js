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
// api/thoughts/<thoughtId>/<userId>
router
  .route("/:thoughtId/users/:userId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);
// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
