import React from "react";
import { useState, useEffect } from "react";
import { getAllStudents, addStudent, updateStudent, deleteStudent } from "./studentService";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
function App() {
  const [students, setStudents] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchStudents = () => {
    getAllStudents()
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddOrUpdate = (student) => {
    if (student.id) {
      updateStudent(student.id, student).then(fetchStudents);
    } else {
      addStudent(student).then(fetchStudents);
    }
    setEditData(null);
  };

  const handleDelete = (id) => {
    deleteStudent(id).then(fetchStudents);
  };

  const handleEdit = (student) => {
    setEditData(student);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Student Management System</h1>
        <StudentForm onSubmit={handleAddOrUpdate} initialData={editData} />
        <StudentList students={students} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
