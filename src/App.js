import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="loginCont">
        <div className="smallText">
          If you do not have an account, you can 
          <span className="blueColor"> Register</span>, or login
          as a <span className="blueColor">Demo User</span>.
        </div>
      </div>
      <div className="loginSide"></div>
    </div>
  );
}

export default App;
