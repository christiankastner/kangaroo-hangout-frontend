import React from 'react'
import {Card, Icon, Button} from 'semantic-ui-react'

const ActivityCard = props => {
    const {image, name, types, icon, formatted_address} = props.activity
    // const formatTypes = types.reduce((total, type) => total + " " + type)
    const extra = () => {
        
        return(
            <>
                {props.handleAdd ? <Button primary onClick={() => props.handleAdd(props.activity)}><Icon name="plus" />Add</Button> 
                : <Button color="red" onClick={() => props.handleRemove(props.activity)}><Icon name="undo"/>Remove</Button>}
                <Button secondary>Inspect</Button>
            </>
        )
    }

    return (
        <div>
            <Card
                header={name}
                // meta={`Types: ${formatTypes}`}
                description={<span><img className="icon" src={icon}/>  {formatted_address}</span>}
                extra={extra()}
            />
        </div>
    )
}

ActivityCard.defaultProps = {
    activity: {
        name: "Cannot Find Name",
        icon: <Icon name="marker" />,
        types: "misc",
        formatted_address: "No Result Found"
    }
}

export default ActivityCard