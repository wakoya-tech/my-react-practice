function List(){
const fruits = ["apple  ","orange  ","banana  ","coconut  "];
const listItems = fruits.map(fruit*2=><li>{fruit}</li>);
    return(
      <h2>
         {listItems}
      </h2> 
    );
}
export default List 