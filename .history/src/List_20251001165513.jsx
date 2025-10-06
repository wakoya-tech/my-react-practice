function List(props) {
    const itemList = props.items;   // ✅ Correct: items is the array
    const category = props.category;
  
    const listItems = itemList.map(item => (
      <li key={item.id}>
        {item.name}: <b>{item.calories}</b>
      </li>
    ));
  
    return (
      <>
        <h3>{category}</h3>
        <ol>
          {listItems}
        </ol>
      </>
    );
  }
  
  export default List;
  