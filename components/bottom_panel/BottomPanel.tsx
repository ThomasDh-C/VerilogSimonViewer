import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
  align-content: space-between;
`

const BottomPanel = (props) => {
    return (
        <Card title="BottomPanel" style={{ width: '100%' }}>
        </Card>
    )
}

export default BottomPanel