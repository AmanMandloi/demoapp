import React from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { loadCSS } from 'fg-loadcss';
import {
  PieChart, Pie,
} from 'recharts';

import '../App.css';
import CardComponent from './cards';
import {useStyles} from '../style';
import {getItems} from './Action';

const data02 = [
				 { name: 'Mutual Funds', value: 400 },
				 { name: 'ETFs', value: 200 },
				]


function AppListing(props) {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
    props.getItems()
    return () => {
      node.parentNode.removeChild(node);
    };
  });

	return(
		<div className="App">
	      <div className={classes.header}>
	        <AppBar position="static">
	          <Toolbar>
	            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
	              <MenuIcon />
	            </IconButton>
	            <Typography variant="h6" className={classes.title}>
	              News
	            </Typography>
	            <Button color="inherit">Login</Button>
	          </Toolbar>
	        </AppBar>
	      </div>

	      <div className={classes.root}>
	        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
	          <Grid item xs={12} sm={9}>
	          {
	          	props.getListData.map((data, index)=>(
	          		<CardComponent key={index} fetchData={data} />
	          		))
	          }
	          </Grid>
	          <Grid item xs sm={3} >
	            <Paper className={classes.paper}>
	              <Grid container   direction="row" justify="space-between" alignItems="flex-start" spacing={1}>
	                <Grid item xs={12} sm={12} className={classes.chart_title}  >                  
	                  <h4> Portfolio</h4>
	                  <h6> Asset Wise</h6>
	                </Grid>
	                  <PieChart width={300} height={300}>
	                    <Pie data={data02} dataKey="value" activeIndex = {0} nameKey="name" legendType="square" cx={100} cy={100} innerRadius={70} outerRadius={90} fill="#82ca9d"  labelLine={true} />
	                  </PieChart>
	  			
	              </Grid>
	            </Paper>
	          </Grid>
	        </Grid>

	      </div>
	    </div>
    )


}



const mapStateToProps = state => ({
    getListData : state.getListData,
})

const mapDispatchToProps = dispatch => ({
    getItems  : (values) => dispatch(getItems()),
})

const AppListingHolder = connect(mapStateToProps, mapDispatchToProps)(AppListing);

export default AppListingHolder;

