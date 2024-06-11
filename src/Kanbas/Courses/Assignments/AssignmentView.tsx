import { FaCheckCircle, FaCircle, FaFileAlt } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsThreeDotsVertical, BsCircle, BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from './LessonControlButtons';
import ModulesControlButtons from './ModulesControlButtons';
import '../../styles.css';

export default function AssignmentView() {
  return (
    <ul id="wd-assignment-list" className="list-group">
      <li className="wd-assignment-list-item list-group-item d-flex align-items-center">
        <div className="wd-vertical-bar"></div> {/* Vertical bar */}
        <div className="d-flex align-items-center flex-grow-1">
          <BsGripVertical className="fs-5 text-secondary me-2" />
          <FaFileAlt className="text-success me-2" />
          <div className="assignment-details">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/111">
              A1 <br />
            </a>
            <span className="text-red">Multiple Modules <br /></span>
            <span className="text-muted">
              Not available until May 6 at 12:00am <BsThreeDotsVertical className="fs-4 ms-2" /><br />
              Due May 13 at 11:59pm | 100 pts
            </span>
          </div>
        </div>
        <div className="wd-assignment-actions ms-auto d-flex align-items-center">
          <FaCheckCircle className="text-success me-2" />
        </div>
      </li>
      <li className="wd-assignment-list-item list-group-item d-flex align-items-center">
        <div className="wd-vertical-bar"></div> {/* Vertical bar */}
        <div className="d-flex align-items-center flex-grow-1">
          <BsGripVertical className="fs-5 text-secondary me-2" />
          <FaFileAlt className="text-success me-2" />
          <div className="assignment-details">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/112">
              A2 <br />
            </a>
            <span className="text-red">Multiple Modules <br /></span>
            <span className="text-muted">
              Not available until May 13 at 12:00am <BsThreeDotsVertical className="fs-4 ms-2" /><br />
              Due May 20 at 11:59pm | 100 pts
            </span>
          </div>
        </div>
        <div className="wd-assignment-actions ms-auto d-flex align-items-center">
          <FaCheckCircle className="text-success me-2" />
        </div>
      </li>
      <li className="wd-assignment-list-item list-group-item d-flex align-items-center">
        <div className="wd-vertical-bar"></div> {/* Vertical bar */}
        <div className="d-flex align-items-center flex-grow-1">
          <BsGripVertical className="fs-5 text-secondary me-2" />
          <FaFileAlt className="text-success me-2" />
          <div className="assignment-details">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/113">
              A3 <br />
            </a>
            <span className="text-red">Multiple Modules <br /></span>
            <span className="text-muted">
              Not available until May 20 at 12:00am <BsThreeDotsVertical className="fs-4 ms-2" /><br />
              Due May 27 at 11:59pm | 100 pts
            </span>
          </div>
        </div>
        <div className="wd-assignment-actions ms-auto d-flex align-items-center">
          <FaCheckCircle className="text-success me-2" />
        </div>
      </li>
    </ul>
  );
}

