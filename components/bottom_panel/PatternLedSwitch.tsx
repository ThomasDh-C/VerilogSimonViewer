import React from 'react'
import styled from 'styled-components'


const Bar = styled.div`
    position: relative;
    padding-top: auto;
    margin-left: auto;
    margin-right: auto;
    width:25px;
    height:60px;
    border-radius:5px;

    background-color: #333333;
`
const Switcher = styled.div`
    position: relative;
    width:23px;
    height:33px;
    margin-top: 26px;
    margin-left: 1px;
    vertical-align: middle;
    border-radius: 4px;
    
    background-color: #FF0000;
`

const PatternLedSwitch = (props) => {
    // const value = '0'.repeat(Math.abs(3 - props.value.length)) + props.value
    // const red = (value.charAt(2) == '1' ? "#FF0000" : "grey")
    // const yellow = (value.charAt(1) == '1' ? "#FFFF00" : "grey")
    // const green = (value.charAt(0) == '1' ? "#00FF00" : "grey")

    return (
        <Bar>
            <Switcher>
            </Switcher>
        </Bar>
    )
}

export default PatternLedSwitch