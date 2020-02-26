import React from 'react'
import { Button, Divider } from 'semantic-ui-react';

export default class LandingContainer extends React.Component {

    render() {
        return (
            <div className="landing-container" >
                <div className="landing-card" >
                    <h3>Welcome to <span>Kangaroo Hangout</span></h3>
                    <p>An app that let's you plug in an address and search for things nearby, having them displayed on a map. You can chain together multiple places grouped together in one event and set a date as well, allowing you to better plan a future outing to a new part of the city. Make a profile to get started!</p>
                    <Divider/>
                    <Button color="red">Sign Up!</Button>
                </div>
            </div>
        )
    }
}