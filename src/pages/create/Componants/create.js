import "./create.scss";
import "../../../events";

let updateEvents = (event) => {
  event.preventDefault();
  console.log(event.target.name.value);
};

export default function Create() {
  return (
    <main className="Create-Container">
      <form id="newEvent" onSubmit={updateEvents}>
        <h1>Event Details</h1>
        <input type="text" name="event" placeholder="Event Name" />
        <input type="text" name="host" placeholder="Host Name" />

        <input type="datetime-local" name="state-time" />
        <input type="datetime-local" name="finish-time" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="event-photo" placeholder="Event Photo URL" />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
