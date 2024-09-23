import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App";

function Main() {
  return (
    <div className="Main">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;