function List(){
const fruits = ["apple  ","orange  ","banana  ","coconut  "];
const listItems = fruits.map(fruit=><li>{fruit}</li>);
    return(
      <ol>
         {listItems}
      </ol> 
    );
}
export default List 