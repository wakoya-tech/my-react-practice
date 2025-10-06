function List(props) {
    const fruits = [
      {id: 1, name: "apple", calories: 95 },
      {id: 2, name: "orange", calories: 185 },
      {id: 3, name: "banana", calories: 159 },
      {id: 4, name: "coconut", calories: 37 }
    ];
        fruits.push({ id: 5, name: props.name, calories: props.calories });
  
fruits.sort((a,b)=> a.calories - b.calories);
    // Add wako into the same array

    // Sort all items (descending by name)
   // fruits.sort((a, b) => b.name.localeCompare(a.name));
  
    const listItems = fruits.map(fruit =>
      <li key={fruit.id}>
        {fruit.name}: {fruit.calories}
      </li>
    );
  
    return (
      <ol>
        {listItems}
      </ol>
    );
  }
  
  export default List;
  