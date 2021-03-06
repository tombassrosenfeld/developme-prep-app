import { connect } from "react-redux";
import Cohort from "../../components/instructor/Cohort";
import { getUserRole } from "../../utilities/utilities";

const mapStateToProps = (state, {id}) => {
	return {
    cohort: state.get('root').get("cohorts").find(cohort => cohort.get('name') === id),
	  userRole: getUserRole(state.get('root').getIn(['user', 'roles'])),
  }
};

export default connect(mapStateToProps)(Cohort);