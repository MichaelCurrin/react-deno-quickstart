import { React } from "../../deps.ts";

/** Warning - this works great in a static production build but locally the click does nothing. Not
 * even with console.log instead. **/
export default function Counter() {
  // @ts-ignore Function is a named export but TS can't find it.
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
