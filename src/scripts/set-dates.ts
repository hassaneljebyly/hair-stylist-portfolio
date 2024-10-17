export function updateYearsOfExperience() {
  const yearsOfExperienceElements = document.querySelectorAll(
    '.years-of-experience'
  );
  const currentYear = new Date().getFullYear();
  const yearOfStart = 2018;
  let newYearsOfExperience = currentYear - yearOfStart;
  if (yearsOfExperienceElements[0]) {
    yearsOfExperienceElements.forEach((ele) => {
      ele.innerHTML = '' + String(newYearsOfExperience);
    });
  }
}

export function setNewCopyRightDate() {
  let newCopyrightDate = new Date().getFullYear();
  const copyright = document.getElementById('copyright');
  if (copyright) {
    copyright.innerHTML = '' + String(newCopyrightDate);
  }
}
