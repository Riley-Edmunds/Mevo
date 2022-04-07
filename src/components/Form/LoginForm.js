import React, {useState} from 'react';
import Navibar from '../Navbar/Navibar';
 
const LoginForm = (props) => {
    const [username,setUsername] = useState('');
    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const [password,setPassword] = useState('');
    const passwordHandler = (event) => {
        setPassword(event.target.value);
        console.log(password);
    }

    return(
        // <Navibar>
        //     <div >
        //         <p>Username:</p>
        //         <input type='text' value={username} onChange={usernameHandler}></input>
        //         <p>Password:</p>
        //         <input type='text' value={password} onChange={passwordHandler}></input>
        //         <br></br>
        //         <button type='submit'>Submit</button>
        //     </div>
        // </Navibar>
        <p>LOGIN</p>
    )
}

export default LoginForm;