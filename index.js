const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1829745",
  key: "80ef6453b8337da1b34a",
  secret: "aca5f5796403914cfd5e",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("MYCHANNEL", "MYEVENT", {
  message: "This Is A Notification"
});



using PusherServer;

var options = new PusherOptions();
options.Cluster = "APP_CLUSTER";
var pusher = new Pusher("APP_ID", "APP_KEY", "APP_SECRET", options);

ITriggerResult result = await pusher.TriggerAsync(
  new string[]{"my-channel-1", "my-channel-2", "my-channel-3"},
  "MYEVENT",
  new { message: "This Is A Notification" });
