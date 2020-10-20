import React from 'react'
import { Select } from 'antd';

const { Option } = Select;


const DropdownSelector = (props) => {
    function handleChange(index) {
        props.setSignalAvailableIndex(index)
    }

    return (
        <Select defaultValue="Set Me" style={{ width: 240 }} onChange={handleChange}>
            {/* list all signal names in drop down */}
            {props.vcdObj.hasOwnProperty('signal') &&
                props.vcdObj.signal.map((value, index) =>
                    <Option value={index} key={index}> {value.signalName} </Option>
                )
            }
        </Select>
    )
}


export default DropdownSelector