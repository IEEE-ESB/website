// src/app/api/proxy/route.js

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("target");

  if (!target) {
    return new Response(JSON.stringify({ error: "Missing target URL" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const res = await fetch(decodeURIComponent(target));
    const contentType = res.headers.get("content-type") || "";

    const data = contentType.includes("application/json")
      ? await res.json()
      : await res.text();

    return new Response(
      contentType.includes("application/json") ? JSON.stringify(data) : data,
      {
        status: res.status,
        headers: {
          "Content-Type": contentType,
        },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
