import React from 'react';
import DisplayActivitiesContainer from './containers/DisplayActivitiesContainer'

export default class CreateEvent extends React.Component {

    render() {
        return (
            <DisplayActivitiesContainer 
                handleLogin={this.props.handleLogin}
                eventId={this.props.eventId}
                />
        )
    }
} 

CreateEvent.defaultProps = {
    event: ''
}