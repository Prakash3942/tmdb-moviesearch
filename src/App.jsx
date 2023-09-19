import { useState } from "react";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <div>
        {movies.map((movieReq) => (
          <Moviebox />
        ))}
      </div>
    </>
  );
}

export default App;
