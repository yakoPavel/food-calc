import React from "react";

import { AppProviders } from "./providers";

import "./styles/index.scss";

export const App = () => {
  return (
    <AppProviders>
      <div>App component</div>
    </AppProviders>
  );
};
