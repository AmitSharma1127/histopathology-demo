/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'WSI to patches',
    title: 'WSI to patches',
    text:
      'Chopping up WSI into patches and then using them for training the model.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Using a pre-trained model',
    title: 'Using a pre-trained model',
    text:
      'Using a pre-trained model and then fine-tuning it on our dataset.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'In-house data collection',
    title: 'In-house data collection',
    text:
      'Using our own data collection and then training the model on it.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Subtyping',
    title: 'Subtyping',
    text:
      'Using MIL, predicting subtype for the whole slide image.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="overview">
      <Container>
        <SectionHeader
          slogan="Overview"
          title="Major parts of the project"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
