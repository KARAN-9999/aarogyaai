import React, { useState } from 'react'

const SymptomChecker = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input) return
    const userMessage = { sender: 'user', text: input }
    const botMessage = { sender: 'bot', text: `Analyzing symptoms for: ${input}` }
    setMessages([...messages, userMessage, botMessage])
    setInput('')
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Symptom Checker</h2>
      <div className="border rounded-lg p-4 h-96 overflow-y-auto bg-white mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 text-${msg.sender === 'user' ? 'right text-blue-600' : 'left text-green-600'}`}>{msg.text}</div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Describe your symptoms..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 ml-2 rounded">Send</button>
      </div>
    </div>
  )
}

export default SymptomChecker