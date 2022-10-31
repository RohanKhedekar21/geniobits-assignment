import './App.css';
import { HeaderComponent } from './components/header';
import { MainContainer } from './components/main-container';
import { SideMenuBar } from './components/SideMenuBar/SideMenuBar';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <SideMenuBar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
