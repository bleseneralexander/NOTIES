const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1829745",
  key: "80ef6453b8337da1b34a",
  secret: "aca5f5796403914cfd5e",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("MYCHANNEL", "MYCHANNEL2", "MYCHANNEL3", "MYEVENT", {
  message: "This Is A Notification"
});



using PusherServer;

var options = new PusherOptions();
options.Cluster = "APP_CLUSTER";
var pusher = new Pusher("MYCHANNEL", "MYEVENT", PusherOptions());

ITriggerResult result = await pusher.TriggerAsync(
  new string[]{"MYCHANNEL", "MYCHANNEL2", "MYCHANNEL3"},
  "MYEVENT",
  
  new TriggerAsync { message: "This Is A Notification" });
