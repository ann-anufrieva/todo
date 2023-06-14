"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./TaskFilter.css");
const TaskFilter = (props) => {
    const { onFilter, filters } = props;
    return (<ul className="filters">
      {filters.map((filter) => (<li key={filter.param}>
          <button type="button" className={filter.active ? 'selected' : ''} onClick={() => onFilter(filter.param)}>
            {filter.label}
          </button>
        </li>))}
    </ul>);
};
exports.default = TaskFilter;
