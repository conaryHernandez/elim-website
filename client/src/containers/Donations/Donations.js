import React, { useState, useEffect } from 'react';
import Paypal from './Paypal';
import { cdnPath } from '../../constants';
import {
  Form,
  Select,
  InputNumber,
  Button,
  Radio,
  List,
  Avatar,
  Tabs,
} from 'antd';
import styles from './Donations.module.scss';
import { accountsInfo } from './data';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Donations() {
  const [amount, setAmount] = useState(10);
  const [beneficiary, setBeneficiary] = useState('misionCristianaElim');
  const [purpose, setPurpose] = useState('ofrenda');
  const [isAccountInfoVisible, setIsAccountInfoVisible] = useState(false);

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
    product.beneficiary = value.target.value;
  };
  const getAccountsByType = (accounts, type) => {
    return accounts.filter((account) => account.type === type);
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
              name="beneficiario"
              label="Dirigida a:"
              rules={[
                { required: true, message: 'Porfavor seleccione una opcion' },
              ]}
            >
              <Radio.Group
                onChange={onBeneficiaryChange}
                defaultValue="elimCentral"
              >
                <Radio value="elimCentral">Elim Central</Radio>
                <Radio value="misionCristianaElim">Misión Cristiana Elim</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Propósito:"
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
                <Select.Option value="ayudasPorCovid">
                  Ayudas por Covid-19
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Monto (Dólares)"
              name="monto"
              rules={[
                { required: true, message: 'Porfavor ingrese una cantidad' },
              ]}
            >
              <InputNumber
                id="amount"
                min={1}
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
        </div>

        <div className="paypalWrapper">
          <Paypal product={product} />
        </div>
        <div className={styles.AccountsWrapper}>
          <Button
            onClick={() => setIsAccountInfoVisible(!isAccountInfoVisible)}
          >
            Transferencias o depósitos bancarios
          </Button>
        </div>
        {isAccountInfoVisible && (
          <div className={styles.accountsInfo}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Elim Central" key="1">
                <List
                  itemLayout="horizontal"
                  dataSource={getAccountsByType(accountsInfo, 'central')}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.img} />}
                        title={item.title}
                        description={
                          <div className={styles.accountDesc}>
                            <span className={styles.accountHolder}>
                              {item.description}
                            </span>
                            <h5 className={styles.accountNumber}>
                              {item.account}
                            </h5>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="Misión Cristiana Elim" key="2">
                <div className="container">
                  <List
                    itemLayout="horizontal"
                    dataSource={getAccountsByType(accountsInfo, 'mision')}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={item.img} />}
                          title={item.title}
                          description={
                            <div className={styles.accountDesc}>
                              <span className={styles.accountHolder}>
                                {item.description}
                              </span>
                              <h5 className={styles.accountNumber}>
                                {item.account}
                              </h5>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </TabPane>
            </Tabs>
            <strong className={styles.rtn}>RTN: 05019995144260</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donations;
