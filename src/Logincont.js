const Logincont = () => {

    const handleSwitch = () => {
      var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"$%&/\
      ()=?}][{'
    }

    return ( 
        <div className="loginCont">
        <div className="displayTxt">CREATE AN ACCOUNT</div>
        <form method='POST'>
          <input type="email" id='emailUsn' name='usrEm' placeholder="e. g. john.snow@gmail.com" />
          <div className="displayTxt">EMAIL ADDRESS</div>

          <input type="text" id='nameUsn' name='usrNm' placeholder="e. g. John Snow" />
          <div className="displayTxt">FIRST - AND LASTNAME</div>
          
          <input type="password" id='passWrd' name='usrPw' placeholder="rl9?!1~hH!#Vt" />
          <div className="displayTxt">PASSWORD</div>
        </form>
        <div className="smallText"> 
          <span className="blueColor"> Sign In</span>, or login
          as a <span className="blueColor">Demo User</span>.
        </div>
        </div>
     );
}
 
export default Logincont;