import { useState } from 'react';
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  // Feature data...
];

export default function Visualize({ onFilenameChange }) {
  const [images, setImages] = useState('IN Brain-0001.tiff');
  const baseURL = 'http://127.0.0.1:5000/';
  const [iframeURL, setIframeURL] = useState(baseURL + images);

  const filenames = [
    'IN Brain-0001.tiff',
    'IN Brain-0007.tiff',
    'IN Brain-0011.tiff',
    'IN Renal-0032.tiff',
    'IN Renal-0020.tiff',
  ];

  const handleImageChange = (event) => {
    const selectedImage = event.target.value;
    const encodedFileName = encodeURIComponent(selectedImage);
    setImages(selectedImage);
    setIframeURL(baseURL + encodedFileName);
    onFilenameChange(selectedImage); // Call the callback function with the selected filename
  };

  return (
    <section style={{ paddingTop: "5%", paddingBottom: "5%", backgroundColor: 'rgb(171 171 171 / 10%)'}} id="overview">
      <Container>
        <SectionHeader slogan="Visualize" title="Visualize the whole slide image" />

        <Grid sx={styles.grid}>
          <Box sx={styles.leftColumn}>
            <Text as="h1">Please select an image</Text>
            <Box sx={styles.textBox}>
              <select name="images" id="images" style={styles.select} onChange={handleImageChange}>
                {filenames.map((filename) => (
                  <option value={filename} key={filename}>
                    {filename}
                  </option>
                ))}
              </select>
            </Box>
          </Box>

          <Box sx={styles.rightColumn}>
            {images && (
              <div sx={styles.iframeContainer}>
                <iframe
                  src={iframeURL}
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
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
  select: {
    cursor: 'pointer',
    zIndex: '2',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
  },
  rightColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iframeContainer: {
    textAlign: 'center',
  },
};
