console.log("C.V Project");

const data = [
  {
    name: "Rhoshan Das",
    Age: 24,
    city: "Mumbai",
    Languges: "python",
    Framework: "Django",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },

  {
    name: "Rahul Nikum",
    Age: 21,
    city: "Satana",
    Languges: "Python",
    Framework: "Django",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },

  {
    name: "Ajit shah",
    Age: 26,
    city: "Mumbai",
    Languges: "Java",
    Framework: "Django",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },

  {
    name: "Ankita Patel",
    Age: 28,
    city: "U.S",
    Languges: "Javascript",
    Framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },

  {
    name: "Rupali Chaudhari",
    Age: 25,
    city: "Goa",
    Languges: "C++",
    Framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
  },

  {
    name: "Yogesh Pawar",
    Age: 22,
    city: "Nashik",
    Languges: "React",
    Framework: "Django",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },

  {
    name: "Shubham Mane",
    Age: 27,
    city: "kolkata",
    Languges: "Angular",
    Framework: "Django",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
  },

  {
    name: "Archna Ogale",
    Age: 23,
    city: "Jalgaon",
    Languges: "HTML",
    Framework: "Django",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
  },

  {
    name: "Nikita Rao",
    Age: 29,
    city: "Pune",
    Languges: "python & Javascript",
    Framework: "Django",
    image: "https://randomuser.me/api/portraits/women/99.jpg",
  },
];

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const next = document.getElementById("next");
next.addEventListener("click", nextCV);

const candidates = cvIterator(data);
nextCV();
function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item"><b>Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age:  ${currentCandidate.Age}  year old</li>
    <li class="list-group-item">Live in: ${currentCandidate.city}</li>
    <li class="list-group-item">Work on : ${currentCandidate.Languges}</li>
    <li class="list-group-item">Uses : ${currentCandidate.Framework}framework</li>
    
</ul>`;
  } else {
    alert("End Of Candidate Application");
    window.location.reload();
  }
}
