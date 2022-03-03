const router = require("express").Router();
const {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/user/:id
router.route("/:id").get(getUsersById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
