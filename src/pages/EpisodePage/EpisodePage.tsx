import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getEpisodeById } from 'store/modules/episodes';
import s from './Episode.module.scss';


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
  }, [currentEpisode]);

  return (
    <Container>
      <Box sx={{ display: 'flex', }}>
        <Card sx={{ maxWidth: "80%", height: 700, }}>
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              {currentEpisode?.title}
            </Typography>
            <video className={s.video} src="" controls></video>
            <Typography variant='h5' color='text.secondary'>
              Episode: {currentEpisode?.episode}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Season:{currentEpisode?.season}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              In these episode:{currentEpisode?.characters.map(e   => <p key={e.length}>{e}</p>)}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Дата выхода  {currentEpisode?.characters}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Дата выхода  {currentEpisode?.air_date}
            </Typography>
          </CardContent>

          <CardActions>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default EpisodePage;
