import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import LinearProgress from '@material-ui/core/LinearProgress';

import {useStyles} from '../style';


export default function CardComponent(props){
	const classes = useStyles();
  const fetchData = props.fetchData;

	const BorderLinearProgress = withStyles((theme) => ({
	  root: {
	    height: 10,
	    borderRadius: 5,
	  },
	  colorPrimary: {
	    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 300 : 700],
	  },
	  bar: {
	    borderRadius: 5,
	    backgroundColor: '#07c407',
	  },
	}))(LinearProgress);

  const DangerBorderLinearProgress= withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 300 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: 'red',
    },
  }))(LinearProgress);


	return (
          <Paper className={classes.paper} elevation={3}>

            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item  xs sm={2}>

                  <Paper className={classes.paper_secondary_1}>

                    <Grid container direction="row" justify="center" alignItems="center" >
                      <Grid item >
                        <IconButton edge="start" color="inherit" aria-label="menu">
                          <MenuIcon style={{ fontSize: 15 }}  />
                        </IconButton>
                      </Grid>
                      <Grid item  >
                            <Typography className={classes.paper1_col1_title}>
                              {fetchData.Scrip} 
                            </Typography>
                            <Typography variant="body2" className={classes.paper1_col2_title}>
                             ${fetchData.Price}
                            </Typography>
                      </Grid>

                      <div style={{marginRight:"10px"}}></div>
                      <Grid item xs sm>
                        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                          <Grid item xs>
                            <Typography variant="body1" className={classes.paper1_col3_title}>
                              iShares
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography variant="body2" className={classes.paper1_col3_subtitle}>
                              by BlackDoc
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle1" className={classes.paper1_col3_des}>
                              S&P 500 Index
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle1" className={classes.paper1_col3_des1}>
                              US Equity
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                    </Grid>



                  </Paper>

                </Grid>
                <div style={{marginRight:"16px"}}></div>

                <Grid item  xs sm>
                  <Paper className={classes.paper_secondary}>
                    <Grid container direction="column" >

                      <Grid item xs={12}>
                        <div className={classes.paper2_item}>           
                          <div className={classes.paper2_item_child}>
                            <span className={classes.padding_icon}>
                              <Icon className="fa fa-database" style={{ fontSize: 15 }} />
                            </span>
                            <span className={classes.typo_plate2_t}>Quantity</span>
                          </div>
                          <div>
                            <Typography className={classes.typo_plate2}>{fetchData.Quantity}</Typography>                          
                          </div>
                        </div>
                      </Grid>


                      <Grid item xs>
                        <div className={classes.paper2_item}>           
                          <div className={classes.paper2_item_child}>
                            <span className={classes.padding_icon}>
                              <Icon className="fas fa-at" style={{ fontSize: 15 }} />
                            </span>
                            <span className={classes.typo_plate2_t}>Avg. Cost</span>
                          </div>
                          <div>
                            <Typography className={classes.typo_plate2}>${fetchData.avg_cost}</Typography>                          
                          </div>
                        </div>

                      </Grid>

                      <Grid item xs>
                        <div className={classes.paper2_item}>           
                          <div className={classes.paper2_item_child}>
                            <span className={classes.padding_icon}>
                              <Icon className="fa fa-money-bill" style={{ fontSize: 15 }} />
                            </span>
                            <span className={classes.typo_plate2_t}>Invested Amt</span>
                          </div>
                          <div>
                            <Typography className={classes.typo_plate2}>${fetchData.invested_amount}</Typography>                          
                          </div>
                        </div>

                      </Grid>

                    </Grid>
                  </Paper>


                </Grid>

                <Grid item xs sm>
                  <Paper className={classes.paper_secondary}>
                  
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                      <Grid item xs={12}>
                        <div className={classes.paper3_row1_title}>
                          <div>
                            <span>Market Value</span>
                          </div>
                          <div>
                            <span>${fetchData.Price*fetchData.Quantity}</span>
                          </div>
                        </div>
                    </Grid>
                      <Grid item xs={12}>
                        <div className={classes.paper3_row1_title}>
                          <div>
                            <span className={classes.paper3_row2_title} >% of portfolio value</span>
                          </div>
                          <div>
                            <span>{fetchData.portfolio_percent_value}%</span>
                          </div>
                        </div>
                    </Grid>

                      <Grid item xs={12}>
                        <div >
                          <div>
                            <BorderLinearProgress variant="determinate" value={fetchData.portfolio_percent_value} />
                          </div>
                        </div>
                    </Grid>
                  </Grid>
                  </Paper>
                </Grid>



                <Grid item xs sm>
                  <Paper className={classes.paper_secondary}>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                      <Grid item xs={12}>
                        <div className={classes.paper3_row1_title}>
                          <div>
                            <span>Unrealized P/L</span>
                          </div>
                          <div>
                            <span>{fetchData.unrealized_PL}</span>
                          </div>
                        </div>
                    </Grid>
                      <Grid item xs={12}>
                        <div className={classes.paper3_row1_title}>
                          <div>
                            <span className={classes.paper3_row2_title} >% Return</span>
                          </div>
                          
                            {/*<Icon className="fa fa-caret-down" style={{ fontSize: 15,color:'rgb(7, 196, 7)' }} />*/}

                          <div className={classes.paper4_percent}>
                          {
                              fetchData.unrealized_PL.includes('-') ?
                              <Icon className="fa fa-caret-down" style={{ fontSize: 15,color:'red' }} />
                              :
                            <Icon className="fa fa-caret-up" style={{ fontSize: 15,color:'rgb(7, 196, 7)' }} />

                          }
                          
                            <span> {fetchData.percent_return}%</span>
                          </div>
                        
                        </div>
                    </Grid>

                      <Grid item xs={12}>
                        <div>
                        {
                          fetchData.unrealized_PL.includes('-') ?
                          <DangerBorderLinearProgress variant="determinate" value={Math.abs(fetchData.percent_return)} />
                          :
                          <BorderLinearProgress variant="determinate" value={Math.abs(fetchData.percent_return)} />
                        }                        
                        </div>
                    </Grid>
                  </Grid>

                  </Paper>
                </Grid>

                <Grid item xs={1} sm={1}>
                  <div>
                    <Grid container direction="column" justify="center" alignItems="center" >
                      <Grid item xs style={{paddingTop:"8px"}} >
                        <Button variant="outlined" className={classes.button_style}>
                          Buy
                        </Button>
                      </Grid>
                      <Grid item style={{paddingTop:"8px"}} >
                        <Button variant="outlined" className={classes.button_style} >
                          Sell
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

            </Grid>

          </Paper>
        )
    }