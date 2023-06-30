/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/collaboraters/iiit.png';
import PostThumb2 from 'assets/collaboraters/nizam.png';
import PostThumb3 from 'assets/collaboraters/ihub-2.png';

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'IIIT-H',
    postLink: '#',
    title: 'IIIT Hyderabad',
    authorName: 'Visit Website',
    url: 'https://www.iiit.ac.in/',
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'NIMS',
    postLink: '#',
    title: 'Nizam Institute of Medical Sciences',
    authorName: 'Visit Website',
    url: 'https://nims.edu.in/',
  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'iHub-Data',
    postLink: '#',
    title: 'iHub-Data, IIIT Hyderabad',
    authorName: 'Visit Website',
    url: 'https://ihub-data.iiit.ac.in/',
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <section sx={{ variant: 'section.news' }} id="sponsors">
      <Container>
        <SectionHeader
          slogan="Sponsors"
          title="This project is a collaboration between the following organizations"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={false}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            renderDotsOutside={false}
            responsive={responsive}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
                url={item.url}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
