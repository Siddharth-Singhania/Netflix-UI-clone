import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { login,signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'
function Login(){
    const [loading,setloading] = useState(false);
    const [signState,setsignState] = useState("Sign In");

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const user_auth = async(event)=>{
        event.preventDefault();
        setloading(true)
        if(signState === "Sign Up"){
            signup(name,email,password)
        }else{   
            await login(email,password)
        } 
        setloading(false);   
    }



    return(
        loading?<div className="login-spinner">
            <img src={netflix_spinner}/>
        </div>:
        <div className="login">
            <img src={logo} alt="" className='login-logo'/>
            <div className="login-form">
                <h1>{signState}</h1>
                <form onSubmit={user_auth}>
                    {signState === "Sign Up"? 
                    <input type='text' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>:null}
                    <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type='checkbox'/>
                            <label>Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState==="Sign In"?
                    <p>New To Netflix? <span onClick={()=>setsignState("Sign Up")}>Sign Up Now</span></p>:
                    <p>Already Have Account?<span onClick={()=>setsignState("Sign In")}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;