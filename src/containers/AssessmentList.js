// TODO. Sort out user progress updating for assessments

import { connect } from "react-redux";
import AssessmentList from "../components/AssessmentList";
// import { onClickUserProgress } from "../data/actions_API";

const mapStateToProps = state => ({
    userProgress: state.get('root').get('userProgress'),
});

const mapDispatchToProps = dispatch => ({
	// onClickUserProgress: (id) => dispatch(onClickUserProgress(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentList);