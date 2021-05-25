/**
 * App module.
 *
 * Note - shims must come **before** components so it can be applied there. Update: this doesn't
 * seem to matter anymore.
 */
import { React } from "../deps.ts";
import Counter from "./components/Counter.tsx";
import GHBadge from "./components/GHBadge.tsx";
import "./shims-react.ts";

export function App() {
  return (
    <div>
      <link rel="stylesheet" href="styles.css"></link>

      <div className="App">
        <header className="App-header">
          <h1>React Deno Quickstart ⚛️ 🦕 📦</h1>

          <p>
            Starter template for a React app built on Deno - including docs and
            CI
          </p>

          <GHBadge username="MichaelCurrin" repoName="react-deno-quickstart" />
        </header>

        <Counter />
      </div>
    </div>
  );
}
