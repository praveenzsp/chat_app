import React from 'react'
import { useState } from "react"
import axios from 'axios'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObj ={'Project-ID' : '91990882-9202-4a66-9372-9e87f151160b', 'User-Name' : username, 'User-Secret' : password}
        try{
             await axios.get('https://api.chatengine.io/chats', {headers:authObj})
             localStorage.setItem('username', username)
             localStorage.setItem('password', password)
             window.location.reload()
        }
        catch(error){
            setError('oops! Incorrect credentials')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className ="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    
                </form>
            </div>
            
        </div>
    )
}

export default LoginForm
