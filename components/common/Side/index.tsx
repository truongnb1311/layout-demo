import { Menu, MenuProps } from "antd"
import Sider from "antd/lib/layout/Sider"
import Link from 'next/link'
import React from "react";
import { router } from "../../../routers";


function Side() {

    return (
        <>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                className='side'
                style={{height: '100vh'}}
            >
         
                <Menu

                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={router.map(
                        (icon, index) => ({
                            key: icon.key,
                            icon: React.createElement(icon.icon),
                            label: <Link href={icon.link} >
                                <a > {icon.key}</a>
                            </Link>

                        }),
                    )}

                />
            </Sider>
        </>

    )
}
export default Side