import { React } from "../../deps.ts";
const { useState } = React

/** Warning - this works great in a static production build but locally the click does nothing. **/
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
