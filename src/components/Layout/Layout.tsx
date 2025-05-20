import * as React from "react";
import Headers from "../../common/Headers/Headers";
import "./Layout.style.css";

const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="">
        <Headers />
        {children}
        <button
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            zIndex: 99,
            padding: "12px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s ease-in",            
          }}
          className="hover"
        >
          <i className="fa fa-arrow-up" aria-hidden="true" ></i>
        </button>
      </div>
    </>
  );
};

export default Layout;
