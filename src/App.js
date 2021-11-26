import React from "react";
import { NewsListItem } from "./components/NewsListItem";
import { News } from "./pages/News";

function App() {
  return (
    <div className="App">
      <News />
      <NewsListItem />
    </div>
  );
}

export default App;
