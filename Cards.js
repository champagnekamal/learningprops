import './Cards.css'

function Cards(props) {
return <div>
  <h2>{props.name}</h2>
  <img src={props.src} width='500px' height='350px' />
  <p>College - {props.college}</p>
  <p>Phone number - {props.number}</p>

  </div>
}





export default Cards;