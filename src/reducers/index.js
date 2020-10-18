import { combineReducers } from 'redux';
import CardsRD from './CardsRD';
import NavBarRD from './NavBarRD';

const appReducers = combineReducers({
    CardsRD: CardsRD,
    NavBarRD: NavBarRD
})

export default appReducers;