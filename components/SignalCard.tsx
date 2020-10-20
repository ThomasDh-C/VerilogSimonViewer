import React from 'react'
import { Card } from 'antd';
import TrafficLight from './TrafficLight'
import DropdownSelector from './DropdownSelector'



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

    return (
        <Card title={props.street} style={{ width: 300, marginRight: 30 }}>
            <DropdownSelector vcdObj={props.vcdObj} setSignalAvailableIndex={setSignalAvailableIndex} />
            <TrafficLight value={signalString} />
        </Card>
    )
}

export default SignalCard