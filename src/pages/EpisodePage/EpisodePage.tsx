import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getEpisodeById } from 'store/modules/episodes';

const EpisodePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id?: string }>();
  const currentEpisode = useAppSelector((state) => state.episodes.currentEpisode);

  useEffect(() => {
    if (!id) return;
    dispatch(getEpisodeById(+id));
  }, []);
  useEffect(() => {
    console.log(currentEpisode);
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='140' image='/static/images/cards/contemplative-reptile.jpg' alt='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {currentEpisode?.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Episode: {currentEpisode?.episode}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          In these episode:{currentEpisode?.characters}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Season:{currentEpisode?.season}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Смотреть</Button>
      </CardActions>
    </Card>
  );
};

export default EpisodePage;
