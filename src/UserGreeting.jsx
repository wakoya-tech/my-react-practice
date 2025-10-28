function UserGreeting(props)
{
      return (props.isLoggedIn ? <h2>welcome {props.username}</h2> : <h2>please log in to continue</h2>);
  }
  export default UserGreeting;
  
