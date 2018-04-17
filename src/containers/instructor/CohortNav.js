import { connect } from "react-redux";
import MenuToggle from "../../components/MenuToggle";
import { onClickIcon } from "../../data/actions";
import { getUserRole } from "../../utilities/utilities";

const mapStateToProps = state => ({
    navItems: state.get("cohorts"),
  	userRole: getUserRole(state.getIn(['user', 'roles'])),
});

const mapDispatchToProps = dispatch => ({
	onClickIcon: (id) => dispatch(onClickIcon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggle);