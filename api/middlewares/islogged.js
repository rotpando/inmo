const isLogin = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.sendStatus(401);
  };
  
  const isAdmin = (req, res, next) => {
    if (req.user) {//SE FIJA SI ESTA LOGEADO
      
      req.user.isAdmin ? next() : res.status(401).send("El user no es admin");//COMPRUEBA SI ES ADMIN
    } else {
      res.status(401).send("Logueate");
    }
  };
  
  module.exports = { isLogin, isAdmin };
  