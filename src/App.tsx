import './App.css'
import Chat from "minimal-chatbot"
import messages, { firstMessage } from './Data'


function App() {


  return (
    <>
      <Chat
        data={messages}
        firstMessage={firstMessage}
      />
    </>
  )
}

export default App
