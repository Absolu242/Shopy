const {User} = require ('../models/User');

let auth = (req, res, next) => {
  //cheking if the token is valid

  let token = req.cookies.w_auth;

  User.findByToken (token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json ({
        isAuth: false,
        error: true,
      });

    req.token = token;
    req.user = user;
    next ();
  });
};

module.exports = {auth};
