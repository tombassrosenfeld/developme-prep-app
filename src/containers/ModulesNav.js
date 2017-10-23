import { connect } from "react-redux";
import ModulesNav from "../components/ModulesNav";
import { onClickIcon } from "../data/actions";

const mapStateToProps = state => ({
    modules: state.get("modules"),
});

const mapDispatchToProps = dispatch => ({
	onClickIcon: (id) => dispatch(onClickIcon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModulesNav);