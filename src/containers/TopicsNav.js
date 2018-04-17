import { connect } from "react-redux";
import MenuToggle from "../components/MenuToggle";
import { onClickIcon } from "../data/actions";

const mapStateToProps = state => ({
    navItems: state.get("topics"),
  	userRole: state.getIn(['user', 'roles']).reduce((role, r) => role += r === 'student' || r === 'instructor' ? r : '', ''),
});

const mapDispatchToProps = dispatch => ({
	onClickIcon: (id) => dispatch(onClickIcon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggle);