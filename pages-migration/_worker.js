export default {
  fetch(req) {
    const url = new URL(request.url);
    url.hostname = "coisirlunnainn.dev";
    return fetch(url.toString(), request);
  }
}
