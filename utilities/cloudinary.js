// import cloudinary from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

// // export const upload = (file, (result) =>{
// //     return new Promise(resolve=> {
// //         cloudinary.UploadStream.upload(file,(result)=>{
// //             resolve({
// //                 url: result.url,
// //                 id: result.public_id,
// //             })
// //         },{
// //             resource_type: 'auto',
// //             folder:folder
// //         })
// //     })
// // }) 


// // Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });


// // Generate 
// const url = cloudinary.url("olympic_flag", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });



// // The output url
// console.log(url);
// // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag