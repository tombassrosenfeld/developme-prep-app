import { connect } from 'react-redux';
import Issues from '../components/Issues';

const mapStateToProps = state => ({
	issue: state.get('issue')
})

export default connect(mapStateToProps)(Issues);