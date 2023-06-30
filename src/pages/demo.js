import React, { useState, useEffect } from 'react';
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
  const [selectedFilename, setSelectedFilename] = useState('IN Brain-0002.tiff');
  const [selectedTask, setSelectedTask] = useState('LGG vs HGG Classification');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  const handleFilenameChange = (filename) => {
    setSelectedFilename(filename);
  };

  const handleTaskChange = (task) => {
    setSelectedTask(task);
  };
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Histopathology" />
          <Banner />
          <Visualize onFilenameChange={handleFilenameChange} onTaskChange={handleTaskChange} />
          <Patching />
          <Features />
          <Classification  selectedFilename={selectedFilename} selectedTask={selectedTask}  />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
