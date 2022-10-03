import "./create.scss";

export default function Create() {
  let eventData = {};

  let updateEvents = (event) => {
    event.preventDefault();

    eventData.eventName = event.target.event.value;
    eventData.hostName = event.target.host.value;
    eventData.startTime = event.target.startTime.value;
    eventData.finishTime = event.target.finishTime.value;
    eventData.address = event.target.address.value;
    eventData.image = event.target.eventURL.value;

    console.log(eventData);

    window.location.href = "/event";
  };

  return (
    <main className="Create-Container">
      <form id="newEvent" onSubmit={updateEvents}>
        <h1>Event Details</h1>
        <input type="text" name="event" placeholder="Event Name" />
        <input type="text" name="host" placeholder="Host Name" />

        <input type="datetime-local" name="startTime" />
        <input type="datetime-local" name="finishTime" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="eventURL" placeholder="Event Photo URL" />

        <input type="submit" value="Next" />
      </form>
    </main>
  );
}
