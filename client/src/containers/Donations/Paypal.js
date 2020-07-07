import React, { useState, useRef, useEffect } from 'react';
import styles from './Donations.module.scss';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Paypal({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [payerInfo, setPayerInfo] = useState({});
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
                  value: document.getElementById('amount').value,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPayerInfo(order.payer);
          console.log(order);
          const scrollToElement = document.getElementById('amount');
          scrollToElement.scrollIntoView();
          setPaidFor(true);
        },
        onError: (err) => {
          const scrollToElement = document.getElementById('amount');
          scrollToElement.scrollIntoView();
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.beneficiary, product.price, product.purpose]);

  if (paidFor) {
    const { name } = payerInfo;
    return (
      <div className={styles.paypalSuccess}>
        <Result
          status="success"
          className={styles.ResulTitle}
          title={
            <h6>
              {name.given_name} {name.surname}, muchas gracias por tu aportación
              a {product.beneficiary}!
            </h6>
          }
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
