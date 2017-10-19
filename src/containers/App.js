import { connect } from "react-redux";
import App from "../components/App";
import { dispatchData } from "../data/actions";

const mapStateToProps = state => ({
    isLoaded: state.get("isLoaded"),
});

const mapDispatchToProps = dispatch => ({
    dispatchData: (data) => dispatch(dispatchData(data)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);