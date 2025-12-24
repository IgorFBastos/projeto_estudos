
class Task {

    static lastID = 1;

    constructor(desc) {
        this.desc = desc;
        this.id = Task.lastID++;
        this.done = false;
    }

}


export default Task;