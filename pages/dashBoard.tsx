import { RightOutlined } from "@ant-design/icons"
import { Col, DatePicker, Row } from "antd"
import { Content } from "antd/lib/layout/layout"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

function Dashboard() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <>

            <Content className="container-dashboard" style={{ margin: '24px 16px 0' }}>
                <Row  >
                    <Col xl={12} xs={24}    >
                        <div className="card-number-payment" >
                            <p className="payment-item">Doanh thu hôm nay</p>
                            <p className="payment-item">0 đ</p>
                            <p className="payment-item">
                                <span className="item-span">0</span>
                                <span className="item-span">Giao dịch</span>
                            </p>
                        </div>
                    </Col>
                    <Col xl={12} xs={24} >
                        <div className="card-number-payment">
                            <p className="payment-item">Tổng doanh thu</p>
                            <p className="payment-item">120,000 đ</p>
                            <p className="payment-item">
                                <span className="item-span">4</span>
                                <span className="item-span">Giao dịch</span>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{
                        background: "white",
                        borderRadius: 10,
                        margin: 10
                    }}>
                        <div className="card-chart-filter" >
                            <Row className="cls-date-picker">
                                <div className="date-picker__ct"> <DatePicker renderExtraFooter={() => 'extra footer'} /></div>
                                <div className="icon__ct"><RightOutlined /></div>
                                <div className="date-picker__ct"> <DatePicker renderExtraFooter={() => 'extra footer'} /></div>
                                <button className="btn"> Tìm</button>
                            </Row>
                        </div>
                        <Row >
                            <Col xl={12} xs={24}    >
                                <LineChart width={500} height={300} data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                    <Line type="montoone" dataKey="uv" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                </LineChart> 
                                
                            </Col>
                            <Col xl={12} xs={24}    >
                                <LineChart width={500} height={300} data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                    <Line type="montoone" dataKey="uv" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                </LineChart>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Content>


        </>
    )
}
export default Dashboard