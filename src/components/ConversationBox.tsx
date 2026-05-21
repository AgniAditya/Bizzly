import { useState } from "react";
import { Message } from "../types/Messages"
import UserPrompt from "./UserPrompt"
import AIResponse from "./AIResponse";

function ConversationBox() {
  const [messages, setMessages] : [Message[], React.Dispatch<React.SetStateAction<Message[]>>] = useState<Message[]>([
  {
    id: '1',
    text: 'Hey, can you help me with React?',
    sender: 'user',
    timestamp: new Date(),
  },
  {
    id: '2',
    text: 'Of course! What do you need help with?',
    sender: 'bot',
    timestamp: new Date(),
  },
  {
    id: '3',
    text: 'I want to learn how useState works.',
    sender: 'user',
    timestamp: new Date(),
  },
  {
    id: '4',
    text: 'useState is a React Hook used to manage state in functional components.',
    sender: 'bot',
    timestamp: new Date(),
  },
  ]); // Placeholder for messages state

  return (
    <div className="ConversationBox w-5xl h-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 overflow-y-auto">
      {
        messages.map((msg) => (
          msg.sender === 'user' ?
          <UserPrompt key={msg.id} text={msg.text} />
          : <AIResponse key={msg.id} text={msg.text} />
        ))
      }
    </div>
  )
}

export default ConversationBox