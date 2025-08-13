let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2026, 0, 1, 0, 0);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  // if (endTime < todayTime) {
  //   clearInterval(i);
  //   window.location.href = "index1.html";
  if (endTime < todayTime) {
      clearInterval(i);
  
      fetch("index1.html")
          .then(res => res.text())
          .then(html => {
              // Tạo document tạm để parse
              let parser = new DOMParser();
              let doc = parser.parseFromString(html, "text/html");
  
              // Thay nội dung body
              document.body.innerHTML = doc.body.innerHTML;
  
              // Load lại tất cả script trong index1.html
              doc.querySelectorAll("script").forEach(oldScript => {
                  let newScript = document.createElement("script");
                  if (oldScript.src) {
                      // Script có src
                      newScript.src = oldScript.src;
                  } else {
                      // Script inline
                      newScript.textContent = oldScript.textContent;
                  }
                  document.body.appendChild(newScript);
              });
          });
  }


  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();
