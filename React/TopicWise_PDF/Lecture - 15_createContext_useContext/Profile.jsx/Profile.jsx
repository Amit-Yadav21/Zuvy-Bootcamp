import { useContext, useState } from 'react'
import Dashboard from "./Dashboard";
import { LoginContext } from '../context/LoginContext';

function Profile() {
    const [showDashboad, setShowDashboard] = useState(false);
    const { username } = useContext(LoginContext);
    return (
        <>
            <h1>Profile</h1>
            <h3>{username}</h3>
            <button onClick={() => {
                setShowDashboard(true);
            }}>Dashboard</button>

            {showDashboad && <Dashboard />}
        </>
    )
}

export default Profile