import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request, locals }) => {
  return new Response(
    "This was a PUT!\n" + JSON.stringify(locals.runtime, null, 2)
  );
};
