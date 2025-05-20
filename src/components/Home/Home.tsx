import * as React from "react";
import "./homeStyle.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "../../data/CardData";
import { useDispatch, useSelector } from "react-redux";
import { searchItems } from "../../redux/features/filterItemsSlice";
import type { RootState } from "../../redux/app/store";
import type { ICartItem } from "../../types";
import { addToCart } from "../../features/Cart/cartSlice";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const [cardsData] = React.useState(CardsData);
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredItems = useSelector(
    (state: RootState) => state.filterItemsReducer.filteredItems
  );
  const [scrolled, setScrolled] = React.useState(false);
  const dispatch = useDispatch();
  const send = (e: ICartItem) => {
    dispatch(addToCart(e));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(searchItems(value));
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="item_section mt-4 container bg-slate-700">
        <h2>Food Menu</h2>
        <form className={`search ${scrolled ? "scrolled" : ""}  flex`}>
          <input
            type="text"
            placeholder="Search the Item"
            className="py-2 border-bottom border border-dark"
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: "100%",
              borderRadius: "20px",
              paddingLeft: "15px",
              caretColor: "red",
              boxShadow: "0px 0px 5px",
            }}
          />
        </form>

        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {(searchTerm ? filteredItems : cardsData).map((card) => {
            return (
              <Card
                key={card.id}
                style={{ width: "18rem" }}
                className="hove mb-4"
              >
                <Card.Img variant="top" className="cd" src={card.imgdata} />
                <div className="card_body">
                  <div className="upper_data d-flex  justify-content-between align-items-center">
                    <h4 className="mt-2">{card.dish}</h4>
                    <span>{card.rating}&nbsp;★</span>
                  </div>
                  <div className="lower_data d-flex  justify-content-between ">
                    <h5 className="mt-2">{card.address}</h5>
                    <span>₹&nbsp;{card.price}</span>
                  </div>
                  <div className="extra"></div>
                  <div className="last_data d-flex  justify-content-between align-items-center">
                    <img src={card.arrimg} alt="" className="limg" />
                    <Button
                      style={{
                        width: "150px",
                        backgroundColor: "#ff3054",
                        border: "none",
                      }}
                      variant="outline-light"
                      className="mt-2 mb-2"
                      onClick={() => send(card)}
                    >
                      Add to Cart
                    </Button>
                    <img
                      src={card.delimg}
                      alt=""
                      style={{ width: "40px", height: "30px" }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
