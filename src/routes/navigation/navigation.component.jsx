import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";

import { UserContext } from "../../components/context/user.context";

import { ReactComponent as OtakuLogo } from "../../assets/logo.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../components/context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
 const {isCartOpen} = useContext(CartContext);

 
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <OtakuLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link " onClick={signOutUser}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
