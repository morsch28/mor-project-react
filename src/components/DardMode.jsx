import { useEffect, useState } from "react";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="btn bg-transparent fs-4"
    >
      <i className={`bi ${isDarkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
    </button>
  );
}

export default DarkMode;
