import "./App.css";
import Container from "./pages/home/Componants/Container";
import Create from "./pages/create/Componants/create";
import Event from "./pages/event/event";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let eventData = {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Container />} />
          <Route path="create" element={<Create />} />
          <Route path="event" element={<Event />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
