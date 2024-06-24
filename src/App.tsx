import { Link } from "react-router-dom";

function App() {
  const handleClick = () => {
    window.gtag("event", "child_click");
  };
  return (
    <>
      <Link to={"/child"} onClick={handleClick}>
        child
      </Link>
    </>
  );
}

export default App;
