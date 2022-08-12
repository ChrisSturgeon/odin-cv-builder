import { render } from '@testing-library/react';
import './App.css';
import Name from './components/Name';
import SideBar from './components/SideBar';
import Profile from './components/profile';

function App() {
  return (
    <div className="Wrapper">
      <Name />
      <Profile />
      <SideBar></SideBar>
    </div>
  );
}

export default App;
