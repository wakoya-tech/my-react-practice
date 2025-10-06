import List from './List.jsx';

const vibe = { name: "wako",calories: 23};

function App() {
  const fruits = [
    {id: 1, name: "apple", calories: 95 },
    {id: 2, name: "orange", calories: 185 },
    {id: 3, name: "banana", calories: 159 },
    {id: 4, name: "coconut", calories: 37 }
  ];
  return (<>
  <List items={fruits}  category="fruits"name={vibe.name} calories={  vibe.calories} />
  </>
    
  );
}

export default App;
