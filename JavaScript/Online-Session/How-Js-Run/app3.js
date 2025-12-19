console.log("Global Execution Context Start -->")

setTimeout(() => {
console.log("I'm inside of setTimeout...")
}, 0)

Promise.resolve().then(() => {
    console.log("this is from micro task queue..")
})

console.log("Global Execution Context End -->")c