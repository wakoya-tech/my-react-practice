import List from './List.jsx';

const vibe = { name: "wako",calories:23};

function App() {
  return (<>
  <List name={vibe.name} calories={vibe.calories} />
  </>
    
  );
}

export default App;
