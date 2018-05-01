import { connect } from 'react-redux';
import Issues from '../components/Issues';

const mapStateToProps = state => ({
	issues: state.get('issues')
})

export default connect(mapStateToProps)(Issues);