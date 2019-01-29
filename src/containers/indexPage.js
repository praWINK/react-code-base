import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../components/indexPage';
import {getCounting} from '../redux/actions/indexPage'

const mapStateToProps = (state) => {
    return ({
        countingData: state.indexPage.countingData
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({"count":getCounting},dispatch)
    
}

export default connect(mapStateToProps, mapDispatchToProps) (IndexPage);




