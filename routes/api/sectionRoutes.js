const router = require("express").Router();
const { MenuSection, MenuItem } = require("../../models");

// GET /api/sections
router.get("/", async (req, res) => {
  try {
    const sections = await MenuSection.findAll({ include: MenuItem });
    res.json(sections);
  } catch (error) {
    res.status(500).json(error);
  }
  // Get's all sections
  //includes item data
});

// GET /api/sections/:id
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id && !isNaN(req.params.id)) {
      const section = await MenuSection.findOne({
        where: { id: req.params.id },
        include: MenuItem,
      });
      res.json(section);
    } else {
      res.status(400).json({
        error: "Error fetching section information",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
  // get's section by id value
  // includes item data
});

// POST /api/sections
router.post("/", async (req, res) => {
  try {
    if (req.body.section_name) {
      const section = await MenuSection.create({
        section_name: req.body.section_name,
      }).then(() => {
        res.json({ success: `${req.body.section_name} section created` });
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
  // Creates a new section
});

// PUT /api/sections/:id
router.put("/:id", async (req, res) => {
  try {
    if (req.params.id && !isNaN(req.params.id) && req.body.section_name) {
      const section = await MenuSection.update(
        { section_name: req.body.section_name },
        { where: { id: req.params.id } },
      ).then(() => {
        res.json({ success: `Section updated to ${req.body.section_name}` });
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
  // Updates a section by it's id
});

// DELETE /api/sections/:id
router.delete("/:id", async (req, res) => {
  try {
    if (req.params.id && !isNaN(req.params.id)) {
      const section = await MenuSection.destroy({
        where: { id: req.params.id },
      }).then(() => {
        res.json({ success: `Section with id ${req.params.id} deleted` });
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
  // Deletes section by it's id
});

module.exports = router;
