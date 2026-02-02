const router = require("express").Router();
const { MenuItem, MenuSection, Tag, MenuItemTag } = require("../../models");

// GET /api/items
router.get("/", async (req, res) => {
  //find all items
  // include sections and tags
});

// GET /api/items/:id
router.get("/:id", async (req, res) => {
  // find one item by it's id value
});

// POST /api/items
router.post("/", async (req, res) => {
  // create a new item
});

// PUT /api/items/:id
router.put("/:id", async (req, res) => {
  // Update an item by it's id
});

// DELETE /api/items/:id
router.delete("/:id", async (req, res) => {
  // delete an item by it's id
});

module.exports = router;
