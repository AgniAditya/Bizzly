
function UserPrompt({ text }: { text: string }) {
  return (
    <div className="w-full h-fit justify-end flex">
      <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
        <p className="text-sm font-medium mb-1">User:</p>
        {text}
      </div>
    </div>
  )
}

export default UserPrompt