/**
 * App module.
 */
import { React } from "../deps.ts";
import Counter from "./components/Counter.jsx"

export function App() {
  return <div>
    <link rel="stylesheet" href="/styles.css"></link>

    <h1>React Deno Quickstart ⚛️ 🦕 📦</h1>

    <a href="https://github.com/MichaelCurrin/react-deno-quickstart">
      <img
        src="https://img.shields.io/static/v1?label=MichaelCurrin&message=react-deno-quickstart&color=blue&logo=github"
        alt="MichaelCurrin - react-deno-quickstart"
      />
    </a>

    <h2>Hello, World!</h2>

    <Counter></Counter>
  </div>;
}
