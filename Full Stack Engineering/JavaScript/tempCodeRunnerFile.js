const myPromise = new Promise((resolve, reject)=>{
    console.log("Inside promise!!")
    resolve(101);
})

myPromise().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});