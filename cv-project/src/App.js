import { render } from '@testing-library/react';
import './App.css';
import Name from './components/Name';
import SideBar from './components/SideBar';
import Profile from './components/profile';
import Work from './components/Work';

function App() {
  return (
    <div className="Wrapper">
      <div className="main-column">
        <Name />
        <Profile />
        <Work />
      </div>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
