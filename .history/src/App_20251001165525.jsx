import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 62 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 }
  ];

  return (
    <div>
      <List items={fruits} category="Fruits" />
    </div>
  );
}

export default App;
