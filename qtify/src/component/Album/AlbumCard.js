import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';

const AlbumCard = ({ album }) => {
  return (
    <Card sx={{
      flexGrow: 1, // Allow the card to grow and take available space
      minWidth: 200, // Set a reasonable minimum width
      maxWidth: 200, // Set a maximum width to maintain visual balance
      m: 2,
      borderRadius: '15px',
      overflow: 'hidden',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Album Image */}
      <CardMedia
        component="img"
        image={album.image}
        alt={album.title}
        sx={{ height: 200, objectFit: 'cover' }} 
      />
      
      {/* Album Info */}
      <CardContent sx={{ textAlign: 'center', paddingBottom: '8px' }}>
        {/* Follows Chip */}
        <Box display="flex" justifyContent="center" mt={1}>
          <Chip label={`${album.follows} Follows`} size="small" sx={{ backgroundColor: '#000', color: '#fff' }} />
        </Box>
        
        {/* Album Title */}
        <Typography variant="body1" mt={1}>
          {album.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
