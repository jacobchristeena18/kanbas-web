import { Link } from "react-router-dom";
// import * as db from "../Database";
import { courses } from "../Database";
export default function Dashboard() {
//   return (
//       <div id="wd-dashboard">
//           <h1 id="wd-dashboard-title">Dashboard</h1>
//           <hr />
//           <h2 id="wd-dashboard-published">Published Courses (7)</h2>
//           <hr />
//           <div id="wd-dashboard-courses" className="row">
//           <div className="row row-cols-1 row-cols-md-5 g-4">
//           <div className="wd-dashboard-course col" style={{ width: "250px" }}>
//                   <div className="card">
//                       <img src="/images/react.png" className="card-img-top" alt="React JS" width="300px" height="150px"/>
//                       <div className="card-body">
//                           <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                               CS1234 React JS
//                           </a>
//                           <p className="wd-dashboard-course-title card-text">
//                               Full Stack software developer
//                           </p>
//                           <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
//                       </div>
//                   </div>
//               </div>
//               <div className="wd-dashboard-course col" style={{ width: "250px" }}>
//                   <div className="card">
//                       <img src="/images/javaScript.png" className="card-img-top" alt="JavaScript" width="300px" height="150px"/>
//                       <div className="card-body">
//                           <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                               CS1235 JavaScript
//                           </a>
//                           <p className="wd-dashboard-course-title card-text">
//                               Master JavaScript
//                           </p>
//                           <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary">Go</a>
//                       </div>
//                   </div>
//               </div>
//               <div className="wd-dashboard-course col" style={{ width: "250px" }}>
//                   <div className="card">
//                       <img src="/images/html&css.png" className="card-img-top" alt="HTML & CSS" width="300px" height="150px" />
//                       <div className="card-body">
//                           <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1236/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                               CS1236 HTML & CSS for Everyone
//                           </a>
//                           <p className="wd-dashboard-course-title card-text">
//                               Web Concepts of Design
//                           </p>
//                           <a href="#/Kanbas/Courses/1236/Home" className="btn btn-primary">Go</a>
//                       </div>
//                   </div>
//               </div>
//               <div className="wd-dashboard-course col" style={{ width: "250px" }}>
//                   <div className="card">
//                       <img src="/images/nodejs.png" className="card-img-top" alt="Node.js" width="300px" height="150px" />
//                       <div className="card-body">
//                           <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1237/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                               CS1237 Node.js Basics
//                           </a>
//                           <p className="wd-dashboard-course-title card-text">
//                               Backend Design
//                           </p>
//                           <a href="#/Kanbas/Courses/1237/Home" className="btn btn-primary">Go</a>
//                       </div>
//                   </div>
//               </div>
//               <div className="wd-dashboard-course col" style={{ width: "250px" }}>
//                   <div className="card">
//                       <img src="/images/sql.jpg" className="card-img-top" alt="SQL"  width="300px" height="150px"/>
//                       <div className="card-body">
//                           <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1238/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                               CS1238 Database SQL
//                           </a>
//                           <p className="wd-dashboard-course-title card-text">
//                               Database Basics
//                           </p>
//                           <a href="#/Kanbas/Courses/1238/Home" className="btn btn-primary">Go</a>
//                       </div>
//                   </div>
//               </div>
//               <div className="wd-dashboard-course col" style={{ width: "250px" }}>
//                   <div className="card">
//                       <img src="/images/python.png" className="card-img-top" alt="Python" width="300px" height="150px"/>
//                       <div className="card-body">
//                           <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1239/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                               CS1239 Python for Computer Engineers
//                           </a>
//                           <p className="wd-dashboard-course-title card-text">
//                               Become a Data Analyst
//                           </p>
//                           <a href="#/Kanbas/Courses/1239/Home" className="btn btn-primary">Go</a>
//                       </div>
//                   </div>
//               </div>
//               <div className="wd-dashboard-course col" style={{ width: "250px" }}>
//                   <div className="card">
//                       <img src="/images/ML.jpg" className="card-img-top" alt="Machine Learning" width="300px" height="150px" />
//                       <div className="card-body">
//                           <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1240/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                               CS1240 Machine Learning Masters
//                           </a>
//                           <p className="wd-dashboard-course-title card-text">
//                               New to AI
//                           </p>
//                           <a href="#/Kanbas/Courses/1240/Home" className="btn btn-primary">Go</a>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//       </div>
//     );

return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/react.png" height="{160}" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

