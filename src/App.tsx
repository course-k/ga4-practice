import { Link } from "react-router-dom";

function App() {
  const handleClick = () => {
    window.gtag("event", "child_click", {
      event_category: "navigation",
      event_label: "Child Page Link",
    });
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
