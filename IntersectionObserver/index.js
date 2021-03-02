
const item = document.querySelector('#item')

const Observer = new IntersectionObserver((entry)=>{
    console.log(entry)
})

Observer.observe(item)
