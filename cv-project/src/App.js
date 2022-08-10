import { render } from '@testing-library/react';
import './App.css';
import Name from './components/Name';
import SideBar from './components/SideBar';
import Contact from './components/Contact';
import Profile from './components/Profile';

function App() {
  return (
    <div className="Wrapper">
      <Name />
      <Profile />
      <SideBar>
        <Contact />
      </SideBar>
    </div>
  );
}

export default App;
