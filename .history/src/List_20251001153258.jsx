function List(props) {
    const fruits = [
      {id:1, name: "apple", calories: 95 },
      {id:2, name: "orange", calories: 185 },
      {id:3, name: "banana", calories: 159 },
      {id:4, name: "coconut", calories: 37 }
    ];
  
    const listItems = fruits.map(fruit =>
      <li key={fruit.id}>{fruit.name}: &nbsp;
      {fruit.calories}</li>
    );
  
    return (
      <ol>
        {listItems}
        <li>{props.name}</li>
      </ol>
    );
  }
  
  export default List;
  