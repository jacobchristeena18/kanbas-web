import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaCircle, FaFileAlt, FaPen, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsThreeDotsVertical, BsCircle, BsGripVertical } from "react-icons/bs";
import * as db from "../../Database";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControlButtons from "./ModulesControlButtons";
import "../../styles.css";

import assignmentsData from "../../Database/assignments.json";
import { Assignment } from "./AssignmentType";
import { FaTrashCan } from "react-icons/fa6";

export default function AssignmentView({
  assignments,
  deleteAssignment,
}: {
  assignments: Assignment[];
  deleteAssignment: Function;
}) {
  const { cid } = useParams<{ cid: string }>();

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <ul id="wd-assignment-list" className="list-group">
      {filteredAssignments.map((assignment) => (
        <li
          key={assignment._id}
          className="wd-assignment-list-item list-group-item d-flex align-items-center"
        >
          <div className="wd-vertical-bar"></div>
          <div className="d-flex align-items-center flex-grow-1">
            <BsGripVertical className="fs-5 text-secondary me-2" />
            <FaFileAlt className="text-success me-2" />
            <div className="assignment-details">
              <Link
                className="wd-assignment-link"
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title} <br />
              </Link>
              <span className="text-red">
                Multiple Modules <br />
              </span>
              <span className="text-muted">
                Not available until May 6 at 12:00am <br />
                Due May 13 at 11:59pm | 100 pts
              </span>
            </div>
          </div>
          <div className="wd-assignment-actions ms-auto d-flex align-items-center">
            <FaPen
              className="text-primary me-4"
              style={{ cursor: "pointer" }}
              onClick={()=>
                window.location.href = window.location.href + "/"+ assignment._id
              }
            />

            <FaTrashCan
              className="text-danger me-4"
              style={{ cursor: "pointer" }}
              onClick={() => {
                // popup dialog to confirm delete
                deleteAssignment(assignment._id);
              }}
            />
            <FaCheckCircle className="text-success me-2" />
          </div>
        </li>
      ))}
    </ul>

  );
}
