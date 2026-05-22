import { useState } from 'react'
import { Message } from '../types/Messages';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/features/messagesSlice';

function PromptInput() {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    const message : Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    dispatch(addMessage(message)); // Add message to Redux store
    setInput(''); // Clear input after sending
  };

  return (
    <div className="w-4xl flex">
        <form 
        onSubmit={(e) => handleSubmit(e)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
          }
        }} 
        className="w-full flex items-center">
            <textarea
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
        </form>
    </div>
  )
}

export default PromptInput