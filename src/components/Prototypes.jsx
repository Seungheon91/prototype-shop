import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <main>
      <div className="prototypes">{prototypes.map(prototype => {
        const { id, thumbnail, title, desc, pieUrl, price } = prototype;
        const click = () => {
          addToOrder(id);
        }
        return <div className="prototype" key={id}>
          <a href={pieUrl} target="_blank" rel="noreferrer">
            <div style={{ padding: "25px 0 33px 0" }}>
              <video src={thumbnail}
                autoPlay
                loop
                playsInline
                className="prototype__artwork prototype__edit"
                style={{ objectFit: "contain" }} />
            </div>
          </a>
          <div className="prototype__body">
            <div className="prototype__title">
              <div className="btn btn--primary float--right" onClick={click}>
                <i className="icon icon--plus"></i>
              </div>
              {title}
            </div>
            <p className="protype__price">$ {price}</p>
            <p className="protype__desc">{desc}</p>
          </div>
        </div>
      })}
      </div>
    </main>
  );
}