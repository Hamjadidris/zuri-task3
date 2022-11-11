import star from '../../assest/Star.svg'
const CardInterface = (props) => {
  return (
        <div className="card">
            <img alt="nft" src={props.src} className="nft-image"/>
            <section className="card-info1">
              <p>{props.location}</p>
              <p>{props.amount}</p>
            </section>
            <section className="card-info2">
              <p>{props.distance}</p>
              <p>{props.availability}</p>
            </section>
            <section className="card-info3">
              <img alt="star" src={star}/>
              <img alt="star" src={star}/>
              <img alt="star" src={star}/>
              <img alt="star" src={star}/>
              <img alt="star" src={star}/>
            </section>
        </div>
  )
}

export default CardInterface