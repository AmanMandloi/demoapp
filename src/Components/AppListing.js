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
  PieChart, Pie, Cell
} from 'recharts';

import '../App.css';
import CardComponent from './cards';
import {useStyles} from '../style';
import {getItems} from './Action';

const data = [
				 { name: 'Mutual Funds', value: 400 },
				 { name: 'ETFs', value: 200 },
				]
const COLORS = ['rgb(3, 169, 244)', 'rgb(174, 156, 70)'];


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
	                  <PieChart width={300} height={200}>
	                    <Pie 
	                    	data={data} 
	                    	dataKey="value" 
	                    	activeIndex = {0} 
	                    	nameKey="name" 
	                    	cx={100} 
	                    	cy={100} 
	                    	innerRadius={70} 
	                    	outerRadius={90} 
	                    	fill="#82ca9d"  
	                    	labelLine={true} 
	                    	legendType='square'
	                    	>
	                    	{
	                    		data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
	                    	}

	                    </Pie>

	                  </PieChart>
	                  <Grid container   direction="row" justify="center" spacing={0}>
	                  	<Grid item xs={6}  >
	                  	</Grid>
		               <Grid item xs={6} sm={6}  >
		               	<div className={classes.chart_mention}>
		               		<div className={classes.chart_mention_title}><div className={classes.chart_mention_title1}></div> Mutual Funds </div>
		               		<div className={classes.chart_mention_title}><div className={classes.chart_mention_title2}></div> ETFs </div>
		               		</div>  
		                </Grid>
		              </Grid>	                  	
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

