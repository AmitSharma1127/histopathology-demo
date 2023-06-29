import React, { useState} from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner-demo';
import Visualize from '../sections/visualize';
import Patching from '../sections/patching-demo';
import Features from '../sections/features-extraction';
import Classification from '../sections/classification-demo';


export default function IndexPage() {
  const [selectedFilename, setSelectedFilename] = useState('IN Brain-0001.tiff');

  const handleFilenameChange = (filename) => {
    setSelectedFilename(filename);
  };
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Histopathology" />
          <Banner />
          <Visualize onFilenameChange={handleFilenameChange} />
          <Patching />
          <Features />
          <Classification  selectedFilename={selectedFilename}  />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
