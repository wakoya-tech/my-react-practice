function List(){
const fruits = ["apple  ","orange  ","banana  ","coconut  "];
const listItems = fruits.map(fruit=><li>fruit</li>);
    return(
      <h2>
         {listItems[2]}
      </h2> 
    );
}
export default List 