import PropTypes from 'prop-types'
import { FaPlus } from "react-icons/fa";

const FormTask = (props) => {

    return (
        <form className='Todo-NewTask-Container'>
            <h2>Add New Task:</h2>
            <div>
                <input className='InputValue' type="text" placeholder='New Task'/>
                <button onClick={(e) => {
                    e.preventDefault();
                    let desc = document.querySelector('.InputValue').value;
                    props.handleAddTask(desc);
                    document.querySelector('.InputValue').value = ""
                }}><FaPlus /></button>
            </div>
        </form>
    )
}


FormTask.propTypes = {
    handleAddTask: PropTypes.func.isRequired,
};


export default FormTask;