function MainCards(props) {
    return (
      <div className="hover:border-2 border-solid rounded border-gray-600 m-4 p-3 flex items-center flex-col">
        <h5>{props.day}</h5>
        <p>{Math.round(props.temp)}&deg;C</p>
        <p>{props.mood.charAt(0).toUpperCase() + props.mood.slice(1)}</p>
      </div>
    );
  }
  
  export default MainCards;
  