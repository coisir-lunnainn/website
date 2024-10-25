export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = "coisirlunnainn.dev";
    return fetch(url.toString(), request);
  }
}
