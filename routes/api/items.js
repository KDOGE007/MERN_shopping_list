const express = require('express')
const res = require('express/lib/response')
const { json } = require('express/lib/response')
const router = express.Router()

//Item Model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    //descending sort
    .sort({ date: -1 })
    .then((items) => res.json(items))
})

// @route   POST api/items
// @desc    Create a an item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  })

  newItem.save().then((item) => res.json(item))
})

// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }))
})

// @route PUT api/items/:id
// @desc Update An Item
// @access Public
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
    await item.save().then((item) => res.json(item))
  } catch (err) {
    res.status(404).json({ success: false })
  }
})

module.exports = router
