"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const NewTaskForm_1 = __importDefault(require("../NewTaskForm/NewTaskForm"));
const TaskList_1 = __importDefault(require("../TaskList/TaskList"));
const Timer_1 = __importDefault(require("../Timer/Timer"));
require("./App.css");
const App = () => {
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [filter, setFilter] = (0, react_1.useState)('all');
    const filteredTasks = (item) => {
        setFilter(item);
        return;
    };
    maxId = 100;
    state = {
        tasks: [],
        activeFilter: 'all',
        filters: [
            { label: 'All', param: 'all', active: true },
            { label: 'Active', param: 'active', active: false },
            { label: 'Completed', param: 'completed', active: false },
        ],
    };
    createTask = (label) => ({
        description: label,
        createTime: new Date(),
        completed: false,
        editing: false,
        id: this.maxId++,
    });
    toggleProperty = (arr, id, prop) => {
        const elIdx = arr.findIndex((el) => el.id === id);
        const el = arr[elIdx];
        const newEl = Object.assign(Object.assign({}, el), { [prop]: !el[prop] });
        return [...arr.slice(0, elIdx), newEl, ...arr.slice(elIdx + 1, arr.length)];
    };
    getFilteredTasks = () => {
        const { activeFilter, tasks } = this.state;
        if (activeFilter === 'all') {
            return tasks;
        }
        if (activeFilter === 'completed') {
            return tasks.filter((task) => task.completed);
        }
        if (activeFilter === 'active') {
            return tasks.filter((task) => !task.completed);
        }
    };
    completeTaskHandler = (id) => {
        this.setState((state) => ({
            tasks: this.toggleProperty(state.tasks, id, 'completed'),
        }));
    };
    deleteTaskHandler = (id) => {
        this.setState(() => ({
            tasks: this.state.tasks.filter((task) => task.id !== id),
        }));
    };
    editStartTaskHandler = (id) => {
        this.setState((state) => {
            const tasks = state.tasks.map((task) => (Object.assign(Object.assign({}, task), { editing: task.id === id })));
            return {
                tasks,
            };
        });
    };
    editEndTaskHandler = (value, id) => {
        this.setState((state) => {
            const tasks = state.tasks.map((task) => {
                if (task.id !== id) {
                    return task;
                }
                else {
                    return Object.assign(Object.assign({}, task), { editing: false, description: value });
                }
            });
            return {
                tasks,
            };
        });
    };
    onTaskCreate = (label) => {
        this.setState((state) => ({ tasks: [this.createTask(label), ...state.tasks] }));
    };
    onClearActive = () => {
        this.setState((state) => ({
            tasks: state.tasks.filter((task) => !task.completed),
        }));
    };
    filterHandler = (param) => {
        this.setState((state) => {
            const filters = state.filters.map((filter) => (Object.assign(Object.assign({}, filter), { active: filter.param === param })));
            return {
                filters,
                activeFilter: param,
            };
        });
    };
    render();
    {
        const { tasks, filters } = this.state;
        const filteredTasks = this.getFilteredTasks();
        const todoCount = tasks.filter((task) => !task.completed).length;
        return (<section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm_1.default onTaskCreate={this.onTaskCreate}/>
          <Timer_1.default />
        </header>
        <section className="main">
          <TaskList_1.default tasks={filteredTasks} onComplete={this.completeTaskHandler} onDeleted={this.deleteTaskHandler} onEditStart={this.editStartTaskHandler} onEditEnd={this.editEndTaskHandler}/>
        </section>
        <Footer_1.default todoCount={todoCount} onFilter={this.filterHandler} filters={filters} onClearActive={this.onClearActive}/>
      </section>);
    }
};
