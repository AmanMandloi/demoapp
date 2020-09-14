import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:15,
    margiRight:15,
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
    marginBottom:'1%'
  },
  paper_secondary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // minWidth: '150px',
    position: 'relative',
    height: '80px',
    padding: '8px',
    background: 'rgba(0,0,0,.05)',
  },

  paper_button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // minWidth: '150px',
    position: 'relative',
    height: '80px',
    background: 'rgba(0,0,0,.05)',
  },

  paper_secondary_1: {    
    textAlign: 'center',
    // backgroundColor: 'rgb(242, 242, 242)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: '150px',
    position: 'relative',
    height: '80px',
    padding: '8px',
    background: 'rgba(0,0,0,.05)',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header:{
    marginBottom:30
  },
  paper1_col1_title:{
    color: 'rgba(0,0,0,.4)',
    fontSize: '.5rem',
    fontWeight: '700',
  },
  paper1_col2_title:{
    color: "#00b7ff",
    fontSize: "1rem",
    fontWeight: 600,
  },
  paper1_col3_title:{
    color: '#a8bd84',
    fontWeight: 700,
    fontSize: '1rem',
    float:'left',

  },
  paper1_col3_subtitle:{
    fontSize: '.3rem',
    float:'left',
    paddingLeft: '19px'
  },
  paper1_col3_des:{
    fontSize: '0.6rem',
    fontWeight: 700,
    float:'left'
  },
  paper1_col3_des1:{
    fontSize: '0.5rem',
    float:'left'
  },
  paper2_item:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom:'8px'
  },
  paper2_item_child:{
    display: 'inline-flex',
  },
  typo_plate2:{
    float: 'right',
    fontSize:12,
    fontWeight:'bold'

  },
  padding_icon:{
        paddingRight: '10px',
  },
  typo_plate2_t:{
    fontSize:12
  },
  paper3_row1_title:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom:'12px',
    flexDirection: 'row',
    fontWeight:700,
    fontSize:12
  },
  paper3_row2_title:{
    color: 'rgba(0,0,0,.5)',
    fontWeight: 'initial',
    paddingTop:'8px',
    paddingBottom:'8px',

  },
  paper4_percent:{
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  button_style:{
    color: 'orange',
    width: '74px',
    border: '2px solid orange',
  },
  chart_container:{
    position: 'fixed',
    right: '25px',
  },
  chart_title:{
    display: 'inline-flex',
    justifyContent: 'space-between',
    // padding: '11px',
  },
  chart_mention:{
    flex: 'auto',
    alignItems: 'baseline',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'inherit',
  },
  chart_mention_title1:{
    height: '13px',
    margin: '2px',
    width: '17px',
    marginRight:'4px',
    background: 'rgb(3, 169, 244)',
  },
  chart_mention_title2:{
    height: '13px',
    margin: '2px',
    marginRight:'4px',
    width: '17px',
    background: 'rgb(174, 156, 70)',
  },
  chart_mention_title:{
    display:'flex',
  }


}));

export {useStyles}