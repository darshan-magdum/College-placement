const router = require("express").Router();
const MoreInfo = require('../models/MoreInfoModel');


router.post('/', async (req, res) => {
  try {
    const moreInfo = await MoreInfo.create(req.body);
    res.json(moreInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const moreInfo = await MoreInfo.findById(req.params.id);
    if (!moreInfo) {
      return res.status(404).json({ message: 'Additional information not found' });
    }
    res.json(moreInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updatedInfo = await MoreInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedInfo) {
      return res.status(404).json({ message: 'Additional information not found' });
    }
    res.json(updatedInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Route to get all additional information
router.get('/', async (req, res) => {
  try {
    const allMoreInfo = await MoreInfo.find();
    res.json(allMoreInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
