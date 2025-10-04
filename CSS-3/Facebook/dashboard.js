// function post(){
//     var description = document.getElementById("description")
//     var image = document.getElementById("image")
//     var postCard = document.getElementById("post")


//     if(image.files && image.files[0]) {
//         var file = files[0]
//          var imageURL = URL.createObjectURL(file);

//           postCard.innerHTML = ` <div class="postCard px-4 py-2" >
//             <div class="postHeader d-flex justify-content-between">

//              <div class="firstSec d-flex gap-3">
//                   <div class="firstSec-image">
//                 <img src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/460122515_1042389220807928_726285323978173438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkZxQ_dJNaxiMjRb6TyMGf6W7G3E0Yq9vpbsbcTRir2xCyE9INcc5I5ZgDi_4fpikN3Wayrf6taG2ZT-DLvd4t&_nc_ohc=OGWOGLgDxhQQ7kNvwHi4j79&_nc_oc=AdkiAJLNPF-uHGxfjgFN-U2r8DENC-AQn4JVv_9iluHuPtls4_E5nNrU3bcBc-S2p4Y&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=EvJApJDY9i-XyJK2IsoT2A&oh=00_AfZDjEY4Dil6DBtQehRHqqJXbXNYLxRwUPllIro5LTiGzA&oe=68E06685" alt="" height="40px" width="40px">
//                </div>
//                <div class="postAcc-Date">
//                    <p class="para heading">
//                        Ak Khola <span style="color: #0866ff;">Follow</span>
//                     </p>
//                     <p>September 29 at 10:22 AM <span><i class="fa-solid fa-globe"></i></span></p>
//                 </div>

//                </div>

//                <div class="icons">
//                 <i class="fa-solid fa-grip"></i>
//                 <i class="fa-solid fa-x"></i>
//                </div>

//             </div>

//             <div class="desc">
//                    ${description.value} <span style="color: #0866ff;">see more...</span>
//                 </div>

//                 <div class="imageBox">
//                     <img src="${imageUrl}" alt="" height="250px" width="250px">
//                 </div>
//          </div>

//     `

// }

// function post() {
//   var description = document.getElementById("description");
//   var image = document.getElementById("image");
//   var postCard = document.getElementById("post");

// //   console.log("description ==> ", description.value);
//   console.log("Image ==> ", image.files);
// //   console.log("post ==> ", postCard);

//   if (image.files && image.files[0]) {
//     console.log("Image Files ==> ",image.files)
//     // var file = image.files[0]; // ✅ sahi kar diya
//     // var imageURL = URL.createObjectURL(file); // ✅ URL bana diya

//     postCard.innerHTML = `
        // <div class="postCard px-4 py-2">
        //     <div class="postHeader d-flex justify-content-between">
        //         <div class="firstSec d-flex gap-3">
        //             <div class="firstSec-image">
        //                 <img src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/460122515_1042389220807928_726285323978173438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkZxQ_dJNaxiMjRb6TyMGf6W7G3E0Yq9vpbsbcTRir2xCyE9INcc5I5ZgDi_4fpikN3Wayrf6taG2ZT-DLvd4t&_nc_ohc=OGWOGLgDxhQQ7kNvwHi4j79&_nc_oc=AdkiAJLNPF-uHGxfjgFN-U2r8DENC-AQn4JVv_9iluHuPtls4_E5nNrU3bcBc-S2p4Y&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=EvJApJDY9i-XyJK2IsoT2A&oh=00_AfZDjEY4Dil6DBtQehRHqqJXbXNYLxRwUPllIro5LTiGzA&oe=68E06685" 
        //                      alt="" height="40px" width="40px">
        //             </div>
        //             <div class="postAcc-Date">
        //                 <p class="para heading">
        //                     Ak Khola <span style="color: #0866ff;">Follow</span>
        //                 </p>
        //                 <p>September 29 at 10:22 AM <span><i class="fa-solid fa-globe"></i></span></p>
        //             </div>
        //         </div>
        //         <div class="icons">
        //             <i class="fa-solid fa-grip"></i>
        //             <i class="fa-solid fa-x"></i>
        //         </div>
        //     </div>

        //     <div class="desc">
        //         ${description.value} <span style="color: #0866ff;">see more...</span>
        //     </div>

        //     <div class="imageBox">
        //         <img src="" alt="" height="250px" width="250px">
        //     </div>
        // </div>
        // `;

//         description = ""
//         imageURL = " "
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Please Enter a image!",
//     //   footer: '<a href="#">Why do I have this issue?</a>',
//     });
//   }
// }







function post () {
var description  = document.getElementById("description")
var image = document.getElementById("image")
var fbPost = document.getElementById("post")


console.log(image)
// if()
// console.log(image.files[0])
if(image.files && image.files[0]) {
    var file = image.files[0]
    var imageUrl = URL.createObjectURL(file)

    // console.log("Image Url ==>",imageUrl)
fbPost.innerHTML += ` <div class="postCard px-4 py-2 mb-2">
            <div class="postHeader d-flex justify-content-between">
                <div class="firstSec d-flex gap-3">
                    <div class="firstSec-image">
                        <img src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/460122515_1042389220807928_726285323978173438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkZxQ_dJNaxiMjRb6TyMGf6W7G3E0Yq9vpbsbcTRir2xCyE9INcc5I5ZgDi_4fpikN3Wayrf6taG2ZT-DLvd4t&_nc_ohc=OGWOGLgDxhQQ7kNvwHi4j79&_nc_oc=AdkiAJLNPF-uHGxfjgFN-U2r8DENC-AQn4JVv_9iluHuPtls4_E5nNrU3bcBc-S2p4Y&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=EvJApJDY9i-XyJK2IsoT2A&oh=00_AfZDjEY4Dil6DBtQehRHqqJXbXNYLxRwUPllIro5LTiGzA&oe=68E06685" 
                             alt="" height="40px" width="40px">
                    </div>
                    <div class="postAcc-Date">
                        <p class="para heading">
                            Ak Khola <span style="color: #0866ff;">Follow</span>
                        </p>
                        <p>September 29 at 10:22 AM <span><i class="fa-solid fa-globe"></i></span></p>
                    </div>
                </div>
                <div class="icons">
                    <i class="fa-solid fa-grip"></i>
                    <i class="fa-solid fa-x"></i>
                </div>
            </div>

            <div class="desc">
                ${description.value} <span style="color: #0866ff;">see more...</span>
            </div>

            <div class="imageBox">
                <img src="${imageUrl}" alt="" height="250px" width="250px">
            </div>
        </div>
        `;
}


// console.log("description ==>", description.value)
// console.log("Image ==>", image.value)


}