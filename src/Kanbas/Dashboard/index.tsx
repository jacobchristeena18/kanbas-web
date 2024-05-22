export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/react.png" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <img src="/images/javaScript.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
              CS1235 JavaScript
            </a>
            <p className="wd-dashboard-course-title">
              Master JavaScript 
            </p>
            <a href="#/Kanbas/Courses/1235/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/html&css.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1236/Home">
              CS1236 HTML & CSS for Everyone
            </a>
            <p className="wd-dashboard-course-title">
              Web Concepts of Design
            </p>
            <a href="#/Kanbas/Courses/1236/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/nodejs.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1237/Home">
              CS1237 Node.js Basics
            </a>
            <p className="wd-dashboard-course-title">
              Backend Design
            </p>
            <a href="#/Kanbas/Courses/1237/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/sql.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1238/Home">
              CS1238 Database SQL
            </a>
            <p className="wd-dashboard-course-title">
              Database Basics
            </p>
            <a href="#/Kanbas/Courses/1238/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/python.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1239/Home">
              CS1239 Python for Computer Engineers
            </a>
            <p className="wd-dashboard-course-title">
              Become a Data Analyst
            </p>
            <a href="#/Kanbas/Courses/1239/Home"> Go </a>
          </div>
          </div>
          <div className="wd-dashboard-course">
          <img src="/images/ML.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1240/Home">
              CS1240 Machine Learning Masters
            </a>
            <p className="wd-dashboard-course-title">
              New to AI
            </p>
            <a href="#/Kanbas/Courses/1240/Home"> Go </a>
          </div>
        </div>
        </div>
      </div>
  );}

  