import React, { useState, useEffect } from 'react';
import Paypal from './Paypal';
import { cdnPath } from '../../constants';
import { Form, Select, InputNumber, Button } from 'antd';
import styles from './Donations.module.scss';

function Donations() {
  const [amount, setAmount] = useState(10);
  const [beneficiary, setBeneficiary] = useState('misionCristianaElim');
  const [purpose, setPurpose] = useState('ofrenda');

  const product = {
    price: amount,
    purpose: purpose,
    beneficiary: beneficiary,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onAmountChange = (value) => {
    product.price = value;
  };

  const onPurposeChange = (value) => {
    product.purpose = value;
  };

  const onBeneficiaryChange = (value) => {
    product.beneficiary = value;
  };

  return (
    <div className={styles.donations}>
      <div className="mainBanner">
        <img
          src={`${cdnPath}/v2/images/generosidad/corazones-generosos-bg.jpg`}
          alt="Corazones Generosos"
        />
      </div>
      <div className={`${styles.introFidelidad}`}>
        <div className="container">
          <h2 className="section-title">Dios ha sido fiel</h2>
          <p>
            A lo largo de los más de 40 años de Misión Cristiana Elim Honduras,
            hemos visto la fidelidad de Dios en tantas situaciones. Podemos
            entonces decir confiadamente que las misericordias del SEÑOR jamás
            terminan, pues nunca fallan sus bondades; son nuevas cada mañana;
            !grande es tu fidelidad!
          </p>
        </div>
      </div>

      <div className={styles.formWrapper}>
        <div className="container">
          <h3>Canales de aportación</h3>

          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
          >
            <Form.Item
              label="Dirigida a:"
              name="beneficiario"
              rules={[
                { required: true, message: 'Porfavor seleccione una opcion' },
              ]}
            >
              <Select defaultValue={beneficiary} onChange={onBeneficiaryChange}>
                <Select.Option value="misionCristianaElim">
                  Misión Cristiana Elim
                </Select.Option>
                <Select.Option value="elimCentral">Elim Central</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Seleccione un Propósito:"
              name="propósito"
              rules={[
                { required: true, message: 'Porfavor seleccione una opcion' },
              ]}
            >
              <Select defaultValue={purpose} onChange={onPurposeChange}>
                <Select.Option value="ofrenda">Ofrenda</Select.Option>
                <Select.Option value="diezmo">Diezmo</Select.Option>
                <Select.Option value="proyeccion">
                  Proyección social
                </Select.Option>
                <Select.Option value="proTerreno">Pro terreno</Select.Option>
                <Select.Option value="enfermosCOVID">
                  Ayudas por Covid-19
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Monto (USD)"
              name="monto"
              rules={[
                { required: true, message: 'Porfavor ingrese una cantidad' },
              ]}
            >
              <InputNumber
                min={5}
                defaultValue={amount}
                onChange={onAmountChange}
              />
              <InputNumber
                defaultValue={100}
                min={0}
                max={100}
                className="hidden"
                formatter={(value) => `${value}USD`}
              />
            </Form.Item>
          </Form>
          <div className="paypalWrapper">
            <Paypal product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donations;
