const myPromise = new Promise((resolve, reject)=>{
   setTimeout(()=>{
    resolve('Yellow cat')
   }, 3000)
})


myPromise
.then(function(res){
    console.log('Got promise resolved value from myPromise after 2 sec');
    console.log('First chain')

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('First chian completed after 5 sec')
           resolve(res);
        }, 5000)
    })
   
})
.then((res)=>{
    console.log('2nd chain')
    console.log('Result from first chain ')
    console.log(res);
    console.log('2nd chain finish')
})

console.log('Hello');


