const isLogin = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.sendStatus(401);
  };
  
  const isAdmin = (req, res, next) => {
    if (req.user) {
      
      req.user.isAdmin ? next() : res.status(401).send("No es admin");
    } else {
      res.status(401).send("Logueate");
    }
  };
  
  module.exports = { isLogin, isAdmin };
  