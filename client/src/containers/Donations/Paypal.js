import React, { useState, useRef, useEffect } from 'react';
import styles from './Donations.module.scss';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

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
      <div className={styles.paypalSuccess}>
        <Result
          status="success"
          title={`Muchas gracias por tu aportación a ${product.beneficiary}!`}
          subTitle="Tu aportación fue enviada y recibida exitosamente!"
          extra={[
            <Link className={`${styles.successBtn} regular-btn`} to="/">
              Ir a inicio
            </Link>,
          ]}
        />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, Un error ha ocurrido! {error.message}</div>}
      <div ref={paypalRef} />
    </div>
  );
}
