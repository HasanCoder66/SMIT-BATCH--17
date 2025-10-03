// console.log("Js Running ==> ")

function post() {
  // console.log("mai chl raha hon")
  var description = document.getElementById("description");
  var image = document.getElementById("file");
//   console.log(image)
  var post = document.getElementById("post");
  // console.log(description.value)
  // console.log(image.value)
  // console.log(post)

  var file = image.files[0]
  var imgUrl = URL.createObjectURL(file)

//   console.log(imgUrl)
  // post.innerHTML = "<h1> Hasan </h1>"
  post.innerHTML += `
    <div class="postCard">

                    <div class="postCardHeader d-flex justify-content-between gap-3">
                        <div class="d-flex gap-3">
                            <img src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/460122515_1042389220807928_726285323978173438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkZxQ_dJNaxiMjRb6TyMGf6W7G3E0Yq9vpbsbcTRir2xCyE9INcc5I5ZgDi_4fpikN3Wayrf6taG2ZT-DLvd4t&_nc_ohc=OGWOGLgDxhQQ7kNvwHi4j79&_nc_oc=AdkiAJLNPF-uHGxfjgFN-U2r8DENC-AQn4JVv_9iluHuPtls4_E5nNrU3bcBc-S2p4Y&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=EvJApJDY9i-XyJK2IsoT2A&oh=00_AfZDjEY4Dil6DBtQehRHqqJXbXNYLxRwUPllIro5LTiGzA&oe=68E06685"
                                alt="" width="50px" height="50px" class="profilePic">
                            <div>
                                <p>Muhammad Hasan</p>
                                <p>23h <span><i class="fa-solid fa-earth-americas"></i></span></p>
                            </div>
                        </div>


                        <!-- icons -->
                        <div class="fs-5">
                            <i class="fa-solid fa-ellipsis"></i>
                            <i class="fa-solid fa-x"></i>
                        </div>

                        <!-- description -->


                    </div>
                    <div class="desc mt-2 mb-2"> ${description.value}</div> <span
                        class="text-primary">See More...</span>

                        <div class="imgBox">
                            <img src=${imgUrl} alt="">
                        </div>
                </div>
    `;

    description.value = " "
    image.files = " "
}

// var lastName = "Ashraf";

// // var myName = "Hasan" + " " + lastName

// var myName = `Hasan ${lastName}`;
// console.log(myName);


var newNum = 6;
newNum +=  6

console.log(newNum)