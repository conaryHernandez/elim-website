import React, { useEffect, useState } from 'react';
import { Row, Select, Avatar } from 'antd';
import styles from './Churches.module.scss';
import ChurchCard from './components/ChurchCard';
import axios from 'axios';
import { strapiURL } from '../../constants';

export default function Churches() {
  const { Option } = Select;

  const [churchesData, setChurches] = useState([]);
  const [filteredChurches, setFilteredChurches] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getChurchesData();
    getDepartmentsData();
  }, []);

  const onDepartamentChange = (value) => {
    if (value === 'all') {
      setFilteredChurches(churchesData);
    } else {
      const filtered = churchesData.filter((church) => {
        return church.address.departamento.code === value;
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

  const getChurchesData = () => {
    axios
      .get(`${strapiURL}/iglesias`)
      .then((response) => {
        setChurches(response.data);
        setFilteredChurches(response.data);
      })
      .catch((error) => console.error(error));
  };

  const getDepartmentsData = () => {
    axios
      .get(`${strapiURL}/departamentos`)
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => console.error(error));
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
          {generateDepartmentsList(departments)}
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
