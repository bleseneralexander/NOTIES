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


var events = new List<Event>();
// count can be anything between 1 and 10000
for (int i = 1; i <= count; i++)
{
    // creating a sample list of events
    events.Add(new Event
    {
        Channel = string.Format("batch-channel-{0}", i),
        EventName = "batch-event",
        Data = new
        {
            Channel = string.Format("batch-channel-{0}", i),
            Event = "batch-event",
            Message = string.Format("{0} - sample message", i)
        {
    });
}
var result = new List<HttpStatusCode>();
int chunkSize = 10;
int totalChunks = (int)Math.Ceiling((double)events.Length / chunkSize);
for (int i = 0; i < totalChunks; i++)
{
    var eventsChunk = events.Skip(i * chunkSize).Take(chunkSize).ToArray();
    // publishing event lists of size 10
    var chunkResult = await pusher.TriggerAsync(eventsChunk);
    result.Add(chunkResult.StatusCode);
}
