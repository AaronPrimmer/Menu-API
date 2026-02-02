const router = require("express").Router();
const { Tag, MenuItem } = require("../../models");

// GET /api/tags
router.get("/", async (req, res) => {
  const userTags = await Tag.findAll().catch((error) => {
    res.json(error);
  });

  res.json(userTags);
  // find all tags
  // include the item data
});

// GET /api/tags/:id
router.get("/:id", async (req, res) => {
  // find single tag by id
});

// POST /api/tags
router.post("/", async (req, res) => {
  // Creates a new tag
});

// UPDATE /api/tags/:id
router.put("/:id", async (req, res) => {
  // Updates tag by id
});

// DELETE /api/tags/:id
router.delete("/:id", async (req, res) => {
  // Deletes tag by id
});

module.exports = router;
