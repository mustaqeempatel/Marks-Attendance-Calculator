function showCalculator(type) {
  document.getElementById("home").style.display = "none";
  if (type === "marks") {
    document.getElementById("marksCalc").style.display = "block";
  } else {
    document.getElementById("attCalc").style.display = "block";
  }
}

function goHome() {
  document.getElementById("home").style.display = "flex";
  document.getElementById("marksCalc").style.display = "none";
  document.getElementById("attCalc").style.display = "none";
}

function calculateMarks() {
  let f = [],
    m = [],
    totalFull = 0,
    totalGot = 0;
  for (let i = 1; i <= 5; i++) {
    f[i] = parseFloat(document.getElementById(`f${i}`).value) || 0;
    m[i] = parseFloat(document.getElementById(`m${i}`).value) || 0;
    totalFull += f[i];
    totalGot += m[i];
  }
  if (totalFull === 0) {
    document.getElementById("result").innerHTML = "Please enter full marks!";
    return;
  }
  let percentage = (totalGot / totalFull) * 100;
  let cgpa = percentage / 10;
  document.getElementById("result").innerHTML = `
        <b>Total Full Marks:</b> ${totalFull}<br>
        <b>Total Marks Got:</b> ${totalGot}<br>
        <b>Percentage:</b> ${percentage.toFixed(2)}%<br>
        <b>CGPA:</b> ${cgpa.toFixed(2)}
      `;
}

function calculateAttendance() {
  let t = [],
    a = [],
    totalClasses = 0,
    totalAttended = 0;
  let resultHTML = "";

  for (let i = 1; i <= 5; i++) {
    t[i] = parseFloat(document.getElementById(`t${i}`).value) || 0;
    a[i] = parseFloat(document.getElementById(`a${i}`).value) || 0;
    if (t[i] > 0) {
      let subjectPercent = (a[i] / t[i]) * 100;
      resultHTML += `<b>Subject ${i}:</b> ${subjectPercent.toFixed(2)}%<br>`;
    }
    totalClasses += t[i];
    totalAttended += a[i];
  }

  if (totalClasses === 0) {
    document.getElementById("attResult").innerHTML =
      "Please enter class details!";
    return;
  }

  let overallPercentage = (totalAttended / totalClasses) * 100;

  document.getElementById("attResult").innerHTML = `
        ${resultHTML}
        <hr>
        <b>Total Classes:</b> ${totalClasses}<br>
        <b>Total Attended:</b> ${totalAttended}<br>
        <b>Overall Attendance:</b> ${overallPercentage.toFixed(2)}%
      `;
}
