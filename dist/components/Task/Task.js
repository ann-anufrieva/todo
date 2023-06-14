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
const date_fns_1 = require("date-fns");
const prop_types_1 = __importDefault(require("prop-types"));
require("./Task.css");
class Task extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            taskLabel: this.props.description,
        };
        this.onTaskEdit = (e) => {
            this.setState({
                taskLabel: e.target.value,
            });
        };
        this.onSubmitHandler = (e) => {
            e.preventDefault();
            const { onEditEnd, id } = this.props;
            const { taskLabel } = this.state;
            onEditEnd(taskLabel, id);
        };
        this.getEditField = () => {
            const { editing } = this.props;
            if (editing) {
                return (<form onSubmit={this.onSubmitHandler}>
          <input type="text" className="edit" value={this.state.taskLabel} onChange={this.onTaskEdit}/>
        </form>);
            }
        };
    }
    render() {
        const { completed, editing, id, description, createTime, onComplete, onEditStart, onDeleted } = this.props;
        const classNames = [completed ? 'completed' : '', editing ? 'editing' : ''].join(' ');
        return (<li className={classNames} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox" id={`${id}__check`} onChange={onComplete} checked={completed}/>
          <label htmlFor={`${id}__check`}>
            <span className="description">{description}</span>
            <span className="created">{(0, date_fns_1.formatDistanceToNow)(createTime)}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditStart}/>
          <button className="icon icon-destroy" onClick={onDeleted}/>
        </div>

        {this.getEditField()}
      </li>);
    }
}
Task.defaultProps = {
    completed: false,
    editing: false,
    id: 100,
    description: '',
    createTime: new Date(),
    onComplete: () => { },
    onEditStart: () => { },
    onDeleted: () => { },
};
Task.propTypes = {
    completed: prop_types_1.default.bool,
    editing: prop_types_1.default.bool,
    id: prop_types_1.default.number,
    description: prop_types_1.default.string,
    createTime: prop_types_1.default.instanceOf(Date),
    onComplete: prop_types_1.default.func,
    onEditStart: prop_types_1.default.func,
    onDeleted: prop_types_1.default.func,
};
exports.default = Task;
