import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { format } from 'react-string-format';
import { Grid } from '@mui/material';
import ProductCard from '../products/ProductCard';
import Checkout from '../common/Checkout';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            sx={{ display: "flex" }}
        >
            {value === index && (
                <Box sx={{ flexGrow: 1, padding: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ProductCard
                                img_url={"https://rasamalaysia.com/wp-content/uploads/2007/01/nasi_lemak-1.jpg"}
                                card_height={120}
                                name={format('Test_0{0}', index)}
                                alt={'Lasi Lemak'}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ProductCard
                                img_url={"https://rasamalaysia.com/wp-content/uploads/2007/01/nasi_lemak-1.jpg"}
                                card_height={120}
                                name={format('Test_0{0}', index)}
                                alt={'Lasi Lemak'}
                            />
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function makeProducts(selectedTab) {
    // SQL data base
    return (
        <>
            {/* TODO Flex 5 items */}
            <TabPanel value={selectedTab} index={0} ></TabPanel>
        </>
    );
}

function TabPanelHandler(selectedTab, contents) {
    var content;
    if (selectedTab !== undefined) {
        content = makeProducts(selectedTab);
    }

    return (
        <>
            {/* TODO Flex 5 items */}
            {content}
        </>
    );
}

function VerticalTabs() {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <>
            <Box sx={{ position: 'fixed', bgcolor: 'background.paper', left: 0, marginTop: 8, bottom: 0, width: 125, top: 0 }}>
                <Tabs
                    orientation="vertical"
                    variant="standard"
                    value={selectedTab}
                    onChange={handleChange}
                    aria-label="Vertical Catigoury"
                    sx={{ borderRight: 1, borderColor: 'divider', height: '100%' }}
                >
                    <Tab label="Drinks" {...a11yProps(0)} sx={{ height: 125, fontWeight: "bold" }} />
                    <Tab label="Breakfast" {...a11yProps(1)} sx={{ height: 125, fontWeight: "bold" }} />
                    <Tab label="Asian Food" {...a11yProps(2)} sx={{ height: 125, fontWeight: "bold" }} />
                    <Tab label="Kid" {...a11yProps(3)} sx={{ height: 125, fontWeight: "bold" }} />
                    <Tab label="Snack" {...a11yProps(4)} sx={{ height: 125, fontWeight: "bold" }} />
                    <Tab label="Dessert" {...a11yProps(5)} sx={{ height: 125, fontWeight: "bold" }} />
                </Tabs>
            </ Box>
            <Box sx={{ display: 'flex', marginTop: 8, marginLeft: 15.5, height: '100%' }}>
                <Box sx={{ flex: 3 }}>
                    {/* TODO Flex 5 items */}
                    {TabPanelHandler(selectedTab)}
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Checkout />
                </Box>
            </Box>
        </>
    );
}

function VerticalTabPanel() {
    return (
        VerticalTabs()
    )
}

export default VerticalTabPanel