import React from "react";
const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Department</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="py-2 px-4 border-b">{s.name}</td>
              <td className="py-2 px-4 border-b">{s.dept}</td>
              <td className="py-2 px-4 border-b">{s.email}</td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => onEdit(s)}
                  className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => onDelete(s.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
