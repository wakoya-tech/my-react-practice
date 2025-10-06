function UserGreeting(props){
    return(
        <>
        if(props.isLoggedIn){
            return <h2>welcome {props.username}</h2>
        }
        </>
    )
}
export default UserGreeting