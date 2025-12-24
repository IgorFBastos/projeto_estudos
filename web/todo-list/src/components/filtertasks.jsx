import PropTypes from 'prop-types'

const Filtertasks = (props) => {
    return (
        <form>
            <label htmlFor="filter"><h2>Filter:</h2></label>
            <select name="filter" id="filter" onChange={props.onFilteredTask}>
                <option value="all">All tasks</option>
                <option value="done">Done</option>
                <option value="notdone">Not Done</option>
            </select>
        </form>
    )
}

Filtertasks.propTypes = {
    onFilteredTask: PropTypes.func
}

export default Filtertasks


