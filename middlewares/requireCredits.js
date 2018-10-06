module.exports = (req, res, next) => {
    if (req.user.credits<1) {
      return res.status(402).res.send({ error: "You have No Credit !!!" });
    }
    next()
  };
  