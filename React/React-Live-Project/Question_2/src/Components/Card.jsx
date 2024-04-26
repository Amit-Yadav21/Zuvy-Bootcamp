function Card({ title, content }) {
  return (
    <div className='cardbgColor'>
      <h3 className='titleClass'>{title}</h3>
      <p className='contentClass'>{content}</p>
    </div>
  );
}

export default Card;