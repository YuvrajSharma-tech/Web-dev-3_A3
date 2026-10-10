const validateStock = (req, res, next) => {
  const { change } = req.body;

  if (typeof change !== 'number' || !Number.isInteger(change) || change === 0) {
    return res
      .status(400)
      .json({ message: 'change must be a non-zero whole number' });
  }
  next();
};

module.exports = validateStock;
