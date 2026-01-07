// Simple proxy function to avoid CORS issues
export const callOpenRouter = async (messages) => {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Swalih Portfolio'
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-distill-qwen-32b:free",
        messages: messages,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "No response from AI";
  } catch (error) {
    console.error('OpenRouter error:', error);
    throw error;
  }
};