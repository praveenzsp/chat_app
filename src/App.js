import {ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './LoginForm';


const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    
    return(
        <ChatEngine 
            height="100vh"
            offset={5.5} 
            projectID="91990882-9202-4a66-9372-9e87f151160b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')} 
        />
    )
}

export default App;