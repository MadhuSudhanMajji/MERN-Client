const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject("Number must be non zero")
            }
            return resolve(a+b)
        },3000)
    })
}
//we chain our Promises with .then()
add(10,20).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum1)=>{
    console.log(sum1)
})
