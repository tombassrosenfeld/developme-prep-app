import { connect } from "react-redux";
import ModulesNav from "../components/ModulesNav";

const mapStateToProps = state => ({
    modules: state.get("modules"),
});

export default connect(mapStateToProps)(ModulesNav);