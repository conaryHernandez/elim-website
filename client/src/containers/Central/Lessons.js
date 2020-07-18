import React, { useEffect } from 'react';
import { cdnPath, elimAPI } from '../../constants';
import styles from './Lessons.module.scss';
import axios from 'axios';
import { useState } from 'react';
import { Row, Col, Modal } from 'antd';

export default function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [isModalVideoVisible, setIsModalVideoVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    getLessons('PLB_odl26rwmWtdNUJPQbT2ERvJuwmD4ei');
  }, []);

  const getLessons = (playListId) => {
    axios
      .get(`${elimAPI}/playlists/${playListId}`)
      .then((response) => {
        setLessons(response.data.videos);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const generateLessonCardList = (lessons) => {
    return lessons.map((lesson, index) => {
      return (
        <div className={styles.lessonCard} key={index}>
          <Row justify="center" align="middle">
            <Col xs={24} sm={8} md={6} lg={4}>
              <img
                onClick={() =>
                  handleVideoModal(true, lesson.snippet.resourceId.videoId)
                }
                src={lesson.snippet.thumbnails.maxres.url}
                alt="Video para niños"
                className="img-responsive"
              />
            </Col>
            <Col xs={24} sm={16} md={18} lg={20}>
              <div className={styles.content}>
                <strong>{lesson.snippet.title}</strong>
                <p>{lesson.snippet.description}</p>
              </div>
            </Col>
          </Row>
        </div>
      );
    });
  };
  const handleVideoModal = (isShowing = false, videoId = '') => {
    setIsModalVideoVisible(isShowing);
    setCurrentVideo(videoId);
  };
  return (
    <div className={styles.lessons}>
      <div className="mainBanner">
        <img
          src={`${cdnPath}/v2/images/central/kids/lessons-bg.jpg`}
          alt="Lecciones Escuela Biblica"
        />
      </div>
      <div className="container">
        <div className={styles.intro}>
          <h1 className={styles.kidsTitle}>! Bienvenido !</h1>

          <p>
            En esta sección podrás encontrar todas las lecciones compartidas en
            nuestros discipulados infantiles, de modo que puedas compartirla
            junto con tus hijos.
          </p>
          <img
            className={styles.animal}
            src={`${cdnPath}/v2/images/central/kids/animals/chicken.png`}
            alt="Pollo imagen"
          />
        </div>
      </div>
      <div className={styles.inclusions}>
        <div className="container">
          <h4>Mateo 19 : 14</h4>
          <p>
            «Dejen que los niños vengan a mí, y no se lo impidan, porque el
            reino de los cielos es de quienes son como ellos.»
          </p>
        </div>
      </div>
      <div className={`${styles.lessonsWrapper} container`}>
        <h2 className={styles.kidsTitle}>Lecciones</h2>
        <img
          className={styles.animal}
          src={`${cdnPath}/v2/images/central/kids/animals/elefante.png`}
          alt="Elefante Sticker"
        />
        {lessons.length > 0 && generateLessonCardList(lessons)}
        {/* <img
          src={`${cdnPath}/v2/images/central/kids/flowers/yellow-flower.png`}
          alt="Yellow Flower"
        /> */}
      </div>
      <Modal
        wrapClassName={styles.VideoModal}
        bodyStyle={{ background: '#000', padding: '0' }}
        visible={isModalVideoVisible}
        footer={false}
        onOk={() => handleVideoModal(false)}
        onCancel={() => handleVideoModal(false)}
      >
        <div className={styles.youtubeWrapper}>
          <iframe
            title=""
            width="100%"
            height="380"
            src={`https://www.youtube.com/embed/${currentVideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}
