import PropTypes from 'prop-types'

const SearchTasks = (props) => {
    return (
        <form>
            <h2>Search:</h2>
            <input type="text" placeholder='Search' onChange={(e) => props.onSearchTask(e.target.value)}/>
        </form>
    )
}


SearchTasks.propTypes = {
    onSearchTask: PropTypes.func.isRequired
}

export default SearchTasks
