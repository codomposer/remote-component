/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */
import { RemoteComponent } from "@paciolan/remote-component";
import React from "react";
import { createRoot } from "react-dom/client";
import LocalComponent from "./index";

// different paths for localhost vs s3
const url =
  process.env.NODE_ENV === "development" ? "/dist/main.js" : "main.js";

const node = document.getElementById("app") as HTMLElement;

const Component: React.FC<{ name: string }> = props =>
  process.env.NODE_ENV === "development" ? (
    <LocalComponent {...props} />
  ) : (
    <RemoteComponent url={url} {...props} />
  );

const App: React.FC = () => (
  <>
    <Component name="Webpack" />
  </>
);

// Use createRoot instead of ReactDOM.render
const root = createRoot(node);
root.render(<App />);
