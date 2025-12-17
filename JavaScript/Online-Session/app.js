// console.log("JavaScript is running -->")

// Destructure -->

const userDetail = {
  name: "hasan",
  age: 22,
};

// console.log(userDetail.name, "User Detail -->")

// Array Destructure -->

// let colors = ["red", "green", "blue"]
// console.log(colors[0], "Color --> Array")
// console.log(colors[1], "Color --> Array")
// console.log(colors[2], "Color --> Array")

// const [red, sec,third, fourth] = colors

// console.log(sec, "VALUE -->")

// Object Destructure -->

// const {name, age} = userDetail

// console.log(age)

const response = {
  status: true,
  message: "Got resource successfully",
  data: {
    _id: "663681ced78314aa80690e64",
    experience: [
      {
        _id: "68020e7532752bd6c9ae4c1c",
        user: "663681ced78314aa80690e64",
        position: "Frontend Developer",
        employmentType: "Full-Time",
        companyName: "Hiring Mine",
        city: "Karachi",
        country: "Pakistan",
        currentlyWorking: true,
        startMonth: "8",
        startYear: "2024",
        endMonth: null,
        endYear: null,
        totalDuration: 1.2449376257927447,
        description:
          "Built and optimized interactive React.js components with seamless API integration.\nDeveloped and maintained web applications using React.js and Redux.",
        __v: 0,
        locationType: "onsite",
      },
      {
        _id: "68020e7532752bd6c9ae4c20",
        user: "663681ced78314aa80690e64",
        position: "Frontend Developer",
        employmentType: "Part-Time",
        companyName: "Build Link",
        city: "Karachi",
        country: "Pakistan",
        currentlyWorking: false,
        startMonth: "5",
        startYear: "2024",
        endMonth: "7",
        endYear: "2024",
        totalDuration: 0.16712328767123288,
        description:
          "Built and optimized interactive React.js components with seamless API integration.\nDelivered responsive features for an e-commerce platform in a remote setup.",
        __v: 0,
        locationType: "remote",
      },
      {
        _id: "68020e7532752bd6c9ae4c22",
        user: "663681ced78314aa80690e64",
        position: "Frontend Developer",
        employmentType: "Part-Time",
        companyName: "Branding Hopes",
        city: "Karachi",
        country: "Pakistan",
        currentlyWorking: false,
        startMonth: "2",
        startYear: "2024",
        endMonth: "4",
        endYear: "2024",
        totalDuration: 0.16712328767123288,
        description:
          "Create a mobile-friendly layout using Tailwind CSS or styled-components for consistent user experience across devices.\nDevelop dynamic forms using React.js for better engagement and usability.",
        __v: 0,
        locationType: "remote",
      },
    ],
    firstName: "Hasan",
    lastName: "Ashraf",
    mobileVerified: true,
    userName: "Hasan",
    resumeUrl:
      "https://s3.ap-southeast-1.amazonaws.com/singabucket.hiringmine/profile/cover/1764409585596-Hasan-Frontend.pdf",
    email: "codermhasan@gmail.com",
    country: "Pakistan",
    city: "Karachi",
    dateOfBirth: null,
    description:
      "Frontend  Developer  with  expertise  in  React.js,  JavaScript,  HTML5,  CSS3,\nTailwind CSS, and Material UI. Proven experience delivering 3+ web projects\nwith clean code and optimized performance. Skilled in API integration, state\nmanagement,  and  translating  UI  designs  into  interactive  user  experiences.\nSeeking opportunities to contribute to modern, scalable frontend solutions.",
    jobTitle: "Frontend Developer",
    profilePic:
      "https://s3.ap-southeast-1.amazonaws.com/singabucket.hiringmine/profile/image/1714851869389-for%20thumbnail.jpg",
    coverPhoto:
      "https://s3.ap-southeast-1.amazonaws.com/singabucket.hiringmine/profile/cover/1724925197209-1.jpg",
    education: [
      {
        _id: "68020e7732752bd6c9ae4c29",
        user: "663681ced78314aa80690e64",
        institutionName: "GOVT CITY COLLEGE",
        degree: "Intermediate",
        fieldOfStudy: "Commerce",
        startMonth: "0",
        startYear: "2022",
        endMonth: "0",
        endYear: "2024",
        grade: "C",
        currentlyProcessing: false,
        __v: 0,
      },
      {
        _id: "68020e7732752bd6c9ae4c2b",
        user: "663681ced78314aa80690e64",
        institutionName: "YOUNG LEARNER’S SCHOOL",
        degree: "Matriculation",
        fieldOfStudy: "Computer Science",
        startMonth: "0",
        startYear: "2020",
        endMonth: "0",
        endYear: "2022",
        grade: "B",
        currentlyProcessing: false,
        __v: 0,
      },
      {
        _id: "68020e7732752bd6c9ae4c2f",
        user: "663681ced78314aa80690e64",
        institutionName: "SMIT (Saylani Mass IT Training)",
        degree: "Diploma",
        fieldOfStudy: "Web Development",
        startMonth: "0",
        startYear: "2023",
        endMonth: "11",
        endYear: "2023",
        grade: "A",
        currentlyProcessing: false,
        __v: 0,
      },
    ],
    certification: [
      {
        _id: "68661e3bcf07f37c9c3783ef",
        user: "663681ced78314aa80690e64",
        certificationName: "Saylani Mass IT Training",
        issuingOrganization: "Web & App Development",
        startMonth: "0",
        startYear: "2024",
        endMonth: "11",
        endYear: "2035",
        __v: 0,
      },
    ],
    views: 264,
    recommendationsReceived: [
      {
        _id: "671fcc08630465353b55b639",
        message:
          "A really Good Developer, with Passion to learn new Technologies",
        relationship: "You mentored Hasan",
        position: "Associate Developer at Hiring Mine",
        visibility: true,
        createdAt: "2024-10-28T17:38:16.917Z",
        giver: {
          _id: "66ed8d8604aded84d6655917",
          userName: "innosufiyan",
          firstName: "Muhammad",
          lastName: "Sufiyan",
          profilePic:
            "https://s3.ap-southeast-1.amazonaws.com/singabucket.hiringmine/profile/image/1736783239502.jpg",
          jobTitle: "Software Engineer",
        },
        receiver: {
          _id: "663681ced78314aa80690e64",
          userName: "Hasan",
          firstName: "Hasan",
          lastName: "Ashraf",
        },
      },
    ],
    recommendationsGiven: [
      {
        _id: "6720caa8630465353b55bd25",
        message: "Sir Inno Sufiyan is the best teacher mentor.",
        relationship: "You mentored inno",
        position: "Full Stack Developer at MSE Technology",
        createdAt: "2024-10-29T11:44:40.444Z",
        giver: {
          _id: "663681ced78314aa80690e64",
          userName: "Hasan",
          firstName: "Hasan",
          lastName: "Ashraf",
          profilePic:
            "https://s3.ap-southeast-1.amazonaws.com/singabucket.hiringmine/profile/image/1714851869389-for%20thumbnail.jpg",
          jobTitle: "Frontend Developer",
        },
        receiver: {
          _id: "66ed8d8604aded84d6655917",
          userName: "innosufiyan",
          firstName: "Muhammad",
          lastName: "Sufiyan",
          profilePic:
            "https://s3.ap-southeast-1.amazonaws.com/singabucket.hiringmine/profile/image/1736783239502.jpg",
          jobTitle: "Software Engineer",
        },
      },
    ],
    openToWork: true,
    workPreference: [
      "freelance",
      "part-time",
      "full-time",
      "remote",
      "hybrid",
      "onsite",
      "contract",
    ],
    interestedInPosition: "Junior",
    currentSalary: null,
    expectedSalaryRangeStart: null,
    expectedSalaryRangeEnd: null,
    totalWorkExperience: 1.3,
    skills: [
      {
        _id: "662127037a98c82ef999c64e",
        name: "JavaScript",
        isActive: true,
        skillDescription: "",
        postCounts: 181,
        createdAt: "2024-04-18T13:58:27.647Z",
        updatedAt: "2025-12-11T13:23:08.165Z",
        __v: 0,
      },
      {
        _id: "6630e54fab2970e42fb53ff5",
        name: "MongoDB",
        isActive: true,
        skillDescription: "",
        postCounts: 39,
        createdAt: "2024-04-30T12:34:23.074Z",
        updatedAt: "2025-11-01T05:20:08.232Z",
        __v: 0,
      },
      {
        _id: "6630e54fab2970e42fb53ffd",
        name: "HTML5",
        isActive: true,
        skillDescription: "",
        postCounts: 26,
        createdAt: "2024-04-30T12:34:23.408Z",
        updatedAt: "2025-10-02T11:16:46.228Z",
        __v: 0,
      },
      {
        _id: "6630e6e2ab2970e42fb540f2",
        name: "Firebase",
        isActive: true,
        skillDescription: "",
        postCounts: 14,
        createdAt: "2024-04-30T12:41:06.634Z",
        updatedAt: "2025-12-10T10:22:28.262Z",
        __v: 0,
      },
      {
        _id: "663b2bb2ca19409a65516110",
        name: "AWS",
        isActive: true,
        skillDescription: "",
        postCounts: 31,
        createdAt: "2024-05-08T07:37:22.941Z",
        updatedAt: "2025-11-01T05:20:09.281Z",
        __v: 0,
      },
      {
        _id: "6676babee1cc85c504bdcbf8",
        name: "Next.js",
        isActive: true,
        skillDescription: "",
        postCounts: 18,
        createdAt: "2024-06-22T11:51:26.811Z",
        updatedAt: "2025-11-01T05:20:06.163Z",
        __v: 0,
      },
      {
        _id: "668bf21a8355719aa9b58dad",
        name: "GitHub",
        isActive: true,
        skillDescription: "",
        postCounts: 9,
        createdAt: "2024-07-08T14:05:14.023Z",
        updatedAt: "2025-07-25T12:56:14.839Z",
        __v: 0,
      },
      {
        _id: "668ff8a71b140015881c35bf",
        name: "AWSManagement",
        isActive: true,
        skillDescription: "",
        postCounts: 1,
        createdAt: "2024-07-11T15:22:15.530Z",
        updatedAt: "2024-07-11T15:22:15.589Z",
        __v: 0,
      },
      {
        _id: "66a11e0c1b140015881c6f36",
        name: "Bootstrap5",
        isActive: true,
        skillDescription: "",
        postCounts: 1,
        createdAt: "2024-07-24T15:30:20.166Z",
        updatedAt: "2024-07-24T15:30:20.231Z",
        __v: 0,
      },
      {
        _id: "66b536a81b140015881cd964",
        name: "MaterialUI",
        isActive: true,
        skillDescription: "",
        postCounts: 0,
        createdAt: "2024-08-08T21:20:40.015Z",
        updatedAt: "2025-07-29T09:55:22.660Z",
        __v: 0,
      },
      {
        _id: "6727f245e9843d2aae0d3feb",
        name: "Tailwind CSS",
        isActive: false,
        skillDescription: "",
        postCounts: 0,
        __v: 0,
        createdAt: "2024-11-03T21:59:33.051Z",
        updatedAt: "2024-11-03T21:59:33.051Z",
      },
      {
        _id: "673b39142a662b70ec762e14",
        name: "Postman",
        isActive: false,
        skillDescription: "",
        postCounts: 4,
        __v: 0,
        createdAt: "2024-11-18T12:54:44.809Z",
        updatedAt: "2025-08-28T08:43:31.622Z",
      },
      {
        _id: "67455a21edd2229a87e9defa",
        name: "NodeJS",
        isActive: false,
        skillDescription: "",
        postCounts: 2,
        createdAt: "2024-11-26T05:18:25.467Z",
        updatedAt: "2025-09-08T12:56:12.273Z",
        __v: 0,
      },
      {
        _id: "67455a21edd2229a87e9df00",
        name: "ExpressJS",
        isActive: false,
        skillDescription: "",
        postCounts: 1,
        createdAt: "2024-11-26T05:18:25.785Z",
        updatedAt: "2024-11-26T05:18:25.849Z",
        __v: 0,
      },
    ],
    jobsApplied: 24,
    profileSponsorshipStatus: "boosted",
    profileSponsorshipPlanKey: "custom_69336c2622c16c3e98f47c3f",
    profileSponsorshipPriority: 1,
    profileSponsorshipStartsAt: "2025-12-11T10:43:20.463Z",
    profileSponsorshipEndsAt: "2025-12-16T10:43:20.463Z",
    totalExperienceYears: 1.62,
    appreciated: false,
  },
};

// console.log("Response -->", )

// const {data} = response

// const {firstName,education} = data

// // console.log("education -->", education)

// const [edu1, edu2, edu3] = education

// console.log(edu1)

// const {data} = response

// console.log(data)

// Rest Operator kab user hoga ==>
// const { education : myEduc, experience ,skills, ...others} = data

// console.log("Education -->",experience)   /// alias create -->
// console.log("Exp -->",experience)

// console.log(myEduc)

// spread operator -->
// Khol deta hai -->

// const {workPreference} = response.data

// console.log(workPreference)

// const newArr = ["dihari", ...workPreference]

// console.log(newArr)

// Object Spread -->

// let trainerDetail = {

//     name :"hasan",
//     age : 22,
//     campus : ["Bahadurabad", "Gulshan"],
//     batch : [17, 20]

// }

// console.log("trainerDetail -->",trainerDetail)

// let anotherObj = {
//     ...trainerDetail,
//     name : "lorem",
//     campus : ["Numaish", "Multan"]
// }

// console.log("anotherObj -->",anotherObj)

// let randomArr = [1, "yesterday", "today", true, null]

// for(const values of randomArr){
//     console.log(values)
// }

// call , apply , bind

let studentDetails = {
  name: "Ayan hashmi",
  age: 22,
  skills: [
    "HTML",
    "CSS",
    "Js",
    "GitHub",
    "Advance JavaScript",
    "Smooth Scrooling",
  ],
};

let printDetails = function (city,country) {
  console.log(this.name, this.age, city, country);
};

let studentDetails2 = {
  name: "Ayan Faheem",
  age: 17,
  skills: ["HTML", "CSS", "Js"],
}

let studentDetails3 = {
  name: "Uzair",
  age: 17,
 
};


//call

// printDetails.call(studentDetails, "Lahore", "Pk");
// printDetails.call(studentDetails2, "Karachi", "Pk");


//apply
// printDetails.apply(studentDetails2, ["Karachi", "Pk"])
// printDetails.apply(studentDetails, ["Lahore", "Pk"])


///bind
// let newBind = printDetails.bind(studentDetails2, ["Karachi", "Pk"])

// newBind()



// printDetails.call(studentDetails, "Larkana", "Pakistan")
// printDetails.apply(studentDetails2, ["Karachi", "Pakistan"])
// let returnValOfBind = printDetails.bind(studentDetails3, "Multan", "Pakistan")

// console.log(returnValOfBind())