import { Tab, Tabs, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

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
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={currentTab}
          onChange={(_, newValue) => setCurrentTab(newValue)}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label='Item One' {...a11yProps(0)} />
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Container>
  );
};

export default MainPage;
