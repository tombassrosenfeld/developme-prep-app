import { connect } from "react-redux";
import Marking from "../../components/instructor/Marking";

const mapStateToProps = (state, {topicID}) => ({
    marking: [1,2,3,4,5],
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Marking);