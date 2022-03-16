/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-12 23:03:32
 * @LastEditTime: 2022-03-15 18:23:12
 * @FilePath: /bridge-setup/bridge-setup-frontend/src/App.js
 */

import './App.css'
import ViewMenu from './components/ViewMenu';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <ViewMenu />
        </HashRouter>
      </header>
    </div>
  );
}

export default (App);
