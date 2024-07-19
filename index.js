const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1829745",
  key: "80ef6453b8337da1b34a",
  secret: "aca5f5796403914cfd5e",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});
