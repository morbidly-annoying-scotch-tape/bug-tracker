import googleLogo from './img/logo-google.svg';
import githubLogo from './img/logo-github.svg';
import { useState } from 'react';

const Logincont = () => {
    let root = document.documentElement;

    const handleSwitch = () => {
      var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"$%&/\
()=?}][{+-*~#';
      var randString = "";
      for (var c=0; c<(Math.random() * 7) + 15; c++) {
        randString += String(str[Math.floor(Math.random() * 81)]);
        
      }
      document.getElementById('passWrd').placeholder = 'e. g. ' + randString;
      setTimeout(handleSwitch, 2000);
    }
    window.onload = handleSwitch;

    const handleLoad = () => {
      document.querySelector('#emailUsn').focus();
    }

    window.addEventListener('load', handleLoad);

    const handleAuthClick = (e) => {
      e.preventDefault();
    }

    const validateMail = (email) => {

      return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(email);
      
      
    }

    const handleMailInput = () => {
      var email = document.querySelector('#emailUsn').value;
      if (validateMail(email) == false) {
        root.style.setProperty('--mail-bd-color', 'rgb(220, 35, 55)');
        root.style.setProperty('--mail-tr-color', 'rgba(220, 35, 55, 0.2)');
        root.style.setProperty('--mail-in-color', 'rgb(220, 35, 55)');
        root.style.setProperty('--mail-bx-width', '1px');
      }
      else {
        root.style.setProperty('--mail-bd-color', 'rgb(66, 133, 244)');
        root.style.setProperty('--mail-tr-color', 'rgba(66, 133, 244, 0.2)');
        root.style.setProperty('--mail-in-color', '#eeedf2');
        root.style.setProperty('--mail-bx-width', '0px');
      }
    }

    const validatePass = (password) => {
      return (password.length >= 12);
    }

    const handlePassInput = () => {
      var pass = document.querySelector('#passWrd').value;
      if (validatePass(pass) == false) {
        root.style.setProperty('--pass-bd-color', 'rgb(220, 35, 55)');
        root.style.setProperty('--pass-tr-color', 'rgba(220, 35, 55, 0.2)');
        root.style.setProperty('--pass-in-color', 'rgb(220, 35, 55)');
        root.style.setProperty('--pass-bx-width', '1px');
      }
      else {
        root.style.setProperty('--pass-bd-color', 'rgb(66, 133, 244)');
        root.style.setProperty('--pass-tr-color', 'rgba(66, 133, 244, 0.2)');
        root.style.setProperty('--pass-in-color', '#eeedf2');
        root.style.setProperty('--pass-bx-width', '0px');
      }
    }
    
    

    return ( 
        <div className="loginCont">
        <div className="displayTxt">CREATE AN ACCOUNT</div>
        <form>
          <input type="email" id='emailUsn' onInput={ handleMailInput } name='usrEm' placeholder="e. g. john.snow@panem.com" />
          <div className="displayTxt">EMAIL ADDRESS</div>

          <input type="password" id='passWrd' onInput={ handlePassInput } name='usrPw' placeholder="e. g. rl9?!1~hH!#Vt" />
          <div className="displayTxt">PASSWORD ( MIN 12 CHARACTERS )</div>

          <input type="text" id='nameUsn' name='usrNm' placeholder="e. g. John Snow" />
          <div className="displayTxt">FULL NAME</div>

          <div className='authPanel'>

          <button className="lgBtn" id='googleBtn' onClick={ handleAuthClick }>
            <img src={ googleLogo } alt="Google Logo" width={ 17 } height={ 17 } />
            USE GOOGLE
          </button>

          <button className="lgBtn" id='githubBtn' onClick={ handleAuthClick }>
            <img src={ githubLogo } alt="Github Logo" width={ 20 } height={ 20 } />
            USE GITHUB
          </button>
          </div>

        <button id='submitBtn' type='submit'>
          REGISTER
        </button>
          
        </form>
        <div className="smallText"> 
          <span className="blueColor"> Sign In</span>, or login
          as a <span className="blueColor">Demo User</span>.
        </div>
        </div>
     );
}
 
export default Logincont;