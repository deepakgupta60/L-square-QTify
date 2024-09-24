import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';

const AlbumCard = ({ album }) => {
  return (
    <Card sx={{ width: 200, m: 2, boxShadow: 3 }}>
      {/* Album Image */}
      <CardMedia
        component="img"
        image={album.image}
        alt={album.title}
        sx={{ height: 200, objectFit: 'cover' }}
      />
      
      {/* Album Info */}
      <CardContent sx={{ textAlign: 'center', p: 2 }}>
        {/* Follows Chip */}
        <Box display="flex" justifyContent="center">
          <Chip label={`${album.follows} Follows`} size="small" color="primary" />
        </Box>
        
        {/* Album Title */}
        <Typography variant="h6" mt={1}>
          {album.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {album.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
