import { NextRequest } from "next/server";
import OpenAI from "openai";

const OPENAI_SECRET_KEY = process.env.OPEN_AI_SECRET_KEY;

export const POST = async (request: NextRequest) => {
  const { content } = await request.json();

  const openai = new OpenAI({
    apiKey: OPENAI_SECRET_KEY,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "너는 나와 7년동안 만난 친구야 친절한 답변을 기대할게",
      },
      { role: "user", content },
    ],
    model: "gpt-3.5-turbo",
  });

  const message = chatCompletion.choices[0].message.content;

  return Response.json({ message });
};
