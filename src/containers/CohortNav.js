import { connect } from "react-redux";
import TopicsNav from "../components/TopicsNav";
import { onClickIcon } from "../data/actions";

const mapStateToProps = state => ({
    navItems: state.get("topics"),
});

const mapDispatchToProps = dispatch => ({
	onClickIcon: (id) => dispatch(onClickIcon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicsNav);