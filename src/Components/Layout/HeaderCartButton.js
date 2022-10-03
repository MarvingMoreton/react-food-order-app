import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

function HeaderCartButton(props) {
  const [btnIsHighlighted, SetBtnIsHighLighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    // Storing the item per item type, adding the new item.amount to the curNumber
    return curNumber + item.amount;
  }, 0);
  // reduce() method: Transform an array of data in a simple number

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    SetBtnIsHighLighted(true);
    // Put back the SetBtnIsHighLighted to false after 300 s (to remove the class bump so it get add/Remove at each add item)

    const timer = setTimeout(() => {
      SetBtnIsHighLighted(false);
    }, 300);

    //Cleanup function:
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
