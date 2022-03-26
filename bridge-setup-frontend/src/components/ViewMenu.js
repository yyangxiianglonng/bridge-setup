/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-12 23:43:25
 * @LastEditTime: 2022-03-15 18:31:22
 * @FilePath: /bridge-setup/bridge-setup-frontend/src/components/ViewMenu.js
 */
import React from 'react'
import { renderRoutes } from 'react-router-config';
import routes from '../router';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


export default function ViewMenu() {
    return (
        <Layout style={{ margin: '0 15%' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '70%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <NavLink exact to="/maillist" activeClassName="link-active">MailList</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/mailform" activeClassName="link-active">MailFrom</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/daitohkigyo" activeClassName="link-active">大東企業PCセットアップ</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 820 }}>
                    {renderRoutes(routes)}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout >
    )
}
