import { Tab, Tabs, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { EpisodeModel } from 'app/models/episodes';
import EpisodeSeries from 'pages/EpisodePage/EpisodePage';
import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAllEpisodes } from 'store/modules/episodes';

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
  const [filtredEpisodes, setFiltredEpisodes] = useState<EpisodeModel[]>([])
  const dispatch = useAppDispatch();
  const { episodes } = useAppSelector((state) => state.episodes);

  const [currentTab, setCurrentTab] = React.useState(0);

  const filterByEpisodes: any = (season: number) => {
    setFiltredEpisodes(episodes.filter((episodes) => episodes.season == season))
    console.log(filtredEpisodes)
  }
  const displayEpisodes = ()=>{
    return filtredEpisodes.map(e => <p> {e.episode}</p>)
  }

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, []);

  useEffect(() => {
    console.log(episodes)
  }, [episodes]);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {/* <NavLink to={'episodes'}>ПРОВЕРКА </NavLink> */}
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={currentTab}
          onChange={(_, newValue) => setCurrentTab(newValue)}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label='Item One' onClick={() => { filterByEpisodes(1) }}  {...a11yProps(0)} />
          <Tab label='Item Two' onClick={() => { filterByEpisodes(2) }} {...a11yProps(1)} />
          <Tab label='Item Three' onClick={() => { filterByEpisodes(3) }} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={currentTab} index={0} >
         { displayEpisodes()}
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          {displayEpisodes()}

        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          {displayEpisodes()}

        </TabPanel>
      </Box>
    </Container>
  );
};

export default MainPage;
