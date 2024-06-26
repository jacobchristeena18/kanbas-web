import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaCircle, FaFileAlt } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsThreeDotsVertical, BsCircle, BsGripVertical } from 'react-icons/bs';
import * as db from '../../Database';
import LessonControlButtons from './LessonControlButtons';
import ModulesControlButtons from './ModulesControlButtons';
import '../../styles.css';

import assignmentsData from '../../Database/assignments.json';

type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  assignmentGroup: string;
  submissionType: string;
};


export default function AssignmentView() {
  const { cid } = useParams<{ cid: string }>();
  const assignments: Assignment[] = assignmentsData as Assignment[]; 

  
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <ul id="wd-assignment-list" className="list-group">
      {filteredAssignments.map((assignment) => (
        <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex align-items-center">
          <div className="wd-vertical-bar"></div> 
          <div className="d-flex align-items-center flex-grow-1">
            <BsGripVertical className="fs-5 text-secondary me-2" />
            <FaFileAlt className="text-success me-2" />
            <div className="assignment-details">
              <Link className="wd-assignment-link" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                {assignment.title} <br />
              </Link>
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
      ))}
    </ul>
  
    // <ul id="wd-assignment-list" className="list-group">
    //   <li className="wd-assignment-list-item list-group-item d-flex align-items-center">
    //     <div className="wd-vertical-bar"></div> 
    //     <div className="d-flex align-items-center flex-grow-1">
    //       <BsGripVertical className="fs-5 text-secondary me-2" />
    //       <FaFileAlt className="text-success me-2" />
    //       <div className="assignment-details">
    //         <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/111">
    //           A1 <br />
    //         </a>
    //         <span className="text-red">Multiple Modules <br /></span>
    //         <span className="text-muted">
    //           Not available until May 6 at 12:00am <BsThreeDotsVertical className="fs-4 ms-2" /><br />
    //           Due May 13 at 11:59pm | 100 pts
    //         </span>
    //       </div>
    //     </div>
    //     <div className="wd-assignment-actions ms-auto d-flex align-items-center">
    //       <FaCheckCircle className="text-success me-2" />
    //     </div>
    //   </li>
    //   <li className="wd-assignment-list-item list-group-item d-flex align-items-center">
    //     <div className="wd-vertical-bar"></div> {/* Vertical bar */}
    //     <div className="d-flex align-items-center flex-grow-1">
    //       <BsGripVertical className="fs-5 text-secondary me-2" />
    //       <FaFileAlt className="text-success me-2" />
    //       <div className="assignment-details">
    //         <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/112">
    //           A2 <br />
    //         </a>
    //         <span className="text-red">Multiple Modules <br /></span>
    //         <span className="text-muted">
    //           Not available until May 13 at 12:00am <BsThreeDotsVertical className="fs-4 ms-2" /><br />
    //           Due May 20 at 11:59pm | 100 pts
    //         </span>
    //       </div>
    //     </div>
    //     <div className="wd-assignment-actions ms-auto d-flex align-items-center">
    //       <FaCheckCircle className="text-success me-2" />
    //     </div>
    //   </li>
    //   <li className="wd-assignment-list-item list-group-item d-flex align-items-center">
    //     <div className="wd-vertical-bar"></div> 
    //     <div className="d-flex align-items-center flex-grow-1">
    //       <BsGripVertical className="fs-5 text-secondary me-2" />
    //       <FaFileAlt className="text-success me-2" />
    //       <div className="assignment-details">
    //         <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/113">
    //           A3 <br />
    //         </a>
    //         <span className="text-red">Multiple Modules <br /></span>
    //         <span className="text-muted">
    //           Not available until May 20 at 12:00am <BsThreeDotsVertical className="fs-4 ms-2" /><br />
    //           Due May 27 at 11:59pm | 100 pts
    //         </span>
    //       </div>
    //     </div>
    //     <div className="wd-assignment-actions ms-auto d-flex align-items-center">
    //       <FaCheckCircle className="text-success me-2" />
    //     </div>
    //   </li>
    // </ul>
  
  );
}
