import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import handleSumTotal from '../utils/handleSumTotal';
import MetaHead from '../components/MetaHead';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };
  /* // LO MUEVO A UTILS E INTEGRO DE OTRA MANERA ... //
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  } */
  return (
    <>
      <MetaHead
        title="Checkout"
        description="Checkout del pago"
        image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
        url="https://platzi-conf-merch-react.web.app/"
      />
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de pedidos:</h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}
          {cart.map((item) => (
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
