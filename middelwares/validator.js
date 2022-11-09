const { check, validationResult } = require("express-validator");

// validation register
exports.registerRules = () => [
    check("name", "name is required").notEmpty(),
    check("lastName", "lastName is required").notEmpty(),
    check("phone", "phone is required").notEmpty(),
    check("email", "email is required").notEmpty(),
    check("email", "check email again").isEmail(),
    check("password", "password must be  between 4 and 12 character").isLength({
      min: 4,
      max: 12,
    }),
    check("adress", "adress is required").notEmpty(),
  ];
  // validation login
exports.loginRules = () => [
    check("email", "email is required").notEmpty(),
    check("email", "check email again").isEmail(),
    check(
      "password",
      "password must be between 4 character and 12 character").isLength({
      min: 4,
      max: 12,
    }),
  ];
  // validation annonce
exports.annonceRules = () => [
    check("categorie", "name is required").notEmpty(),
    check("delegation", "delegation is required").notEmpty(),
    check("typeAnnonce", "typeAnnonce is required").notEmpty(),
    check("titre", "title is required").notEmpty(),
    check("prix", "prix is required").notEmpty(),
    check("localisationMap", "localisationMap is required").notEmpty(),
    check("description", "description is required").notEmpty(),
  ];
  exports.validation = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array().map((el) => ({
          msg: el.msg,
        })),
      });
    }
    next();
  };