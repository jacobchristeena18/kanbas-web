import { FaPlus } from 'react-icons/fa';
import LessonControlButtons from './LessonControlButtons';
import ModulesControlButtons from './ModulesControlButtons';
import AssignmentSearch from './AssignmentSearch';
import AssignmentView from './AssignmentView';
import '../../styles.css';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <AssignmentSearch />
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 id="wd-assignments-title">
          ASSIGNMENTS
        </h3>
        <span className="float-end">40% of Total</span>
      </div>
      <AssignmentView />
    </div>
  );
}