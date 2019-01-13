import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Stepper from './Stepper';
// import Dashboard from './Dashboard';
import ReadWriteCard from './ReadWriteCard';
import DataCenterMap from './DataCenterMap'

const theme = createMuiTheme({
    root: {
    },
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#1AB5E0',
        },
        secondary: {
            main: '#ca5f14',
        },
    },
});

class HomePage extends Component {
    render () {
        return (
            <MuiThemeProvider theme={theme}>
                <div style={{width: '100%', marginLeft: '40px'}}>
                    <Stepper />
                    {/* <Dashboard /> */}
                    <DataCenterMap />
                    <ReadWriteCard />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;