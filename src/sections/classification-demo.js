/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { Container, Grid, Box, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import Image from 'components/image';
import model from 'assets/wsi/model.png';
import TextFeature from 'components/text-feature';
import Modal from 'react-modal';

const data = {
  subTitle: 'Classification',
  title: 'Classify the whole image into cancer subtypes',
  description:
    'Using the features extracted from the WSI, we can train a classifier to classify the whole image into cancer subtypes.',
};

export default function KeyFeature({ selectedFilename, selectedTask }) {
  const [isExtracting, setIsExtracting] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleExtractFeatures = () => {
    setIsExtracting(true);
    setTimeout(() => {
      setIsExtracting(false);
      // if (selectedFilename == 'IN Brain-0001.tiff'){
      //   subType = 'MENENGIOMA';
      // }else if (selectedFilename == 'IN Brain-0007.tiff'){
      //   subType = 'ASTROCYTOMA';
      // }else if (selectedFilename == 'IN Brain-0011.tiff'){
      //   subType = 'MENENGIOMA';
      // }else if (selectedFilename == 'IN Renal-0032.tiff'){
      //   subType = 'LN - Class 4';
      // }else if (selectedFilename == 'IN Renal-0020.tiff'){
      //   subType = 'LN - Class 6';
      // }

      let result;

      if (selectedTask === "LGG vs HGG Classification") {
        if (selectedFilename === 'IN Brain-0002.tiff') {
          result = "HGG";
        } else if (selectedFilename === 'IN Brain-0015.tiff') {
          result = "LGG";
        } else if (selectedFilename === 'IN Brain-0020.tiff' || selectedFilename === 'IN Brain-0030.tiff') {
          result = "HGG";
        } else if (selectedFilename === 'IN Brain-0109.tiff') {
          result = "LGG";
        } else {
          result = "Unknown";
        }
      } else if (selectedTask === "IDH Mutation Classification") {
        if (selectedFilename === 'IN Brain-0002.tiff') {
          result = "IDH (+)";
        } else if (selectedFilename === 'IN Brain-0015.tiff' || selectedFilename === 'IN Brain-0020.tiff' || selectedFilename === 'IN Brain-0030.tiff') {
          result = "IDH (-)";
        } else if (selectedFilename === 'IN Brain-0109.tiff') {
          result = "IDH (+)";
        } else {
          result = "Unknown";
        }
      } else if (selectedTask === "Subtype Classification") {
        if (selectedFilename === 'IN Brain-0002.tiff') {
          result = "Oli";
        } else if (selectedFilename === 'IN Brain-0015.tiff') {
          result = "Ast";
        } else if (selectedFilename === 'IN Brain-0020.tiff') {
          result = "GBM";
        } else if (selectedFilename === 'IN Brain-0030.tiff') {
          result = "Ast";
        } else if (selectedFilename === 'IN Brain-0109.tiff') {
          result = "OLI";
        } else {
          result = "Unknown";
        }
      } else {
        result = "Invalid selectedTask";
      }
      let message =`
      <table>
        <tr>
          <td>
            <strong>Filename:</strong>
          </td>
          <td>
            ${selectedFilename}
          </td>
        </tr>
        <tr>
          <td>
            <strong>Prediction:</strong>
          </td>
          <td>
            ${result}
          </td>
        </tr>
      </table>
      `
      setModalMessage(message);
      setModalIsOpen(true);
    }, 2000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section style={{ paddingTop: '5%', paddingBottom: '5%' }} id="overview">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} description={data.description} />
          <button onClick={handleExtractFeatures} disabled={isExtracting} style={styles.extractButton}>
            {isExtracting ? 'Processing...' : 'Predict ' + selectedTask}
          </button>
        </Box>

        <Box sx={styles.thumbnail}>
          <Image src={model} alt="Thumbnail" />
        </Box>
      </Container>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={modalStyles}
  contentLabel="Result Modal"
  ariaHideApp={false}
>
  <div style={modalStyles.content}>
    <h2 style={modalStyles.modalTitle}>Result</h2>
    <p style={modalStyles.modalMessage} dangerouslySetInnerHTML={{ __html: modalMessage }}></p>
    <button style={modalStyles.modalButton} onClick={closeModal}>Close</button>
  </div>
</Modal>


    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
    contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Update grid template columns
    gap: '40px',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    justifySelf: 'center',
  },
  extractButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'primary',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'primaryHover',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  rightColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iframeContainer: {
    textAlign: 'center',
  },
  extractButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'rgb(197 0 171)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    '&:hover': {
      backgroundColor: 'rgb(180 56 163)',
      transform: 'scale(1.05)',
    },
    '&:disabled': {
      backgroundColor: 'grey',
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    animation: 'pulse 1.5s infinite',
  },
  thumbnail: {
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
  },
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '9999',
  },
  content: {
    fontFamily: 'monospace',
    display: 'grid',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    maxHeight: '80%',
    padding: '20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'white',
    outline: 'none',
    overflow: 'auto',
    textAlign: 'grid',
    zIndex: '9999',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  modalButton: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#333333',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#555555',
    },
  },
};
