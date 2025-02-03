export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = "london-gaelic-choir.c-isir-lunnainn.workers.dev";
    return fetch(url.toString(), request);
  }
}
