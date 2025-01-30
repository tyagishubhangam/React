import profilepic from "./assets/profilepic.jpeg"

function Card() {
    return(
        <div className="card">
            <img src={profilepic} alt="picture" />
            <h2 className="card-title">Card</h2>
            <p className="card-text">This is demo card for the react component </p>
        </div>
    )
    
}

export default Card;