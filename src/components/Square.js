import React from 'react'

export default function Square({ value, onClick }){
    const classes = value ? `squares ${value}` : `squares`;

    return (
        <button className={classes} onClick={onClick}>{
            value
        }</button>
    )
}