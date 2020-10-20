import React from 'react'
import styled from 'styled-components'


const Dot = styled.div`
    position: relative;
    padding-top: auto;
    margin-left: auto;
    margin-right: auto;
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: #333333;
`

const PatternLedDot = (props) => {
    // const value = '0'.repeat(Math.abs(3 - props.value.length)) + props.value
    // const red = (value.charAt(2) == '1' ? "#FF0000" : "grey")
    // const yellow = (value.charAt(1) == '1' ? "#FFFF00" : "grey")
    // const green = (value.charAt(0) == '1' ? "#00FF00" : "grey")

    return (
        <Dot>
        </Dot>
    )
}

export default PatternLedDot