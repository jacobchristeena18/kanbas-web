import { useParams, Link } from "react-router-dom";

import {assignments} from "../../Database" 
import assignmentsData from '../../Database/assignments.json';

// export default function Editor() {
//   const {id} = useParams();
//   const curr_assignment = assignments.find((a) => a._id === id);


//   return (
//     <div id="wd-assignments-editor" className="container mt-4">
//       <div className="row mb-3">
//         <div className="col">
//           <label htmlFor="wd-name" className="form-label">{curr_assignment?.title}</label>
//           <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col">
//           <label htmlFor="wd-description" className="form-label">Description</label>
//           <textarea 
//             id="wd-description" 
//             cols={30} 
//             rows={10} 
//             placeholder="Enter the assignment description"
//             title="Assignment Description"
//             className="form-control"
//           >
//             The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
//             - Your full name and section
//             - Links to each of the lab assignments
//             - Link to the Kanbas application
//             - Links to all relevant source code repositories
//             The Kanbas application should include a link to navigate back to the landing page.
//           </textarea>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-6">
//           <label htmlFor="wd-points" className="form-label">Points</label>
//           <input id="wd-points" value={100} className="form-control" />
//         </div>
//         <div className="col-6">
//           <label htmlFor="wd-group" className="form-label">Assignment Group</label>
//           <select id="wd-group" className="form-control">
//             <option value="ASSIGNMENTS">Assignments</option>
//             <option value="QUIZZES">Quizzes</option>
//           </select>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-6">
//           <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
//           <select id="wd-display-grade-as" className="form-control">
//             <option value="percentage">Percentage</option>
//             <option value="points">Points</option>
//           </select>
//         </div>
//         <div className="col-6">
//           <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//           <select id="wd-submission-type" className="form-control">
//             <option value="online">Online</option>
//           </select>
//           <div className="form-check">
//             <input type="checkbox" id="wd-website-url" className="form-check-input" />
//             <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
//           </div>
//           <div className="form-check">
//             <input type="checkbox" id="wd-text-entry" className="form-check-input" />
//             <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
//           </div>
//           <div className="form-check">
//             <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
//             <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
//           </div>
//           <div className="form-check">
//             <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
//             <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
//           </div>
//           <div className="form-check">
//             <input type="checkbox" id="wd-file-upload" className="form-check-input" />
//             <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
//           </div>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col">
//           <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
//           <input id="wd-assign-to" value="Everyone" className="form-control mb-2" />
//           <label htmlFor="wd-due-date" className="form-label">Due</label>
//           <input type="date" id="wd-due-date" className="form-control mb-2" />
//           <label htmlFor="wd-available-from" className="form-label">Available from</label>
//           <input type="date" id="wd-available-from" className="form-control mb-2" />
//           <label htmlFor="wd-available-until" className="form-label">Until</label>
//           <input type="date" id="wd-available-until" className="form-control mb-2" />
//         </div>
//       </div>

//       <div className="row">
//         <div className="col text-end ">
//           <button className="btn btn-secondary float-end me-2">Cancel</button>
//           <button className="btn btn-success float-end">Save</button>
//         </div>
//       </div>
//     </div>
//   );
// }
type Assignment = {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  assignmentGroup: string;
  submissionType: string;
};

export default function Editor() {
  const { id, cid } = useParams<{ id: string; cid: string }>();
  const assignments: Assignment[] = assignmentsData as Assignment[];
  const curr_assignment = assignments.find((a) => a._id === id);
  const submissionType = ["Website URL", "Text Entry", "Media Recordings", "Student Annotation", "File Uploads"];

  if (!curr_assignment) {
    return <div>Assignment not found</div>;
  }

  const AssignmentTitleDesc = () => {
    return (
      <>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name" className="form-label">Title</label>
          <input id="wd-name" value={curr_assignment.title} className="form-control" readOnly />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea 
            id="wd-description" 
            cols={30} 
            rows={10} 
            placeholder="Enter the assignment description"
            title="Assignment Description"
            className="form-control"
            value={curr_assignment.description}
            readOnly
          ></textarea>
        </div>
      </div>
      </>
    )
  }
  
  const AssingmentGroup = () => {
    return <div className="row mb-3">
      <div className="col-6">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input id="wd-points" value={curr_assignment.points} className="form-control" readOnly />
      </div>
      <div className="col-6">
        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        <select id="wd-group" className="form-control" value={curr_assignment.assignmentGroup} disabled>
          <option value="Assignments">Assignments</option>
          <option value="Quizzes">Quizzes</option>
          <option value="Tasks">Tasks</option>
          <option value="Exams">Exams</option>
        </select>
      </div>
    </div>;
  }

  const GradeDisplay = () =>{
    return <div className="row mb-3">
      <div className="col-6">
        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        <select id="wd-display-grade-as" className="form-control" value="points" disabled>
          <option value="percentage">Percentage</option>
          <option value="points">Points</option>
        </select>
      </div>
      <div className="col-6">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        <select id="wd-submission-type" className="form-control" value={curr_assignment.submissionType} disabled>
          <option value="online">Online</option>
        </select>
        <div className="form-check">
          {submissionType.map((type, index) => (
            <div key={index} className="form-check">
              <input type="checkbox" id={`wd-${type}`} className="form-check-input" checked={type !== "Student Annotation" && type !== "File Uploads"} />
              <label htmlFor={`wd-${type}`} className="form-check-label">{type}</label>
            </div>
          ))}
        </div>
      </div>
    </div>;
  }

  const AssignmentDates = () => {
    return <div className="row mb-3">
      <div className="col">
        <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
        <input id="wd-assign-to" value="Everyone" className="form-control mb-2" />
        <label htmlFor="wd-due-date" className="form-label">Due</label>
        <input type="date" id="wd-due-date" className="form-control mb-2" value={curr_assignment.dueDate} />
        <label htmlFor="wd-available-from" className="form-label">Available from</label>
        <input type="date" id="wd-available-from" className="form-control mb-2" value={curr_assignment.availableDate} />
        <label htmlFor="wd-available-until" className="form-label">Until</label>
        <input type="date" id="wd-available-until" className="form-control mb-2" value={curr_assignment.dueDate} />
      </div>
    </div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <AssignmentTitleDesc/>
      <AssingmentGroup/>
      <GradeDisplay/>
      <AssignmentDates/>
      <div className="row">
        <div className="col text-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary float-end me-2">Cancel</Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-success float-end">Save</Link>
        </div>
      </div>
    </div>
  );

}
  