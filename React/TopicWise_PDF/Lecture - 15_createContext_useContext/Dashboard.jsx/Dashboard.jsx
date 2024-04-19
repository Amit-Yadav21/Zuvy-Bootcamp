import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

function Dashboard() {
    const { username } = useContext(LoginContext);
    return (
        <>
            <h1>Dashboard for {username}</h1>
        </>
    )
}

export default Dashboard