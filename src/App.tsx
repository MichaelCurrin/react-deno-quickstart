/**
 * App module.
 */
import { React } from "../deps.ts";
import Counter from "./components/Counter.tsx";
import "./shim-jsx.ts";

export function App() {
  return <div>
    <link rel="stylesheet" href="/styles.css"></link>

    <div className="App">
      <header className="App-header">
        <h1>React Deno Quickstart ⚛️ 🦕 📦</h1>

        <h2>Starter for a React app built on Deno - including docs and CI</h2>

        <a href="https://github.com/MichaelCurrin/react-deno-quickstart">
          <img
            src="https://img.shields.io/static/v1?label=MichaelCurrin&message=react-deno-quickstart&color=blue&logo=github"
            alt="MichaelCurrin - react-deno-quickstart"
          />
        </a>
      </header>

      <Counter></Counter>
    </div>
  </div>;
}
