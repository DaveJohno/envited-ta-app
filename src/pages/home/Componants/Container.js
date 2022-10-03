import "./Container.scss";

export default function Container() {
  return (
    <main className="Container">
      <header className="">
        <h1 className>
          Imagine if <br />
          <span className="snap-chat">Snapchat</span>
          <br /> had events.
        </h1>

        <p className="">
          Easily host and share events with your friends across any social
          media.
        </p>
      </header>

      <div className="image-one"></div>

      <a href="/create">
        <button className="create-btn">🎉 Create my event</button>
      </a>
    </main>
  );
}
