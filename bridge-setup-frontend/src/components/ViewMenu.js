import React from 'react'
import { renderRoutes } from 'react-router-config';
import routes from '../router';
import { HeaderWrapper, HeaderLeft } from './style'
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;


export default function ViewMenu() {

    const headerLinks = [
        {
            title: "メール",
            link: "/maillist"
        },
        {
            title: "メール追加",
            link: "/mailform"
        },
        {
            title: "セットアップ",
            link: "/setup"
        },
    ]

    // 页面代码
    const showSelectItem = (item, index) => {
        if (index < 4) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }

    return (
        <Layout style={{ margin: '0 15%' }}>
            {/* <Header style={{ position: 'fixed', zIndex: 1, width: '70%' }}> */}
            < HeaderWrapper >
                <div className="content wrap-v1">
                    <HeaderLeft>
                        <a href="#/" className="logo sprite_01">bridge-setup</a>
                        <div className="select-list">
                            {
                                headerLinks.map((item, index) => {
                                    return (
                                        <div key={item.title} className="select-item">
                                            {showSelectItem(item, index)}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </HeaderLeft>
                </div>
                <div className="divider"></div>
            </HeaderWrapper>
            {/* <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 820 }}>
                    {renderRoutes(routes)}
                </div>
            </Content> */}
            {/* <Footer style={{ textAlign: 'center' }}>Bridge Set ©2022 Created by Bridger</Footer> */}
        </Layout>
    )
}
