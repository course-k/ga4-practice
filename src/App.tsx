import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"/child"} onClick={() => gtag("event", "child_click")}>
        child
      </Link>
    </>
  );
}

export default App;
