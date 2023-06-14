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
const prop_types_1 = __importDefault(require("prop-types"));
const TaskFilter_1 = __importDefault(require("../TaskFilter/TaskFilter"));
require("./Footer.css");
class Footer extends react_1.Component {
    render() {
        const { todoCount, onFilter, onClearActive, filters } = this.props;
        return (<footer className="footer">
        <span className="todo-count">{todoCount} items left</span>

        <TaskFilter_1.default onFilter={onFilter} filters={filters}/>

        <button className="clear-completed" onClick={onClearActive}>
          Clear completed
        </button>
      </footer>);
    }
}
Footer.defaultProps = {
    todoCount: 0,
    onFilter: () => { },
    onClearActive: () => { },
};
Footer.propTypes = {
    todoCount: prop_types_1.default.number,
    onFilter: prop_types_1.default.func,
    onClearActive: prop_types_1.default.func,
};
exports.default = Footer;
