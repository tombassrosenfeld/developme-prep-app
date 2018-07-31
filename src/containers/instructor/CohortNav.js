import { connect } from "react-redux";
import SideNav from "../../components/SideNav";
import { onClickIcon } from "../../data/actions";
import { getUserRole } from "../../utilities/utilities";

const mapStateToProps = state => ({
    navItems: state.get('root').get("cohorts"),
  	userRole: getUserRole(state.get('root').getIn(['user', 'roles'])),
});

const mapDispatchToProps = dispatch => ({
	onClickIcon: (id) => dispatch(onClickIcon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);