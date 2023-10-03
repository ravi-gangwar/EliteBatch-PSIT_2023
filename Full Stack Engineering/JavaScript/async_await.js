 const asyncc = async () =>{
    await setTimeout(()=>console.log("Time Out done"), 1000);
}
console.log("Start")
asyncc()
console.log("End")

