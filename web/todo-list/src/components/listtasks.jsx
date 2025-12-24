import PropTypes from 'prop-types'
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Listtasks = (props) => {

    return (
        <ul>
            {props.tasks
            .filter((task) => props.filter === 'all' ? true : props.filter === 'done' ? task.done : !task.done)
            .filter((task) => task.desc.toLowerCase().includes(props.search.toLowerCase()))
            .map((task) => (
                <li className='itemTask' key={task.id} >
                    <p className={task.done ? 'taskDone' : ''}>{task.desc}</p>
                    <div>
                        <button className={task.done ? 'Button-Done-Selected' : 'Button-Done'} onClick={() => props.onTaskCompleted(task)}><FaCheck/></button>
                        <button className='Button-Delete' onClick={() => props.onDeleteTask(task)}><FaTrashAlt/></button>
                    </div>
                </li>
                )
            )}
        </ul>
        
    )
}

Listtasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    filter: PropTypes.string,
    search: PropTypes.string,
    onTaskCompleted: PropTypes.func,
    onDeleteTask: PropTypes.func
}

export default Listtasks;



