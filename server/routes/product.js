const express = require ('express');
const router = express.Router ();
const {Product} = require ('../models/Product');
const multer = require ('multer');
const {auth} = require ('../middleware/auth');

var storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, 'upload/');
  },

  filename: (req, file, cb) => {
    cb (null, `${Date.now ()}_${file.originalName}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname (file.originalName);

    if (ext !== '.jpg' || ext !== '.png') {
      return cb (res.status (400).end ('only jpg, png are allowed'), false);
    }

    cb (null, true);
  },
});

var upload = multer ({storage: storage}).single ('file');

//Product

router.post ('/uploadImage', auth, (req, res) => {
  upload (req, res, err => {
    if (err) return res.json ({success: false, err});
    return res.json ({
      success: true,
      image: res.req.file.path,
      filename: res.req.file.filename,
    });
  });
});

router.post ('/uploadProduct', auth, (req, res) => {
  //save the data in DB
  const product = new Product (req.body);

  product.save (err => {
    if (err) return res.status (400).json ({success: false, err});
    return res.status (200).json ({success: true});
  });
});

module.exports = router;