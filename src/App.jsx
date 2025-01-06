import './App.css';

import { Outlet } from "react-router-dom";
import ToolbarComponent from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className='App'>
      <ToolbarComponent />

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;