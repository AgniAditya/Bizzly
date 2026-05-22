import ConversationBox from "./ConversationBox"
import PromptInput from "./PromptInput"

function Main() {
  return (
    <div className='Main w-full h-full flex flex-col items-center justify-between gap-5 py-10 bg-blue-50'>
      <ConversationBox />
      <PromptInput />
    </div>
  )
}

export default Main