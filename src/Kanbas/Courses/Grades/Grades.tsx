import React from 'react';
import { Form, Table, Button, Dropdown } from 'react-bootstrap';
import { FaFileImport, FaFileExport } from 'react-icons/fa';
import './Grades.css';

export default function Grades() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-end mb-3">
        <div className="d-flex justify-content-end w-100">
          <Form.Group className="me-3">
            <Form.Label>Student Names</Form.Label>
            <Form.Control type="text" placeholder="Search Students" className="form-control" />
          </Form.Group>
          <Form.Group className="me-3">
            <Form.Label>Assignment Names</Form.Label>
            <Form.Control type="text" placeholder="Search Assignments" className="form-control" />
          </Form.Group>
          <Button variant="primary" className="align-self-end me-2">
            Apply Filters
          </Button>
        </div>
        <div className="d-flex justify-content-end w-100 mt-2">
          <Button variant="secondary" className="me-2">
            <FaFileImport /> Import
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              <FaFileExport /> Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Export Option 1</Dropdown.Item>
              <Dropdown.Item href="#">Export Option 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP</th>
              <th>A2 HTML</th>
              <th>A3 CSS</th>
              <th>A4 BOOTSTRAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Adams</td>
              <td>100% </td>
              <td>100%</td>
              <td>100%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td>Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>92.18%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <Form.Control type="number" defaultValue="88.03" />
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td>Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Siran Cao</td>
              <td>100% </td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
