import { connect } from "react-redux";
import App from "../components/App";
import { getModules } from "../data/actions";

const mapStateToProps = state => ({
    isLoaded: state.get("isLoaded"),
});

const mapDispatchToProps = dispatch => ({
    getModules: () => getModules(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);