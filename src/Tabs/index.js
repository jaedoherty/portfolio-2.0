import React from "react";
import "./Tabs.css";

const TABS = ["HOME", "RESUME", "PROJECTS", "CONTACT ME"];

function Tabs({setCurrentTab}) {
  return (
    <div id="tabs-container">
      {TABS.map((tab, i) => (
        <div
          className="tab-body"
          key={TABS[i]}
          onClick={(e) =>( 
            setCurrentTab(e.currentTarget.innerText)
          )}
        >
          <h4 className="tabs-text">{tab}</h4>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
