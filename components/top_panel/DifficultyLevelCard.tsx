import React from 'react'
import { Card } from 'antd';
import DropdownSelector from '../DropdownSelector'


const SignalCard = (props) => {
    const [SignalAvailableIndex, setSignalAvailableIndex] = React.useState(0)

    // find greatest array index for which t (time in array) < props.time (time on slider)
    let timeindex = 0
    if (props.vcdObj.hasOwnProperty('signal')) {
        const timeArray = props.vcdObj.signal[SignalAvailableIndex].wave
        while (timeindex < timeArray.length) {
            if (props.time > timeArray[timeindex][0]) timeindex++
            else break
        }
        if (timeindex == timeArray.length || props.time < timeArray[timeindex][0]) timeindex--
    }

    // get string of signal from array at timeindex
    const signalString = (props.vcdObj.hasOwnProperty('signal') ? props.vcdObj.signal[SignalAvailableIndex].wave[timeindex][1] : '000')
    const value = '0'.repeat(Math.abs(1 - signalString.length)) + signalString
    let output = ""
    if (value.charAt(0) == "0" && signalString.length < 2) output = "Easy mode"
    if (value.charAt(0) == "1" && signalString.length < 2) output = "Hard mode"
    return (
        <Card title="Difficulty Level - level" style={{ width: 300, marginRight: 30 }}>
            <DropdownSelector vcdObj={props.vcdObj} setSignalAvailableIndex={setSignalAvailableIndex} />
            <p>{output}</p>
        </Card>
    )
}

export default SignalCard