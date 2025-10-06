function List(){
const fruits = [{name:"apple",calories:95},{name:"orange",calories:185},{name:"banana",calories:159},{name:"coconut",calories:37}];

const listItems = fruits.map(fruit=><li key={fruit.name}>{fruit.name}</li>);
    return(
      <ol>
         {listItems}
      </ol> 
    );
}
export default List 