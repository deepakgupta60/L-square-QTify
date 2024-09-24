import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button, Box } from '@mui/material';
import AlbumCard from './AlbumCard';  
import Grid from '@mui/material/Grid2';

const AlbumData = () => {

  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setAlbums(response.data);
    };

    fetchData();
  }, []);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box my={4} px={4} >
      {/* Section Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{color:"white"}}>Top Albums</Typography>
        <Button onClick={handleCollapse} sx={{color:"#34C94B"}}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </Button>
      </Box>

      {/* Album Grid */}
      <Grid container spacing={2} mt={2}>
        {albums.slice(0, isCollapsed ? 7 : albums.length).map((album) => (
          <Grid item key={album.id} xs={12} sm={6} md={4} lg={3}>
            <AlbumCard album={album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AlbumData;
