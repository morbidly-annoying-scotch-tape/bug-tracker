const Logincont = () => {
    return ( 
        <div className="loginCont">
        <div className="smallText">
          If you do not have an account, you can 
          <span className="blueColor"> Register</span>, or login
          as a <span className="blueColor">Demo User</span>.
        </div>
        <form method='POST'>
          <input type="text" id='emailUsn' name='usrNmEm' />
          <div className="displayTxt">EMAIL OR USERNAME</div>
          <div className="pwInputCont">
          <button id='viewPw'>
            tut
            </button>
          <input type="password" id='passWrd' name='usrPw' />
          </div>
          <div className="displayTxt">PASSWORD</div>
        </form>
        </div>
     );
}
 
export default Logincont;