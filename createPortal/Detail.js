import React from 'react'

const Detail = ({onToggle},ref) =>{

    return <div ref={ref} onClick={onToggle} >hello</div>

}

export default React.forwardRef(Detail)