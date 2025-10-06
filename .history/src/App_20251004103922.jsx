// App.jsx
import { useState } from 'react';
import CarList from './CarList.jsx';


function App() {
  const [CarList,setCarYear]=useState([]);
  return (
<CarList/>
  );
}
export default App;
