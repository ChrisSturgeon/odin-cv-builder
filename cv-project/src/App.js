import { render } from '@testing-library/react';
import './App.css';
import Name from './components/Name';
import SideBar from './components/SideBar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="Wrapper">
      <Name />
      <SideBar>
        <Contact />
      </SideBar>
    </div>
  );
}

export default App;
