import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
export const prerender = false;
export const GET: APIRoute = ({ request, locals }) => {
  const client_id = env.GITHUB_CLIENT_ID as string;

  try {
    const redirectUrl = new URL("https://github.com/login/oauth/authorize");
    redirectUrl.searchParams.set("client_id", client_id);
    redirectUrl.searchParams.set(
      "redirect_uri",
      "https://www.coisirlunnainn.org/api/callback"
    );
    redirectUrl.searchParams.set("scope", "repo user");
    redirectUrl.searchParams.set(
      "state",
      crypto.getRandomValues(new Uint8Array(12)).join("")
    );
    return Response.redirect(redirectUrl.href, 301);
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : String(error);
    return new Response(message, {
      status: 500
    });
  }
};
