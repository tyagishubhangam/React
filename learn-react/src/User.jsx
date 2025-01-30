

function User(props) {
    const loggedIn = <h2 className="logged-in">Welcome {props.name}</h2>;
    const notLoggedIn = <h2 className="not-logged-in">Pls loggin to proceed</h2>;

    return(
        props.isLoggedIn ? loggedIn 
                        : notLoggedIn
    )
    
}
export default User;