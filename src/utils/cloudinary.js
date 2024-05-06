import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        //uplode the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath ,
            { 
                resource_type: "auto"
        })
        // file has been uploded sucessfull
        console.log("file is uploded successfull" , response.url);
        return response;
    }catch (error){
        fs.unlinkSync(localFilePath) //  unlike the file form the surver on the image is not visual 
    }
}

export {uploadOnCloudinary}