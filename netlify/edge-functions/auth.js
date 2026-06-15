export default async (request, context) => {
  const ok = btoa("borihara:3511");
  const got = request.headers.get("authorization") || "";
  if (got === "Basic " + ok) {
    return context.next();
  }
  return new Response("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": "Basic" },
  });
};

export const config = { path: "/*" };
