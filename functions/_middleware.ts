import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "ACME Support", email: "samuel@macleod.space" }]
    }
  ],
  from: {
    name: "ACME Support",
    email: "contact@coisirlunnainn.dev"
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  }
});
