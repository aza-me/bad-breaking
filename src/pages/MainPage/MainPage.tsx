import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { EpisodeModel } from 'app/models/episodes';
import { getAllEpisodes } from 'store/modules/episodes';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MainPage: React.FC = () => {
  const [filtredEpisodes, setFiltredEpisodes] = useState<EpisodeModel[]>([]);
  const [currentTab, setCurrentTab] = React.useState(0);

  const dispatch = useAppDispatch();
  const { episodes } = useAppSelector((state) => state.episodes);

  const filterByEpisodes: any = (season: number) => {
    
    setFiltredEpisodes(episodes.filter((episodes) => episodes.season == season));

  };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, []);



  useEffect(() => {
    console.log(episodes);
  }, [episodes]);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={currentTab}
          onChange={(_, newValue) => setCurrentTab(newValue)}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab
            label='Season 1'
            onClick={() => {
              filterByEpisodes(1);
            }}
            {...a11yProps(0)}
          />
          <Tab
            label='Season 2'
            onClick={() => {
              filterByEpisodes(2);
            }}
            {...a11yProps(1)}
          />
          <Tab
            label='Season 3'
            onClick={() => {
              filterByEpisodes(3);
            }}
            {...a11yProps(2)}
          />
          <Tab
            label='Season 4'
            onClick={() => {
              filterByEpisodes(1);
            }}
            {...a11yProps(4)}
          />
          <Tab
            label='Season 5'
            onClick={() => {
              filterByEpisodes(5);
            }}
            {...a11yProps(0)}
          />

        </Tabs>

        <TabPanel value={currentTab} index={0}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {filtredEpisodes.map((e) => (
                <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                  <Grid item xs={6}>
                    <Item> {e.episode} </Item>
                  </Grid>
                </NavLink>
              ))}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={currentTab} index={1}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Grid item xs={6} sm={4} md={4}>
                  <Item> {e.episode} </Item>
                </Grid>
              </NavLink>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={currentTab} index={2}>
          <Grid container spacing={3}>
            {filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Grid item xs={4}>
                  <Item> {e.episode} </Item>
                </Grid>
              </NavLink>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={currentTab} index={3}>
          <Grid container spacing={3}>
            {filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Grid item xs={4}>
                  <Item> {e.episode} </Item>
                </Grid>
              </NavLink>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={currentTab} index={4}>
          <Grid container spacing={3}>
            {filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Grid item xs={4}>
                  <Item> {e.episode} </Item>
                </Grid>
              </NavLink>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={currentTab} index={5}>
          <Grid container spacing={3}>
            {filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Grid item xs={4}>
                  <Item> {e.episode} </Item>
                </Grid>
              </NavLink>
            ))}
          </Grid>
        </TabPanel>
        
      </Box>
    </Container>
  );
};

export default MainPage;
