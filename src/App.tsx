/**
 * App module.
 *
 * Note - shim must come before components so it can be applied there.
 */
import { React } from "../deps.ts";
import "./shims-react.ts";
import Counter from "./components/Counter.tsx";
import GHBadge from "./components/GHBadge.tsx";

export function App() {
  return <div>
    <link rel="stylesheet" href="styles.css"></link>

    <div className="App">
      <header className="App-header">
        <h1>React Deno Quickstart ⚛️ 🦕 📦</h1>

        <h2>
          Starter template for a React app built on Deno - including docs and CI
        </h2>

        <GHBadge username="MichaelCurrin" repoName="react-deno-quickstart" />
      </header>

      <Counter></Counter>
    </div>
  </div>;
}
