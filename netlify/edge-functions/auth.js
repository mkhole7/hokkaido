export default async (request, context) => {
  const USER = "borihara";
  const PASS = 3511";

  const auth = request.headers.get("authorization");
  const expected = "Basic " + btoa(USER + ":" + PASS);

  if (auth === expected) {
    return context.next();
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Hokkaido"',
    },
  });
};

export const config = { path: "/*" };
