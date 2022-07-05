import { connect } from "react-redux";
import OrderOverview from "./OrderOverview";
import { actions } from "../../ducks/orders"

const mapStateToProps = (state) => ({
    orders: state.orders
})

const mapDispatchToProps = (dispatch) => ({
    fulfillOrder : (index) => dispatch(actions.fulfillOrder(index)),
    payForOrder: (index) => dispatch(actions.payForOrder(index)),
    cancelOrder: (index) => dispatch(actions.cancelOrder(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderOverview)