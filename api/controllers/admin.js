const { User } = require("../models");

class AdminController {
  static getAll = (req, res, next) => {
    User.findAll(  )
      .then((users) => res.status(200).send(users))
      .catch(next);
      } ;

  static promoteAdmin = (req, res, next) => {
    User.update(req.body, {
      where: {
        id:req.params.id
      },
      returning: true,
    })
      .then((admin) => res.send(admin[1][0]))

      .catch(next);
  };

  static deleteUser = (req, res, next) => {
    User.destroy({ where: { id: req.params.id } })
      .then((user) => res.sendStatus(204))
      .catch(next)

  }
}
module.exports = AdminController;
