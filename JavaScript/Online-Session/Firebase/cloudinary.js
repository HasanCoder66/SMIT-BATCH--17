// Cloud name  --> dpvxkqhi8

// Api Key --> 228654729931855

// Api Secret --> eqsG7yG9omgnoxnsZVm5icvBrMU


// CLOUDINARY_URL=cloudinary://<your_api_key>:<your_api_secret>@dpvxkqhi8

const url = 'https://api.cloudinary.com/v1_1/dpvxkqhi8/image/upload';


const uploadImage = async (formData) => {
   let response = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    let responseJson = await response.json()

    console.log(responseJson, "Response ")

    let {secure_url} = responseJson

    return secure_url
    // console.log(secure_url)
      
}




export {uploadImage}