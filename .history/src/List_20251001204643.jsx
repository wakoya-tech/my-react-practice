import PropTypes from 'prop-types';
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
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">
          {listItems}
        </ol>
      </>
    );
  }
  List.PropTypes ={
    category:PropTypes.string,
    items:[],
  }
  List.defaultProps = {
    category: "category",
    items:PropTypes.arrayOf(PropTypes.({
      id:PropTypes.number,
                          name:PropTypes.string,
                          calories:PropTypes.number
    })),
  }
  export default List;
  