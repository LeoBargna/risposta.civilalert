import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import logoPC from '../assets/logo.png'
import '../css/login.css'


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function GetPar()
  {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var indirizzo = urlParams.get('ind')
    var emergenza = urlParams.get('eme')
    var tipo = urlParams.get('tip')
    console.log(id + indirizzo + emergenza);
  }
  GetPar();

  const handleClick = async e => {
    e.preventDefault()
      await axios.get("https://protezione-civile-server.onrender.com/accessoTenda")
        .then(
            (res)=>{res.data[user]==password?navigate("./attivazione/?ind="+indirizzo+"&tip="+tipologia+"&eme="+emergenza):setError(1)}
        );
  }

  const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
  });

  return (

    <div style={{background: "white", height: "100vh", width: "100vw"}} className="Login">

      <div className="contImmagine">
        <img className="logoPC" src={logoPC}/>
      </div>

      <fieldset className = "form">
        <legend>Login</legend>
        <input className="input" type="text" name='nomeUtente' placeholder='username'/>
        <input className="input" type="password" name='password' placeholder='password'/>
      </fieldset>

      <div>
        <form action="attivazione">
          <button type="submit" className='bottone-login' onClick={handleClick}>
            ACCEDI
          </button>  
        </form> 
      </div>

      {error?<div className="error">Nome Utente o Password errati</div>:null}

    </div>

  )
}

export default Login
