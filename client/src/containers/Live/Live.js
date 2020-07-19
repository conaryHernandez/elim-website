import React, { useEffect, useState } from 'react';
import styles from './Live.module.scss';
import { cdnPath, strapiURL, elimAPI } from '../../constants';
import { Card, Row, Col, Modal } from 'antd';
import axios from 'axios';

const { Meta } = Card;

export default function Live() {
  const [pageData, setPageData] = useState({});
  const [videoList, setVideoList] = useState([]);
  const [onPromiseError, setOnPromiseError] = useState('');
  const [isModalVideoVisible, setIsModalVideoVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    getPageData(strapiURL);
    getLatestVideos(elimAPI, 6);
  }, []);

  const getPageData = (strapiURL) => {
    axios
      .get(`${strapiURL}/elim-live`)
      .then((response) => {
        setPageData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getLatestVideos = async (elimAPI, maxResults = 6) => {
    const playListId = 'PLB_odl26rwmXQZ4UcEw-TN7OJbM7xn1VY';
    const response = await axios.get(
      `${elimAPI}/playlists/${playListId}?maxResults=${maxResults}`
    );

    response.status === 200
      ? setVideoList(response.data.videos)
      : setOnPromiseError(response.data.message);
  };
  const handleVideoModal = (isShowing = false, videoId = '') => {
    setIsModalVideoVisible(isShowing);
    setCurrentVideo(videoId);
  };

  const generateVideoItemList = (videoList) => {
    return videoList.map((video, index) => {
      const desc = video.snippet.description.split('\n');
      return (
        <Col key={index} xs={24} sm={12} lg={8}>
          <div
            className={styles.videoItem}
            onClick={() =>
              handleVideoModal(true, video.snippet.resourceId.videoId)
            }
          >
            <div className={styles.imageWrapper}>
              <img
                src={video.snippet.thumbnails.maxres.url}
                alt={video.snippet.title}
              />
            </div>

            <strong className={styles.videoTitle}>{video.snippet.title}</strong>
            <strong className={styles.videoDesc}>
              {desc[0].includes('Pagina') ? '' : desc[0]}
            </strong>
          </div>
        </Col>
      );
    });
  };

  return (
    <div id={styles.liveVw}>
      <div className={styles.mainBanner}>
        <h1>Transmisiones</h1>
        <div className={styles.mainBannerOverlay} />
        {pageData.mainBannerPath && (
          <img
            src={`${cdnPath}${pageData.mainBannerPath}`}
            alt={pageData.MainBannerAltText}
          />
        )}
      </div>
      <div className="container">
        <div className={styles.iframeWrapper}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${pageData.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.recentMessages}>
          <h2>Videos recientes</h2>
          <Row gutter={16} justify="center" align={'middle'}>
            {videoList.length > 0 && generateVideoItemList(videoList)}
          </Row>
        </div>
        {/* <div className={styles.facebookWrapper}>
          <div
            className="fb-comments"
            data-href="https://www.elimhonduras.org/elim-live"
            data-numposts="10"
            data-width="100%"
          ></div>
        </div> */}

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
    </div>
  );
}
