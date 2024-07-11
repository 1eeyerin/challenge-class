"use client";

import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/talk", {
      method: "POST",
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <h1 className="text-5xl font-extrabold text-white mb-8 shadow-lg">
        내 ai 친구를 소개합니다
      </h1>

      <div className="w-3/4 h-1/3 bg-white rounded-lg border-2 border-gray-300 p-4 shadow-md overflow-y-scroll">
        채팅 메시지들이 여기에 들어갈 것입니다
      </div>
      <div className="w-3/4 flex mt-4">
        <textarea
          className="flex-grow h-12 rounded-lg border-2 border-gray-300 p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-lg ml-2 shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
          onClick={handleSubmit}
        >
          전송
        </button>
      </div>
    </main>
  );
}
