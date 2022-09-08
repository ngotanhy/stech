import './App.css';
import NavHeader from './components/navHeader';
import { Outlet } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <NavHeader />
      <Outlet/>
    </div>
  )
}

export default App
