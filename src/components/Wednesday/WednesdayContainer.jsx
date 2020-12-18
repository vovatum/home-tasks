import React from 'react';
import Wednesday from "./Wednesday";
import {connect} from "react-redux";
import {changeTheme, setRequest} from "../../store/wednesdayReducer";

class WednesdayContainer extends React.Component {

    render() {
        return (
            <div>
                <Wednesday {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    themes: state.wednesday.themes,
    response: state.wednesday.response,
    isFetching: state.wednesday.isFetching,
    class: state.wednesday.class
})

export default connect(mapStateToProps, {
    setRequest,
    changeTheme
})(WednesdayContainer)

