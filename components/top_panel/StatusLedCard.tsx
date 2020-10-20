import React from 'react'
import { Card } from 'antd';
import DropdownSelector from '../DropdownSelector'


const StatusLedCard = (props) => {
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
    const value = '0'.repeat(Math.abs(3 - signalString.length)) + signalString

    let output = ""
    if (signalString.length < 4) {
        if (value.substring(0, 3) == "001") output = "Input"
        else if (value.substring(0, 3) == "010") output = "Playback"
        else if (value.substring(0, 3) == "100") output = "Repeat"
        else if (value.substring(0, 3) == "111") output = "Done"
    }

    return (
        <Card title="Status Leds - mode_leds[2:0]" style={{ width: 300 }}>
            <DropdownSelector vcdObj={props.vcdObj} setSignalAvailableIndex={setSignalAvailableIndex} />
            <p>{output}</p>
        </Card>
    )
}

export default StatusLedCard