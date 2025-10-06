function List(props) {
   
        fruits.push({ id: 5, name: props.name, calories: props.calories });
  
   //fruits.sort((a,b)=> a.calories - b.calories);
   // fruits.sort((a, b) => b.name.localeCompare(a.name));
   //fruits.sort((a,b)=>b.calories-a.calories);
   //const localFruits = fruits.filter(fruit =>fruit.calories<100)
//   const Highcalfruits =fruits.filter((fruit=>fruit.calories > 100));
   const itemList =props;
   const category = props.category;
  // const listItems =itemList.map(item=><li key={item.id}>{item.name}:&nbsp;
   {
   <b>
   {item.calories}
   </b> 
   }</li>);
   
  
    return (
        <>
        <ol>
        {listItems}
      </ol>
      <h3>{category}</h3>
        </>
      
    );
  }
  
  export default List;
  