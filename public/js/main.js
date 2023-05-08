// tying effect
document.addEventListener("DOMContentLoaded", function() {
  var i = 0;
  var txt = 'Hello, my name is Nguyen Xuan Tien, and I am 22 years old. I am currently studying at Ho Chi Minh City University of Technology (HUTECH) and working as a web development intern. I have a strong passion for programming and love to learn new technologies to improve my skills. During my studies, I have acquired knowledge in various programming languages such as HTML, CSS, JavaScript, and PHP. I am also experienced in using tools like Git, Visual Studio Code, and Adobe Photoshop. I am a quick learner and have excellent problem-solving skills. I am excited about the opportunity to work with a team of professionals and contribute to the development of high-quality web applications.';
  var speed = 50;
  
  function typeWriter() {
if (i < txt.length) {
  document.getElementById("typing").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
  }
  typeWriter();
});

//for
// const jobList = document.getElementById('job-list');
// for (let i = 0; i < 3; i++) {
//   const div = document.createElement('div');
//   div.className = 'col-md-4';
//   div.innerHTML = '<div class="card"><div class="card-body"><h5 class="card-title">Job Title 1</h5><h6 class="card-subtitle mb-2 text-muted">Company Name 1</h6><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ligula eros.</p><p class="card-text">Duration: 2020-2021</p></div></div>';
//   jobList.appendChild(div);
// }

//play sound
//const
const playButton = document.getElementById('myButton');
const music = new Audio('/audio/musicback.mp3');
playButton.addEventListener('click', function() {
  // Nếu nhạc đang được phát thì dừng lại
  if (music.paused) {
music.play();
  } else {
music.pause();
  }
});

// back to top
window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');

  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// new tab
const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    window.open(button.querySelector("a").href, "_blank");
  });


