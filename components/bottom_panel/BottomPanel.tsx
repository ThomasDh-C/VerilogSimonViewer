import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import PatternLedDot from './PatternLedDot'
import DropdownSelector from '../DropdownSelector'
import PatternLedSwitch from './PatternLedSwitch'

const RowFourElement = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: auto;
  align-content: space-between;
`
const RowFourElementBottom = styled(RowFourElement)`
margin-top: 5px;
`

const BottomPanel = (props) => {
  const [SignalAvailableIndex, setSignalAvailableIndex] = React.useState(0)

  return (
    <Card title="BottomPanel" style={{ width: '100%' }}>
      <Row>
        <Col span={6}>Pattern LEDs - pattern_leds[3:0]
        <DropdownSelector vcdObj={props.vcdObj} setSignalAvailableIndex={setSignalAvailableIndex} /></Col>
        <Col span={18}>
          <RowFourElement>
            <PatternLedDot />
            <PatternLedDot />
            <PatternLedDot />
            <PatternLedDot />
          </RowFourElement>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col span={6}>Pattern switches - pattern[3:0]
        <DropdownSelector vcdObj={props.vcdObj} setSignalAvailableIndex={setSignalAvailableIndex} /></Col>
        <Col span={18}>
          <RowFourElementBottom>
            <PatternLedSwitch />
            <PatternLedSwitch />
            <PatternLedSwitch />
            <PatternLedSwitch />
          </RowFourElementBottom>
        </Col>
      </Row>
    </Card>
  )
}

export default BottomPanel