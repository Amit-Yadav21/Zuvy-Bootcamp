import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext';
function Login() {
    const { setUsername, setShowUsername } = useContext(LoginContext);
    return (
        <>
            <div>
                <input type="text" placeholder="Enter username" onChange={(event) => {
                    setUsername(event.target.value);
                }} />
                <input type="password" placeholder="Enter password" />
                <button onClick={() => {
                    setShowUsername(true);
                }}>Login</button>
            </div>
        </>
    )
}

export default Login