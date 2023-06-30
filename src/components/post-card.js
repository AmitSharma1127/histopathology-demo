/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Flex, Link } from 'theme-ui';

export default function PostCard({
  src,
  alt,
  postLink,
  title,
  authorName,
  date,
  url,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.thumbnail}>
        <Image src={src} alt={alt} />
      </Box>

      <Flex sx={styles.postContent}>
        <Heading sx={styles.title}>
          <Link href={postLink} variant="blog">
            {title}
          </Link>
        </Heading>

        <Flex sx={styles.postFooter}>
          <Text sx={styles.postFooter.name}  onClick={() => {
            window.open(url, '_blank');
          } }>{authorName}</Text>
          <Text sx={styles.postFooter.date}>{date}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

const styles = {
  card: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(38,78,118,0.12)',
    borderRadius: '7px',
    m: '0 15px 40px',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0px 5px 20px rgba(38,78,118,0.15)',
    },
    minHeight: ['auto', null, null, null, '400px'],
  },

  thumbnail: {
    borderRadius: '7px 7px 0 0',
    justifyContent: 'center',
    overflow: 'hidden',
    display: 'flex',
    img: {
      width: '100%',
      minHeight: ['200px', null, null, null, '300px', '260px'],
      maxHeight: ['200px', null, null, null, '300px', '260px'],
      maxWidth: 'fit-content',
      minWidth: 'fit-content',
    },
  },
  postContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: ['15px 20px', '25px 30px'],
  },
  title: {
    fontSize: [3, null, null, null, null, 4],
    color: 'heading',
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [3, 4, 5],
    pr: [0, null, null, null, 5],
    minHeight: ['auto', null, null, null, '100px'],
  },
  postFooter: {
    width: '100%',
    justifyContent: 'space-between',
    alignItem: 'center',
    name: {
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'primary',
      lineHeight: 1.4,
      bottom: '0px',
      cursor: 'pointer',
      '&:hover': {
        color: 'secondary',
        transition: 'all 0.3s',
        textDecoration: 'underline',
      }
    },
    bottom: '0px',
    date: {
      fontSize: ['14px', null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};
