import Nav from './Nav';
import { connect } from 'react-redux';

let mapStateToProps = (state)=>{
    return {
        friends:state.nav.friends
    }
}
let NavContainer = connect(mapStateToProps)(Nav);
export default NavContainer;