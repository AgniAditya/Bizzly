import { useSelector } from 'react-redux';
import { Message } from "../types/Messages"
import UserPrompt from "./UserPrompt"
import AIResponse from "./AIResponse";
import { RootState } from '../store/store';

function ConversationBox() {
  const messages: Message[] = useSelector((store: RootState) => store.messages.messages);

  return (
    <div className="ConversationBox w-5xl h-full rounded-lg p-4 flex flex-col gap-4 overflow-y-auto">
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