import { useState } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Büşra");

  const users = [
    { id: 1, name: "Ayça", age: 26, city: "Rize" },
    { id: 2, name: "Selin", age: 25, city: "Istanbul" },
  ];

  return (
    <>
      <Users name={name} city="Istanbul" age={25} />
      <br />

      <input value={name} onChange={(e) => setName(e.target.value)} />

      <br />
      <br />
      {users.map((user) => (
        <Users key={user.id} name={user.name} age={user.age} city={user.city} />
      ))}
      <br />
      <h2>Counter: {count}</h2>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ width: 100, height: 30, backgroundColor: "red" }}
        >
          Increase
        </button>
      </div>
      <br />
      <div>
        <button
          onClick={() => setCount(count - 1)}
          style={{ width: 100, height: 30, backgroundColor: "blue" }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
