import { connect } from "react-redux";
import Marking from "../../components/instructor/Marking";

const mapStateToProps = (state) => ({
    studentsToMark: state.get('studentsToMark'),
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Marking);