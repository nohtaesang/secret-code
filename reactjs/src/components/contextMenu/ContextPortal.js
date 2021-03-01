import React from 'react'
import ReactDom from 'react-dom'

const ContextPortal = ({children, target}) =>{
    return target? ReactDom.createPortal(children,target) : null
}

export default ContextPortal