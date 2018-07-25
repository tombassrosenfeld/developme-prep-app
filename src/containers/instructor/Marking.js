import { connect } from "react-redux";
import Marking from "../../components/instructor/Marking";

const mapStateToProps = (state) => ({
    marking: state.get('studentsToMark'),
    cohorts: state.get('cohorts'),
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Marking);