import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 62 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 }
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calories: 95 },
    { id: 7, name: "celery", calories: 62 },
    { id: 8, name: "carrots", calories: 105 },
    { id: 9, name: "corn", calories: 159 }
  ];
  return (
    <div>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="vegetables" />
    </div>
  );
}

export default App;
