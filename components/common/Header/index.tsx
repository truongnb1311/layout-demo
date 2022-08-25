import { CheckCircleOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, MenuProps, Row } from "antd";
import React from "react"
const { Header, Content, Sider } = Layout;
const items1: MenuProps['items'] = ['1'].map(key => ({
    key,
    label: `nav ${key}`,
}));
function Headers() {
    return (
        <>
            <Header className="header" style={{ padding: 0 }}>
                <Row>
                    <Col span={24}>
                        <div className="navbar-img">
                            <img src="https://sbx-static.payme.vn/2022/03/21/OD65v7l75.png" alt="" />
                        </div>
                        <div className="info-merchant">
                            <div className="name-merchant">
                                "UDEMEE"
                                <CheckCircleOutlined />
                            </div>

                        </div></Col>



                </Row>
            </Header>
        </>
    )
}
export default Headers