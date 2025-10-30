// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { messages, systemPrompt } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ GEMINI_API_KEY không được cấu hình");
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured. Vui lòng thêm vào .env.local" },
        { status: 500 }
      );
    }

    // Lấy message cuối cùng từ user
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    const userQuestion = lastMessage.content;

    // Xây dựng prompt với system instruction
    const fullPrompt = `${systemPrompt}\n\nUser: ${userQuestion}`;

    // Gọi Gemini API
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: fullPrompt,
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
      }),
    });

    // Kiểm tra phản hồi từ API
    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Gemini API Error:", errorData);
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Invalid API Key. Kiểm tra GEMINI_API_KEY trong .env.local" },
          { status: 401 }
        );
      }
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Vui lòng thử lại sau." },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { error: `API Error: ${errorData.error?.message || "Unknown error"}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Kiểm tra phản hồi có hợp lệ không
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      console.error("❌ Invalid response structure:", data);
      return NextResponse.json(
        { error: "Invalid response from Gemini API" },
        { status: 500 }
      );
    }

    const assistantMessage = data.candidates[0].content.parts[0].text;

    return NextResponse.json({
      response: assistantMessage,
    });
  } catch (error: any) {
    console.error("❌ Chat API Error:", error);
    return NextResponse.json(
      { 
        error: `Failed to process chat request: ${error?.message || "Unknown error"}`,
        details: error?.toString(),
      },
      { status: 500 }
    );
  }
}