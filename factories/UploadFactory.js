const Multer = require("@koa/multer");
const Path = require("path");

const fileFilter = (req,file,cb) => {
  const fileTypes = /pdf/;
  let mimeType = fileTypes.test(file.mimetype);
  let extName = fileTypes.test(Path.extname(file.originalname).toLowerCase());
  if (mimeType && extName)
    return cb(null,true)

  return cb(new Error("O tipo do arquivo enviando é inválido."))
}

const storage = Multer.diskStorage({
  destination: (req,file,cb) => {
    const dir = 'public/files/'
    cb(null,dir)
  },
  filename: (req,file,cb) => {
    const fileType = Path.extname(file.originalname).toLowerCase();
    const filename = `${file.fieldname}-${Date.now().toString(16)}${fileType}`
    cb(null,filename)
  }
})


module.exports = Multer({fileFilter, storage})
