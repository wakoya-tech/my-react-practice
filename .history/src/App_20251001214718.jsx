import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 62 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 }
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 95 },
    { id: 7, name: "Celery", calories: 62 },
    { id: 8, name: "Carrots", calories: 105 },
    { id: 9, name: "Corn", calories: 159 }
  ];

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
    </>
  );
}

export default App;
