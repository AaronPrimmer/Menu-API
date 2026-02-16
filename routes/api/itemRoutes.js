const router = require("express").Router();
const { MenuItem, MenuSection, Tag, MenuItemTag } = require("../../models");

// GET /api/items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.findAll({
      include: [MenuSection, Tag],
    });
    res.json(items);
  } catch (error) {
    res.status(500).json(error);
  }
  //find all items
  // include sections and tags
});

// GET /api/items/:id
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id && !isNaN(req.params.id)) {
      const item = await MenuItem.findOne({
        where: { id: req.params.id },
        include: [MenuSection, Tag],
      });
      res.json(item);
    }
  } catch (error) {
    res.status(500).json(error);
  }
  // find one item by it's id value
});

// POST /api/items
router.post("/", async (req, res) => {
  try {
    const tag_body = req.body.item_ids || [];
    if (
      req.body.item_name &&
      req.body.price &&
      req.body.section_id &&
      tag_body
    ) {
      const item = await MenuItem.create({
        item_name: req.body.item_name,
        price: req.body.price,
        section_id: req.body.section_id,
      });
      const tags = tag_body.map(async (tag_id) => {
        const itemTags = await MenuItemTag.create({
          item_id: item.id,
          tag_id: tag_id,
        });
      });

      res.json({ success: `${req.body.item_name} item created` });
    }
  } catch (error) {
    res.status(500).json(error);
  }
  // create a new item
});

// PUT /api/items/:id
router.put("/:id", async (req, res) => {
  // Update an item by it's id
});

// DELETE /api/items/:id
router.delete("/:id", async (req, res) => {
  try {
    const item = await MenuItem.destroy({
      where: { id: req.params.id },
    });
    res.json({ success: `Item with id ${req.params.id} deleted` });
  } catch (error) {
    res.status(500).json(error);
  }
  // delete an item by it's id
});

module.exports = router;
