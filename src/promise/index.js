const somethingWillHappen = ()=>{
    return new Promise((resolve,reject)=>{
        if(true)
        {
            resolve('Hey!');
        }else{
            reject('Oh no, oh no, oh nou nou nou');
        }
    }) ;
};

somethingWillHappen()
.then(response=>console.log(response)).catch(err=>console.error(err));

const somethingWillHappen2=()=>{
    return new Promise((resolve,reject)=>{
        if(true)
        {
            setTimeout(function(){
                resolve('True');
            },2000);
        }else{
            const error=new Error('Whoop');
            reject(error);
        }
    });
}

somethingWillHappen2().then(response=>console.log(response)).catch(err=>console.error(err));
Promise.all([somethingWillHappen2(),somethingWillHappen()]).then(response=>{console.log('Array',response)}).catch(err=>console.error(err));
