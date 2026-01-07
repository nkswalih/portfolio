export default async function handler(req, res) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/models");
    const data = await response.json();
    res.status(200).json({ count: data.data?.length || 0 });
  } catch {
    res.status(500).json({ error: "Connection failed" });
  }
}
