import './App.css';
import {Router } from './router/index'
import Header from './components/Header.jsx'
function App() {
  return (
    <div className="App, container">
      <div className='leftSidebar'>
        <div className="logo"></div>
        <Header />
      </div>
      <div className='rightSidebar'>
        <Router />
      </div>
     
    </div>
  );
}
export default App;
