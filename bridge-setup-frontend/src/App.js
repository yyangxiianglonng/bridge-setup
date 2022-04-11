import { HashRouter } from 'react-router-dom';
import ViewMenu from './components/ViewMenu';
import './App.css'
import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <ViewMenu />
          <Suspense>
            <Content style={{ margin: '0 15%', height: '100%' }} >
              <div className="site-layout-background" style={{ minHeight: 820 }}>
                {renderRoutes(routes)}
              </div>
            </Content>
          </Suspense>
          <Footer style={{
            textAlign: 'center', margin: '0 15%', backgroundColor: '#242424', fontSize: '14px',
            color: '#fff'
          }}>Bridge Setup ©2022 Created by Bridger</Footer>
        </HashRouter>
      </header>
    </div >
  );
}

export default (App);
