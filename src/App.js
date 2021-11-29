import {ChatEngine} from 'react-chat-engine';
import './App.css';


const App = () =>{
    return(
        <ChatEngine 
            height="100vh"
            projectID="91990882-9202-4a66-9372-9e87f151160b"
            userName="Sai Praveen"
            userSecret="Praveen123@"
            // renderChatFeed={(chatAppProps) => <Chatfeed {...chatAppProps}/> }
        />
    )
}

export default App;