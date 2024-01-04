import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "ACME Support", email: "samuel@macleod.space" }]
    }
  ],
  from: {
    name: "ACME Support",
    email: "choir@macleod.space"
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  }
});
