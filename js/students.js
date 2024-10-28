// Sample student data
const students = [
  { name: "Gerardo Huizar", grade: "4ºC" },
  { name: "Alice Johnson", grade: "4ºC" },
  { name: "Bob Smith", grade: "4ºA" },
  { name: "Charlie Brown", grade: "4ºB" },
  { name: "David Lee", grade: "4ºD" },
  { name: "Emma Davis", grade: "4ºA" },
  { name: "Frank Wilson", grade: "4ºB" },
  { name: "Grace Taylor", grade: "4ºC" },
  { name: "Henry Martin", grade: "4ºD" },
  { name: "Ivy Chen", grade: "4ºC" },
  { name: "Jack Thompson", grade: "4ºD" },
  { name: "Kate Anderson", grade: "4ºB" },
  { name: "Liam Murphy", grade: "4ºA" },
  { name: "Mia Garcia", grade: "4ºA" },
  { name: "Noah Rodriguez", grade: "4ºB" },
  { name: "Olivia Martinez", grade: "4ºC" },
  { name: "Peter Kim", grade: "4ºD" },
  { name: "Quinn Foster", grade: "4ºC" },
  { name: "Rachel Patel", grade: "4ºA" },
  { name: "Samuel Lee", grade: "4ºC" },
  { name: "Tina Nguyen", grade: "4ºD" },
];

let currentPage = 1;
let pageSize = 10;

const nameFilterInput = document.getElementById("nameFilter");
const gradeFilterInput = document.getElementById("gradeFilter");
const pageSizeSelect = document.getElementById("pageSize");
const studentTable = document
  .getElementById("studentTable")
  .getElementsByTagName("tbody")[0];
const paginationDiv = document.getElementById("pagination");

function filterStudents() {
  const nameFilter = nameFilterInput.value.toLowerCase();
  const gradeFilter = gradeFilterInput.value.toLowerCase();

  return students.filter(
    (student) =>
      student.name.toLowerCase().includes(nameFilter) && student.grade.toLowerCase().includes(gradeFilter)
  );
}

function displayStudents() {
  const filteredStudents = filterStudents();
  const totalPages =
    pageSize === "all" ? 1 : Math.ceil(filteredStudents.length / pageSize);

  studentTable.innerHTML = "";

  const start = pageSize === "all" ? 0 : (currentPage - 1) * pageSize;
  const end =
    pageSize === "all" ? filteredStudents.length : start + parseInt(pageSize);

  for (let i = start; i < end && i < filteredStudents.length; i++) {
    const student = filteredStudents[i];
    const row = studentTable.insertRow();
    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = student.grade;
  }

  updatePagination(totalPages);
}

function updatePagination(totalPages) {
  paginationDiv.innerHTML = "";

  if (pageSize === "all") return;

  const prevButton = document.createElement("button");
  prevButton.textContent = "Anterior";
  prevButton.setAttribute("data-i18n", "previous");
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayStudents();
    }
  });
  paginationDiv.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.disabled = currentPage === i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayStudents();
    });
    paginationDiv.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.textContent = "Siguiente";
  nextButton.setAttribute("data-i18n", "next");
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayStudents();
    }
  });
  paginationDiv.appendChild(nextButton);
}

nameFilterInput.addEventListener("input", () => {
  currentPage = 1;
  displayStudents();
});

gradeFilterInput.addEventListener("input", () => {
  currentPage = 1;
  displayStudents();
});

pageSizeSelect.addEventListener("change", (e) => {
  pageSize = e.target.value;
  currentPage = 1;
  displayStudents();
});

// Initial display
displayStudents();
