'use client';

import { useState } from 'react';




export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'مرحبًا، أنا مساعد برنامج AI Agent-MVP. كيف أستطيع مساعدتك؟',
    },
  ]);
  const [input, setInput] = useState('');

async function sendMessage() {
  if (!input.trim()) return;

  const userMessage = input;
  setInput('');

  setMessages((prev) => [
    ...prev,
    { role: 'user', text: userMessage },
  ]);

  try {
    const response = await fetch('/api/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        text: data.reply,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        text: 'حدث خطأ في الاتصال بالمساعد الذكي.',
      },
    ]);
  }
}

  return (
    <>
      <button className="ai-float" onClick={() => setOpen(true)}>
        AI
      </button>

      {open && (
        <div className="ai-panel">
          <div className="ai-header">
            <div>
              <strong>مساعد البرنامج</strong>
              <span>AI Agent-MVP</span>
            </div>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="ai-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`ai-message ${msg.role}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
              placeholder="اكتب سؤالك هنا..."
            />
            <button onClick={sendMessage}>إرسال</button>
          </div>
        </div>
      )}
    </>
  );
}