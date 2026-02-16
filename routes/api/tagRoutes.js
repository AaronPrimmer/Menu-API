const router = require("express").Router();
const { Tag, MenuItem } = require("../../models");

// GET /api/tags
router.get("/", async (req, res) => {
  const userTags = await Tag.findAll({ include: MenuItem }).catch((error) => {
    res.json(error);
  });

  res.json(userTags);
  // find all tags
  // include the item data
});

// GET /api/tags/:id
router.get("/:id", async (req, res) => {
  if (req.params.id && !isNaN(req.params.id)) {
    const userTag = await Tag.findOne({
      where: { id: req.params.id },
      include: MenuItem,
    }).catch((error) => {
      res.json(error);
    });
    res.json(userTag);
  } else {
    res.json({
      error: "Error fetching tag information",
    });
  }
});

// POST /api/tags
router.post("/", async (req, res) => {
  // Creates a new tag
  try {
    if (req.body.tag_name) {
      const tag = await Tag.create({
        tag_name: req.body.tag_name,
      }).then(() => {
        res.json({ success: `${req.body.tag_name} tag created` });
      });
    } else {
      res.status(204);
    }
  } catch (error) {
    res.json(error);
  }
});

// UPDATE /api/tags/:id
router.put("/:id", async (req, res) => {
  try {
    if (req.params.id && !isNaN(req.params.id) && req.body.tag_name) {
      const tag = await Tag.update(
        { tag_name: req.body.tag_name },
        { where: { id: req.params.id } },
      ).then(() => {
        res.json({ success: `Tag updated to ${req.body.tag_name}` });
      });
    }
  } catch (error) {
    res.json(error);
  }
  // Updates tag by id
});

// DELETE /api/tags/:id
router.delete("/:id", async (req, res) => {
  try {
    if (req.params.id && !isNaN(req.params.id)) {
      const tag = await Tag.destroy({
        where: { id: req.params.id },
      }).then(() => {
        res.json({ success: `Tag with id ${req.params.id} deleted` });
      });
    }
  } catch (error) {}
  // Deletes tag by id
});

module.exports = router;
