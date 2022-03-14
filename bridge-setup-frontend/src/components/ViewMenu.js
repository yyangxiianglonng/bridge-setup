import MailList from '../pages/MailList'

import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



export default function ViewMenu() {
    return (
        <Layout style={{ margin: '0 15%' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '70%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">セットアップ</Menu.Item>
                    <Menu.Item key="2">情報管理</Menu.Item>
                    <Menu.Item key="3">メモ</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 820 }}>
                    <MailList />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}
