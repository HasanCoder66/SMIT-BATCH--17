// console.log("JavaScript running -->")

function studentFormHandler() {
    let studentName = document.querySelector(".fullName")
    let studentEmail = document.querySelector(".email")
    let studentCourseName = document.querySelector(".studentCourseName")
    let studentImage = document.querySelector(".studentImage")
    let studentBatch = document.querySelector(".studentBatch")
    let studentRollNum = document.querySelector(".rollNumber")

    // console.log(studentImage.files[0])

let imageUrl = "";
console.log("Image Url -->", imageUrl)
    let studentData = {
        name: studentName.value,
        email: studentEmail.value,
        batch: studentBatch.value,
        course: studentCourseName.value,
        rollNum: studentRollNum.value,
        profilePic : ""
    }

    // console.log(studentName.value)
    // console.log(studentEmail.value)
    // console.log(studentCourseName.value)
    // console.log(studentImage.value)
    // console.log(studentBatch.value)
    // console.log(studentRollNum.value)
if(studentImage.files[0]){
    let file = studentImage.files[0]
    studentData.profilePic = URL.createObjectURL(file)
    
    console.log(imageUrl)
    if (studentBatch.value && studentEmail.value && studentCourseName.value && studentName.value && studentRollNum.value) {
        generateIdCard(studentData)
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Fill the Required Field!",
        });
    }
}else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Upload Your Image!",
    });
}

   


    // console.log("Student Data ===> ",studentData)

}

function generateIdCard(studentData) {
console.log("Student Data -->",studentData)
    // console.log("Mai chl raha hoon")

    let idCardUI = ` <div class="idCard">
    <div class="imageBox">
        <img src=${studentData.profilePic} alt="" width="100px" height="100px">
    </div>
    
    <div class="infoBox">
    <div class="name">
        <strong>Name:</strong> <span>${studentData.name}</span>
    </div>
    <div class="email">
        <strong>Email:</strong> <span>${studentData.email}</span>
    </div>
    <div class="studentCourse">
        <strong>Course:</strong> <span>${studentData.course}</span>
    </div>
    <div class="rollNo">
        <strong>Roll Number:</strong> <span>${studentData.rollNum}</span>
    </div>
    <div class="batchNum">
        <strong>Batch Number:</strong> <span>${studentData.batch}</span>
    </div>
       
    </div>
        </div>`
    let idCard = document.getElementById("idCard")

    idCard.innerHTML = idCardUI
    console.log("Id Card -->", idCard)
}