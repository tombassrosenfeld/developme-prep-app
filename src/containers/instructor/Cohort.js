import { connect } from "react-redux";
import Cohort from "../../components/instructor/Cohort";

const mapStateToProps = (state, {id}) => {
	return {
    cohort: state.get("cohorts").find(cohort => cohort.get('name') === id),
  }
};

export default connect(mapStateToProps)(Cohort);