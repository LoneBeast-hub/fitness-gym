import React from 'react'

const Tab = ({ label, isActive, onClick }) => {
    const classes = ` ${isActive ? 'bg-text-heading text-white' : 'bg-backgroud-color hover:bg-light-gray'}`
    return (
        <button 
            type='button' 
            className={classes} onClick={onClick}>          
            {label}
        </button>
    )
}


export default Tab;