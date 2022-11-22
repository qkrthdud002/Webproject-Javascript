var express = require('express');
var multer = require('multer');
var router = express.Router();

const storage  = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form', (req, res)=>{
  res.render('form');
});
router.get('/jquery', (req, res)=>{
  res.render('jquery');
});
router.get('/axios', (req, res)=>{
  res.render('axios');
});


router.post('/formUpload', upload.single('file'), (req, res)=>{
  const {title, message} = req.body;
  let originalFileName='';
  let fileUrl='';
  if(req.file){
    originalFileName=req.file.originalname;
    fileUrl='/uploads/'+req.file.filename;
  };

  res.render('form', {result:{title:title, message:message, originalFileName:originalFileName, fileUrl:fileUrl}});
});

router.post('/apiUpload', upload.single('file'), (req, res)=>{
  const {title, message} = req.body;
  let originalFileName='';
  let fileUrl='';
  if(req.file){
    originalFileName=req.file.originalname;
    fileUrl='/uploads/'+req.file.filename;
  };
  res.json({title:title, message:message, originalFileName:originalFileName, fileUrl:fileUrl});
});
module.exports = router;
