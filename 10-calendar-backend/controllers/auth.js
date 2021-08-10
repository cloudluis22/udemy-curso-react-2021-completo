const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User-model');
const { generateJWT } = require('../helpers/jwt');

const userCreate = async (request, response = response) => {
  const { email, password } = request.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return response.status(400).json({
        ok: false,
        msg: 'E-mail already registered with another user.',
      });
    }

    user = new User(request.body);

    // Encriptar password.
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Generar JWT.
    const token = await generateJWT(user.id, user.name);

    response.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      ok: false,
      msg: 'Unexpected error, please contact the admin.',
    });
  }
};

const userLogin = async (request, response = response) => {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(400).json({
        ok: false,
        msg: 'User not found with given e-mail.',
      });
    }

    // Verificar la contraseña.
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return response.status(400).json({
        ok: false,
        msg: 'Incorrect password',
      });
    }

    const token = await generateJWT(user.id, user.name);

    response.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      ok: false,
      msg: 'Unexpected error, please contact the admin.',
    });
  }
};

const tokenRevalidate = async (request, response = response) => {
  const { uid, name } = request;

  // Generar un nuevo JWT.
  const token = await generateJWT(uid, name);

  response.json({
    ok: true,
    token,
    uid,
    name,
  });
};

module.exports = {
  userCreate,
  userLogin,
  tokenRevalidate,
};
