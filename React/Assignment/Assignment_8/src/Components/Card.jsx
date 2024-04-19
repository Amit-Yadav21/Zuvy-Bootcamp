function Card({ contact }) {
    return (
      <div className="card">
        <div className="top">
          <h2>{contact.name}</h2>
          <img src={contact.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </div>
    );
  }
  
  export default Card;
  