import React, { useState } from "react";
import Tabs from "./Tabs";
import HomePage from "./HomePage";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState("HOME");

  const displayTabContent = () => {
    switch (currentTab) {
      case "HOME":
        return <HomePage />;

      default:
        return <div>{currentTab}</div>;
    }
  };
  return (
    <div className="app">
      <div id="app-body">
        <Tabs setCurrentTab={setCurrentTab} />
        <div id="tab-content">
          <div id="portfolio-header">Jae Doherty, Software Engineer </div>
          {displayTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
