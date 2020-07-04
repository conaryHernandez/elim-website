import React, { useEffect, useState } from 'react';
import { Row, Select } from 'antd';
import styles from './Churches.module.scss';
import logo from '../../assets/img/home/elim-logo-2.png';
import { departaments } from '../Contact/departamentsData';
import { churches } from '../Contact/churchesData';
import ChurchCard from './components/ChurchCard';

export default function Churches() {
  const { Option } = Select;

  const [churchesData, setChurches] = useState(churches);
  const [filteredChurches, setFilteredChurches] = useState(churchesData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onDepartamentChange = (value) => {
    if (value === 'all') {
      setFilteredChurches(churchesData);
    } else {
      const filtered = churchesData.filter((church) => {
        return church.address.deptoCode === value;
      });
      setFilteredChurches(filtered);
    }
  };

  const onBlur = () => {
    console.log('blur');
  };

  const onFocus = () => {
    console.log('focus');
  };

  const onSearch = (val) => {
    console.log('search:', val);
  };

  const generateChurchesCardList = (data) => {
    return data.map((church, index) => (
      <ChurchCard key={index} churchData={church} />
    ));
  };
  const generateDepartmentsList = (data) => {
    return data.map((depto) => <Option key={depto.code}>{depto.name}</Option>);
  };
  return (
    <div id={styles.Churches} className="container">
      <div className={styles.locationsWrapper}>
        <h2>Iglesias en el país</h2>

        <Select
          showSearch
          style={{ width: 320, marginBottom: '2rem', color: '#000' }}
          placeholder="Elige un departamento"
          optionFilterProp="children"
          onChange={onDepartamentChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="all">Todas</Option>
          {generateDepartmentsList(departaments)}
        </Select>
      </div>
      <div className={styles.churchesWrapper}>
        <Row gutter={18} justify="center">
          {generateChurchesCardList(filteredChurches)}
        </Row>
      </div>
    </div>
  );
}
