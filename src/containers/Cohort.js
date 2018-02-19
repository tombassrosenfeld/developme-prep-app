import { connect } from "react-redux";
import Cohort from "../components/Cohort";

const mapStateToProps = (state, {id}) => {
	return {
    cohort: state.get("cohorts").find(cohort => cohort.get('id') === +id),
  }
};

export default connect(mapStateToProps)(Cohort);