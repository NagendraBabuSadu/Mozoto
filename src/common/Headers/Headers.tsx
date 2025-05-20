import * as React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../../context/useAuthContext";
import loginIcon from "../../assets/login.gif";
import logoutIcon from "../../assets/logout.gif";
import cartIcon from "../../assets/cart.gif";
import type { ICartItem } from "../../types";
import "./HeadersStyle.css";
import ButtonTheme from "../../components/ButtonTheme";

interface IHeadersProps {}

const Headers: React.FunctionComponent<IHeadersProps> = () => {
  const { carts }: any = useSelector((state: any) => state.allCart);

  const totalItems = (carts as ICartItem[]).reduce(
    (total, item) => total + item.qnty,
    0
  );

  const { logout, login, user } = useUserAuth();
  const [scrolled, setScrolled] = React.useState(false);
  const isLoginSuccess = !!user;
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        className={`custom-navbar ${
          scrolled ? "scrolled" : ""
        } justify-baseline `}
        expand="lg"
      >
        <Container className="d-flex">
          <div>
            <NavLink to="/" className="text-decoration-none ">
              <h3 style={{ color: "red" }}>Mozoto</h3>
            </NavLink>
          </div>
          <div className="d-flex" style={{ gap: "10px" }}>
            <NavLink to="/cart" className="header-icon">
              <div id="ex4" title="Cart">
                <span
                  className="p1 fa-stack has-badge fa-2x "
                  data-count={totalItems}
                  title="Cart"
                >
                  <img
                    src={cartIcon}
                    alt=""
                    width={40}
                    height={40}
                    className="radius rounded-circle"
                    style={{
                      filter: "none",
                      mixBlendMode: "normal",
                    }}
                  />
                </span>
              </div>
            </NavLink>

            {!isLoginSuccess ? (
              <>
                <NavLink to="/login" className="header-icon">
                  <div title="Login">
                    <button
                      className="btn btn-primary rounded-circle m-0 flex items-center justify-center"
                      onClick={() => login}
                      title="login"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img
                        src={loginIcon}
                        alt="loginIcon"
                        className="rounded-circle"
                        style={{
                          filter: "brightness(1) invert(1)",
                          mixBlendMode: "screen",
                          width: "25px",
                          marginLeft: "-5px",
                        }}
                      />
                    </button>
                  </div>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/user-profile" className="header-icon">
                  <div title="User Profile">
                    <span className="fa-stack fa-2x" style={{ width: "0.8em" }}>
                      <i
                        className="fa fa-user"
                        style={{
                          color: hover ? "red" : "blueviolet",
                          transition: "color: 0.3s",
                        }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      ></i>
                    </span>
                   
                  </div>
                </NavLink>
                <NavLink to="/logout" className="header-icon">
                  <div title="logout">
                    <button
                      className="btn btn-danger rounded-circle flex items-center justify-center"
                      onClick={logout}
                      title="Logout"
                      style={{
                        backgroundColor: "red",
                        borderColor: "red",
                        width: "40px",
                      }}
                    >
                      <img
                        src={logoutIcon}
                        alt="logoutIcon"
                        style={{
                          filter: "brightness(1) invert(1)",
                          mixBlendMode: "screen",
                          width: "25px",
                          marginLeft: "-5px",
                        }}
                      />
                    </button>
                  </div>
                </NavLink>
              </>
            )}
            <ButtonTheme />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
