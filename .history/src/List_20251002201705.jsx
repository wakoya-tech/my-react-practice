import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map(item => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired
    })
  )
};


List.defaultProps = {
  category: "Category",
  items: []
};

export default List;
