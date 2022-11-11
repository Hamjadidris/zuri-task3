import star from "../../assest/Star.svg";
const CardInterface = (props) => {
  return (
    <div className="card">
      <img alt="nft" src={props.src} className="nft-image" />
      <section className="card-info1">
        <p>Desert king</p>
        <p>1MBT per night</p>
      </section>
      <section className="card-info2">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </section>
      <section className="card-info3">
        <img alt="star" src={star} />
        <img alt="star" src={star} />
        <img alt="star" src={star} />
        <img alt="star" src={star} />
        <img alt="star" src={star} />
      </section>
    </div>
  );
};

export default CardInterface;
