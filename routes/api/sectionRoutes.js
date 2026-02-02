const router = require("express").Router();
const { MenuSection, MenuItem } = require("../../models");

// GET /api/sections
router.get("/", async (req, res) => {
  // Get's all sections
  //includes item data
});

// GET /api/sections/:id
router.get("/:id", async (req, res) => {
  // get's section by id value
  // includes item data
});

// POST /api/sections
router.post("/", async (req, res) => {
  // Creates a new section
});

// PUT /api/sections/:id
router.put("/:id", async (req, res) => {
  // Updates a section by it's id
});

// DELETE /api/sections/:id
router.delete("/:id", async (req, res) => {
  // Deletes section by it's id
});

module.exports = router;
