import type { APIRoute } from "astro";
export const prerender = false;

export const PUT: APIRoute = async ({ request, params }) => {
  return Response.json(request.headers);
  const validatedIdentity = await fetch(
    `https://coisirlunnainn.cloudflareaccess.com/cdn-cgi/access/get-identity`,
    request
  );
  if (!validatedIdentity.ok) {
    return new Response("FAIL", {
      status: 401
    });
  }

  const token = import.meta.env.GH_PAT;
  const section = params.section;

  const baseUrl = `https://api.github.com/repos/coisir-lunnainn/website`;
  const json = await request.json();
  const blob = await fetch(`${baseUrl}/git/blobs`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "London Gaelic Choir website updater"
    },
    body: JSON.stringify({
      content: json.content,
      encoding: "utf-8"
    }),
    method: "POST"
  }).then((r) => r.json());

  const branch = await fetch(`${baseUrl}/branches/cms`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "London Gaelic Choir website updater"
    }
  }).then((r) => r.json());

  const tree = await fetch(`${baseUrl}/git/trees`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "London Gaelic Choir website updater"
    },
    body: JSON.stringify({
      base_tree: branch.commit.sha,
      tree: [
        {
          path: `src/content/sections/${section}.md`,
          mode: "100644",
          type: "blob",
          sha: blob.sha
        }
      ]
    }),
    method: "POST"
  }).then((r) => r.json());
  const commit = await fetch(`${baseUrl}/git/commits`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "London Gaelic Choir website updater"
    },
    body: JSON.stringify({
      message: `Modify ${section}`,
      tree: tree.sha,
      parents: [branch.commit.sha],
      author: {
        name: "CMS Edit",
        email: "user@coisirlunnainn.org",
        date: new Date().toISOString()
      }
    }),
    method: "POST"
  }).then((r) => r.json());
  await fetch(`${baseUrl}/git/refs/heads/cms`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "London Gaelic Choir website updater"
    },
    body: JSON.stringify({ sha: commit.sha, force: false }),
    method: "PATCH"
  });
  return new Response("OK", {
    status: 200
  });
};
