// IBM Watson Assistant Web Chat script

window.watsonAssistantChatOptions = {
  integrationID: "a60f47a2-021d-4bed-8853-e233f436a117", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "df6f0526-05e0-426d-a58b-9b80755c205c", // The ID of your service instance.
  onLoad: async (instance) => {
    await instance.render(); // Render the chat interface

    // Check if geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        // Construct message object with location data
        const message = {
          input: { text: "My location is" },
          context: {
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          },
        };

        await instance.sendPayload(message);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
};

setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
