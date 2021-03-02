const throttle = (func, delay) =>{
    let timeoutId = null
    
    return (e)=>{
        console.log(timeoutId)
        if(!timeoutId){
            timeoutId = setTimeout(()=>{
                func(e)
                // timeoutId=null
                clearTimeout(timeoutId)
            }, delay)
        }
    }
}
