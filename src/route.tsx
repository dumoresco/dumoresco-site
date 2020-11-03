import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const Routes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
};

export default Routes;
