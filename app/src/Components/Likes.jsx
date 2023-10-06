const MyList = (props) => {
  // console.log("likes props", props);
  const { listItem } = props;
  console.log("listItem", listItem);

  return (
    <ul>
      {listItem.map((item) => {
        return <li key={item.id}>{item.value}</li>;
      })}
    </ul>
  );
};
export default MyList;
