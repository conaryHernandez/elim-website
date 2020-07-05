import React, { useState, useRef, useEffect } from 'react';

export default function Paypal({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `${product.beneficiary} por concepto de ${product.purpose}`,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.beneficiary, product.price, product.purpose]);

  if (paidFor) {
    return (
      <div>
        <h1>Congrats, you just bought {product.beneficiary}!</h1>
        <img
          alt={product.beneficiary}
          src="https://elim.nyc3.cdn.digitaloceanspaces.com/v2/images/central/cards-slider/alabanza-card.jpg"
        />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <div ref={paypalRef} />
    </div>
  );
}
