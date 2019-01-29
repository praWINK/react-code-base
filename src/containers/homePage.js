import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePage from '../components/homePage';
import {getProductList} from '../redux/actions/homepage'

const mapStateToProps = (state) => {
    return ({
        homeBanners: state.homepage.homeBanners

    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({"postList": getProductList},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (HomePage);




