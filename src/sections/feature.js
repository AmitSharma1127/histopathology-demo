/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Gigapixel Sized Images',
    title: 'Gigapixel Sized Images',
    text:
      'WSI are gigapixel sized images. This makes it difficult to process them using traditional deep learning methods as they are computationally expensive and require a lot of memory. A single WSI is typically the size of 1 full length HD movie.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Annotations',
    title: 'Annotations',
    text:
      'Getting the WSIs annotated is a time consuming process. It requires a lot of time and effort from the pathologists. This is a major bottleneck in the process of developing a deep learning model.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Problem Complexity',
    title: 'Problem Complexity',
    text:
      'The problem of cancer detection is a complex one. There are various types of cancer and each type has its own characteristics. This makes it difficult to train a single model that can detect all types and subtypes of cancer.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Stain Variations',
    title: 'Stain Variations',
    text:
      'There are various staining techniques used in histopathology. This leads to variations in the appearance of the tissue. This makes it difficult to train a model that is robust to these variations even the technique used for staining is the same.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="challenges">
      <Container>
        <SectionHeader
          slogan="Challenges"
          title="Why is this a challenging problem?"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
