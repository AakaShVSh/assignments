let path = require("path")
let multer = require("multer")


let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, "../my-uploads"));
      },
      filename: function (req, file, callback) {
        const uniquePrefix = Date.now();
        callback(null, uniquePrefix + "-" + file.originalname);
      },
})

let fileFilter = (req,file,callback)=>{
   
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
   
    callback(null, true);
  } else {
   
    callback(new Error("Incorrect mime type"), false);
  }
};


const options = {
    storage,
    fileFilter,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
  };



  let uploads = multer(options)


  let fileUploads = (formKey,method)=>{
    return function(req,res,next){
        let uploadItem;
        if(method=="single"){
            uploadItem=uploads.single(formKey);
        }
        else if(method=="multiple"){
            uploadItem=uploads.any(formKey);
        }
        return uploadedItem(req, res, function (err) {
            if (err instanceof multer.MulterError) {
           
              return res.status(500).send({ message: err.message });
            } else if (err) {
           
              return res.status(501).send({ message: err.message });
            }
          
            return next();
          });
        };

    }
    

  module.exports = {fileUploads,uploads}