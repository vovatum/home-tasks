import React from 'react';
import Wednesday from "./Wednesday";
import {connect} from "react-redux";
import {changeTheme, getPostRequest} from "../../store/wednesdayReducer";

class WednesdayContainer extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                <Wednesday {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    themes: state.wednesday.themes,
    response: state.wednesday.response
})

export default connect(mapStateToProps, {
    getPostRequest,
    changeTheme
})(WednesdayContainer)

