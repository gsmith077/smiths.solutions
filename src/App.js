import React from "react";
import { Route, Routes } from "react-router-dom";
import Bottom from "./components/bottom";
import Page from "./components/Page";
import Top from "./components/top";

function App() {
  return (
    <div className="App">
      <div id="main">
        <Top />
        <div id="index">
          <Routes>
            <Route
              exact
              path="/"
              element={<Page slug={"index"} title="Homepage" />}
            />
            
            <Route
              path="/:slug"
              element={({ match: { params } }) => <Page slug={params.slug} />}
            />

            {/* <Route
              path="/"
              element={<Page slug={"lost"} title="404" />}
            /> */}

          </Routes>
        </div>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
