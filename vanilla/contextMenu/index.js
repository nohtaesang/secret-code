

const container =document.querySelector('.container')
const items = document.querySelectorAll('.item')

// container.addEventListener('click', (e)=>{
//     e.stopPropagation()
//     const targetEl = e.target
    
//     if(!targetEl.classList.contains('item')) return;
//     targetEl.classList.toggle('open')
//     items.forEach(el=>{
//         if(el!==targetEl) el.classList.remove('open')
//     }) 
// })

window.addEventListener('click',(e)=>{
    const targetClassList = e.target.classList;
    
    if(targetClassList.contains('context')) return;
    
    if(targetClassList.contains('item')){
        targetClassList.toggle('open')
        items.forEach(el=>{
            if(el!==e.target) el.classList.remove('open')
        })  
        return;
    }

    items.forEach((el)=>{
        el.classList.remove('open')
    })
})