const router = require('express').Router();
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
const {
  models: { User, ShoppingSession },
} = require('../db');
module.exports = router;

// GET /api/users/
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.id, {
      include: ShoppingSession,
    });
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:id
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});
