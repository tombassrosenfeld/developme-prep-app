import { connect } from "react-redux";
import Module from "../components/Module";

const mapStateToProps = state => ({
    modules: state.get("modules"),
});

export default connect(mapStateToProps)(Module);