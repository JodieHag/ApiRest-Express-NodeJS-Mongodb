'use strict'

const User = require('../models/user');

function getUser (req, res) {
  let userId = req.params.userId;

  User.findById(userId, (err, user) => {
    if (err) rest.status(500).send({ message: `Error al realizar la petición: ${err}` });
    if (!user) return res.status(404).send({ message: `El usuarix no existe` });

    res.status(200).send({ user });
  });
}

function getUsers (req, res) {
  User.find({}, (err, user) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`});
    if (!user) return res.status(404).send({ message: `No existen usuarios.` });
  res.status(200).send({ user });
  });
}

function saveUser(req, res) {
  console.log('POST /api/user');
  console.log(req.body);

  let user = new User();
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.alias = req.body.alias;
  user.alias_name = req.body.alias_name;
  user.password = req.body.password;
  user.email = req.body.email;
  user.picture = req.body.picture;
  user.city = req.body.city;
  user.birth_date = req.body.birth_date;
  user.bio = req.body.bio;
  user.about = req.body.about;
  user.skills = req.body.skills;
  user.genero = req.body.genero;
  user.date = req.body.date;
  user.visibility = req.body.visibility;

  user.save((err, userStore) =>{
    if (err) res.status(500).send({message: `Error al guardar el user: ${err}.`});

    res.status(200).send({user: userStore});

  });
}

function updateUser (req, res) {
  let userId = req.params.userId;
  let update = req.body;

  User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
    if (err) res.status(500).send({message: `Error al actualizar el user: ${err}`});

    res.status(200).send({user: userUpdate });
  });
}

function deleteUser (req, res) {
  let userId = req.params.userId;

  User.findById(userId, (err, user) => {
    if (err) res.status(500).send({message: `Error al borrar el user: ${err}`});

    user.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el user: ${err}`});
      res.status(200).send({message: `El user ha sido borrado.`});
    })
  });
}

module.exports = {
  getUsers,
  getUser,
  saveUser,
  updateUser,
  deleteUser
};
