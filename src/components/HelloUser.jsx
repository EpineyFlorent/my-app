function HelloUser(props) {
  return (
    <div>
      hello {props.username} like {props.color}
    </div>
  );
}

// function HelloUser( {username} ) {
//     return <div>hello {username}</div>;
//   }

export default HelloUser;
