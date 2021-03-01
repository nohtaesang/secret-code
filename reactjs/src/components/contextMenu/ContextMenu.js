import React from 'react'
import Detail from './Detail'
import ContextPortal from './ContextPortal'

const dummy = [
    {
        text:1
    },
    {
        text:2
    }
]

const ContextMenu = () =>{
    const [openedIndex, setOpenedIndex] = React.useState(-1) 
    const detailsRefs = React.useRef([])
  


    const handleToggle = (index) => (e) =>{
        console.log('hi')
        setOpenedIndex(openedIndex===index? -1 : index)
    }

    
    return <>
    
    <div>{dummy.map((el,index)=><Detail key={el.text} ref={(r)=>detailsRefs.current[index]=r} text={el.text}  onToggle={handleToggle(index)}/>)}</div>
    <ContextPortal
        target={detailsRefs.current[openedIndex]}
        children={<p>bye</p>}
    />

     </>

}

export default ContextMenu