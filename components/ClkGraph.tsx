import React from 'react'
import { Row, Col } from 'antd';
import styled from 'styled-components'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const WideDiv = styled(Row)`
    width: 70%;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
`
const Small = styled.div`
    height: 120px;
    padding: 0px;
`
const ClkGraph = (props) => {

    const [options, setOptions] = React.useState({
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        stroke: {
            curve: 'stepline',
        },
        annotations: {
            xaxis: [{
                x: 2,
                strokeDashArray: 0,
                borderColor: '#775DD0',
                label: {
                    borderColor: '#775DD0',
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                    text: 'Time',
                }
            }],
        },
        tooltip: {
            enabled: false,
        },

    });
    const [series, setSeries] = React.useState([
        {
            name: 'clk',
            data: [[1, 0], [3, 1], [5, 0]],
        },
    ]);
    return (
        <WideDiv>
            <Col span={18}>
                <Small><Chart options={options} series={series} height="100%" /></Small>

            </Col>
            <Col span={6}>
            </Col>
        </WideDiv>

    )
}

export default ClkGraph