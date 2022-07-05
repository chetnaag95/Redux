import { connect } from "react-redux";
import NewOrder from "./NewOrder";
import { actions } from "../../ducks/orders";

const mapDispatchToProps = (dispatch) => ({
    placeOrder: (order) => dispatch(actions.placeOrder(order))
})

export default connect(null, mapDispatchToProps)(NewOrder);
