import React from "react";
import { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, initialData }) => {
  const [student, setStudent] = useState({ name: "", dept: "", email: "" });

  useEffect(() => {
    if (initialData) {
      setStudent(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
    setStudent({ name: "", dept: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <input name="name" value={student.name} onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Name" required />
      </div>
      <div className="mb-4">
        <input name="dept" value={student.dept} onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Department" required />
      </div>
      <div className="mb-4">
        <input name="email" value={student.email} onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Email" required />
      </div>
      <button type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {student.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default StudentForm;
