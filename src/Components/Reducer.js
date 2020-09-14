import {combineReducers} from 'redux';
import {GET_DATA} from './Constant';
const initialstate = [
	{
		"Scrip":"AADR",
		"Quantity":430,
		"Price":50.30,
		"avg_cost":41.75,
		"invested_amount":"17,952.07",
		"portfolio_percent_value":22.06, //%
		"unrealized_PL":"$3,676.93",
		"percent_return":20.48 //%
	},
	{
		"Scrip":"MFEM",
		"Quantity":210,
		"Price":23.20,
		"avg_cost":22.50,
		"invested_amount":"4,725.84",
		"portfolio_percent_value":5.81,
		"unrealized_PL":"$146.16",
		"percent_return":3.09
	},
	{
		"Scrip":"JPEM",
		"Quantity":328,
		"Price":52.50,
		"avg_cost":56.70,
		"invested_amount":"18,597.60",
		"portfolio_percent_value":22.86,
		"unrealized_PL":"-$1,377.60",
		"percent_return":-7.41 
	},
	{
		"Scrip":"KEMQ",
		"Quantity":801,
		"Price":20.40,
		"avg_cost":22.24,
		"invested_amount":"17,811.04",
		"portfolio_percent_value":21.89,
		"unrealized_PL":"-$1,470.64",
		"percent_return":-8.26
	},
	{
		"Scrip":"KLDW",
		"Quantity":523,
		"Price":32.90,
		"avg_cost":26.32,
		"invested_amount":"13,765.36",
		"portfolio_percent_value":16.92,
		"unrealized_PL":"$3,441.34",
		"percent_return":25.00
	},

	{
		"Scrip":"KOIN",
		"Quantity":335,
		"Price":25.40,
		"avg_cost":25.40,
		"invested_amount":"8,509.00",
		"portfolio_percent_value":10.46,
		"unrealized_PL":"$0",
		"percent_return":0.00
	},
]

let GetContext = (state = initialstate, action) => {
    switch(action.type){

        case GET_DATA:
        return state

        default :
        return state;

    }
}

let RootReducer = combineReducers({ getListData: GetContext})

export default RootReducer;


