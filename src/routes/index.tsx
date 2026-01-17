import { createFileRoute } from '@tanstack/react-router';
import { FiFilter, FiDownload } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Create a ref for the dropdown container
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const materials = [
  {
    id: 1,
    materialTitle: "Data Structures Past Questions (2023)",
    materialType: "Past Questions",
    course: {
      courseId: "CS201",
      courseName: "Data Structures",
    },
    fileUrl: "/lecture-1-Introduction-to-HCI.pdf"
  },
  {
    id: 2,
    materialTitle: "Introduction to Algorithms Lecture Notes",
    materialType: "Lecture Note",
    course: {
      courseId: "CS202",
      courseName: "Algorithms",
    },
    fileUrl: "/lecture-1-Introduction-to-HCI.pdf"
  },
  {
    id: 3,
    materialTitle: "Computer Organization Study Guide",
    materialType: "Study Guide",
    course: {
      courseId: "CS203",
      courseName: "Computer Organization",
    },
    fileUrl: "/lecture-1-Introduction-to-HCI.pdf"
  },
  {
    id: 4,
    materialTitle: "Operating Systems Assignment 1",
    materialType: "Assignment",
    course: {
      courseId: "CS301",
      courseName: "Operating Systems",
    },
    fileUrl: "/lecture-1-Introduction-to-HCI.pdf"
  },
  {
    id: 5,
    materialTitle: "Database Systems Lecture Notes",
    materialType: "Lecture Note",
    course: {
      courseId: "CS302",
      courseName: "Database Systems",
    },
    fileUrl: "/lecture-1-Introduction-to-HCI.pdf"
  },
  {
    id: 6,
    materialTitle: "Software Engineering Past Questions",
    materialType: "Past Questions",
    course: {
      courseId: "CS303",
      courseName: "Software Engineering",
    },
    fileUrl: "/lecture-1-Introduction-to-HCI.pdf"
  },
  {
    id: 7,
    materialTitle: "Artificial Intelligence Study Guide",
    materialType: "Study Guide",
    course: {
      courseId: "CS401",
      courseName: "Artificial Intelligence",
    },
    fileUrl: "/lecture-1-Introduction-to-HCI.pdf"
  },
];

  // Get unique material types + "All" at the beginning
const filteredOptions = ["All", ...Array.from(new Set(materials.map(m => m.materialType)))];


  const filtered = filter.trim() === ""
    ? materials
    : materials.filter(material =>
        material.materialType.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Course Materials</h2>
          <p style={{ color: '#4B5563' }}>Browse and download shared materials</p>
        </div>

        {/* Filter Button & Dropdown */}
        <div style={{ position: "relative" }} ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '7px 10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'transparent',
              border: '1px solid #D1D5DB',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            <FiFilter size={20} />
            Filter
          </button>

          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: -20,
                marginTop: "5px",
                border: "1px solid #D1D5DB",
                borderRadius: "5px",
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                zIndex: 100,
                width: "200px",
              }}
            >
              <ul style={{ listStyle: "none", padding: "10px", margin: 0 , }}>
                {filteredOptions.map(option => (
                  <li
                    key={option}
                    className='optlist'
                    style={{
                      padding: "5px 10px",
                      cursor: "pointer",
                      borderRadius: "4px",
                      marginBottom: "4px",
                      borderStyle: 'dotted'
                    }}
                    onClick={() => {
                      setFilter(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Materials List */}
      <div style={{ marginTop: "20px" }}>
        {filtered.map(material => (
          <div
            key={material.id}
            className='homeContent'
          >
            <div>
              <h3 style={{ marginBottom: "6px" }}>
                {material.course.courseName} | {material.materialTitle}
              </h3>

              <p style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6B7280", margin: 0 }}>
                <span style={{ color: "blue", fontWeight: 500 }}>{material.course.courseId}</span>
                <span style={{ color: "#9CA3AF", fontSize: "18px" }}>•</span>
                <span>{material.materialType}</span>
              </p>
            </div>

            <a href={material.fileUrl} download>
              <button
                className='downloadbtn'
                style={{
                  backgroundColor: "blue",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "0.3s ease-in-out",
                }}
              >
                <FiDownload size={18} />
                Download
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
