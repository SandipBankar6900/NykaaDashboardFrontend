import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" my="4" justifyContent="center" alignItems="center">
      <Heading as="h1" fontFamily="Poppins" fontSize="lg" my="4">
        Welcome, You Can Login For Admin Dashboard
      </Heading>
      <Image
        className="border rounded-xl"
        src="https://exchange4media.gumlet.io/news-photo/113829-Janhvi_for-media-01.jpg?w=400&dpr=2.6"
        alt="nykaa"
      />
    </Box>
  );
};

export default Home;
