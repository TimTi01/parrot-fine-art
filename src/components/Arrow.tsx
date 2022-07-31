import React, { FC } from 'react'

interface ArrowProps {
    position: string,  
    color?: string,
}

// Reusable "Arrow" component
export const Arrow:FC<ArrowProps> = ({position, color}) => {
    let c = color === undefined ? "#B8B8B8" : color
    let d = ''
    let vBox = ''
    let h = ''
    let w = ''
    
    if (position === 'L') {
        d = "M8 13L2 7L8 1"
        vBox = "0 0 9 14" 
        h = vBox[3]
        w = vBox[4]
    } else if (position === 'R') {
        d = "M1 1L7 7L1 13" 
        vBox = "0 0 9 14" 
        h = vBox[3]
        w = vBox[4]
    } else if (position === 'B') {
        d = "M13 1L7 7L1 0.999999" 
        vBox = "0 0 14 9" 
        h = vBox[3]
        w = vBox[4]
    }

    return (
        <>
            <svg width={w} height={h} viewBox={vBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={d} stroke={c} strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>   
    )
}