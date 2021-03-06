import React from 'react'
import {Form, Icon} from 'semantic-ui-react'

const SearchForm = (props) => {
    const renderRadiusOptions = () => {
        return [5,10,15,20].map(num => {
            return {key: num, value: num * 1600, text: `${num} Miles`}
        })
    }
    const renderSelectOptions = () => {
        return selectOptions.map(option => {
            return {key: option, value: option, text: option.replace(/_/g, " ")}
        })
    }

    const handleOnSelectRadius = (event) => {
        props.handleOnSelect("radius", parseInt(event.target.innerText)*1600)
    }

    const handleOnSelectType = (event) => {
        props.handleOnSelect("type", event.target.innerText.replace(/ /g, "_"))
    }

    const handleOnClick = (event) => {
        event.preventDefault()
        props.handleOnSearch()
    }

    return (
        <Form className="search-form" onChange={props.handleOnChange}>
            <Form.Field>
                <label>Search</label>
                <input placeholder="Keyword" id="query"/>
            </Form.Field>
            <Form.Group >
                <Form.Select placeholder="Activity Type" options={renderSelectOptions()} name="type" onChange={handleOnSelectType} />
                <Form.Select placeholder="Radius of Activity" options={renderRadiusOptions()} name="radius" onChange={handleOnSelectRadius} />
            </Form.Group>
            <Form.Button onClick={ handleOnClick }><Icon name="search" />Search</Form.Button>
        </Form>
    )
}

const selectOptions = [
    "accounting",
    "airport",
    "amusement_park",
    "aquarium",
    "art_gallery",
    "atm",
    "bakery",
    "bank",
    "bar",
    "beauty_salon",
    "bicycle_store",
    "book_store",
    "bowling_alley",
    "bus_station",
    "cafe",
    "campground",
    "car_dealer",
    "car_rental",
    "car_repair",
    "car_wash",
    "casino",
    "cemetery",
    "church",
    "city_hall",
    "clothing_store",
    "convenience_store",
    "courthouse",
    "dentist",
    "department_store",
    "doctor",
    "drugstore",
    "electrician",
    "electronics_store",
    "embassy",
    "fire_station",
    "florist",
    "funeral_home",
    "furniture_store",
    "gas_station",
    "grocery_or_supermarket",
    "gym",
    "hair_care",
    "hardware_store",
    "hindu_temple",
    "home_goods_store",
    "hospital",
    "insurance_agency",
    "jewelry_store",
    "laundry",
    "lawyer",
    "library",
    "light_rail_station",
    "liquor_store",
    "local_government_office",
    "locksmith",
    "lodging",
    "meal_delivery",
    "meal_takeaway",
    "mosque",
    "movie_rental",
    "movie_theater",
    "moving_company",
    "museum",
    "night_club",
    "painter",
    "park",
    "parking",
    "pet_store",
    "pharmacy",
    "physiotherapist",
    "plumber",
    "police",
    "post_office",
    "primary_school",
    "real_estate_agency",
    "restaurant",
    "roofing_contractor",
    "rv_park",
    "school",
    "secondary_school",
    "shoe_store",
    "shopping_mall",
    "spa",
    "stadium",
    "storage",
    "store",
    "subway_station",
    "supermarket",
    "synagogue",
    "taxi_stand",
    "tourist_attraction",
    "train_station",
    "transit_station",
    "travel_agency",
    "university",
    "veterinary_care",
    "zoo"
]

export default SearchForm