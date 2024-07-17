import {addAssignment, deleteAssignment, updateAssignment} from "./Assignments/reducer";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades/Grades";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";
import { useDispatch, useSelector } from "react-redux";
export default function Courses({ courses }: { courses: any[] }) {
  const { assignments } = useSelector((state: any) => state.assignmentreducer);
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation cid={cid ?? ""} />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route
              path="Assignments"
              element={
                <Assignments
                  assignments={assignments}
                  deleteAssignment={(assignmentId: string) =>
                    dispatch(deleteAssignment(assignmentId))
                  }
                />
              }
            />
            <Route
              path="Assignments/:id"
              element={
                <AssignmentEditor
                  addAssignment={(assignment: any) =>
                    dispatch(addAssignment(assignment))
                  }
                  updateAssignment={(updatedAssignment: any) =>
                    dispatch(updateAssignment(updatedAssignment))
                  }
                  assignments={assignments}
                />
              }
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
  
  