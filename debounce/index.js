
const debounce = (func, delay) =>{
    let timeoutId = null
    
    return (e)=>{
        console.log(timeoutId)
        if(timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(func.bind(e), delay)
    }
}
