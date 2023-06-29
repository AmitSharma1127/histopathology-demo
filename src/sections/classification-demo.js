/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { Container, Grid, Box, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import Image from 'components/image';
import model from 'assets/wsi/model.png';
import TextFeature from 'components/text-feature';

const data = {
  subTitle: 'Classification',
  title: 'Classify the whole image into cancer subtypes',
  description:
  'Using the features extracted from the WSI, we can train a classifier to classify the whole image into cancer subtypes.'
};

export default function KeyFeature({ selectedFilename }) {
  const [isExtracting, setIsExtracting] = useState(false);

  const handleExtractFeatures = () => {
    setIsExtracting(true);
    setTimeout(() => {
      let subType = '';
      setIsExtracting(false);
      if (selectedFilename == 'IN Brain-0001.tiff'){
        subType = 'MENENGIOMA';
      }else if (selectedFilename == 'IN Brain-0007.tiff'){
        subType = 'ASTROCYTOMA';
      }else if (selectedFilename == 'IN Brain-0011.tiff'){
        subType = 'MENENGIOMA';
      }else if (selectedFilename == 'IN Renal-0032.tiff'){
        subType = 'LN - Class 4';
      }else if (selectedFilename == 'IN Renal-0020.tiff'){
        subType = 'LN - Class 6';
      }
      let message = 'Filename: ' + selectedFilename + 'The whole image is classified as ' + subType;
      alert(message);
    }, 2000);
  };

  return (
    <section style={{ paddingTop: "5%", paddingBottom: "5%"}} id="overview">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description} 
          />
            <button onClick={handleExtractFeatures} disabled={isExtracting} style={styles.extractButton}>
              {isExtracting ? 'Processing...' : 'Predict Cancer Subtypes'}
            </button>
        </Box>

        <Box sx={styles.thumbnail}>
          <Image src={model} alt="Thumbnail" />
        </Box>
      </Container>
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