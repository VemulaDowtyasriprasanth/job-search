// Mock data for the featured jobs
const jobsData = {
    "featuredJobs": [
      {
        "id": 1,
        "title": "Software Developer",
        "company": "Innovatech Solutions",
        "location": "New York, NY",
        "type": "Full-time",
        "description": "Seeking a skilled software developer with 5 years of experience in software design and development. Proficiency in Java and Spring Framework required.",
        "postedDate": "2023-07-01",
        "applyLink": "https://www.innovatechsolutions.com/careers/1"
      },
      {
        "id": 2,
        "title": "Web Developer",
        "company": "TechFrontier",
        "location": "Remote",
        "type": "Contract",
        "description": "Looking for a front-end web developer familiar with modern frameworks like React or Vue.js to work on exciting web application projects.",
        "postedDate": "2023-08-15",
        "applyLink": "https://www.techfrontier.work/careers/2"
      },
      {
        "id": 3,
        "title": "Data Scientist",
        "company": "DataTech Analytics",
        "location": "Austin, TX",
        "type": "Part-time",
        "description": "We are seeking a Data Scientist with expertise in machine learning algorithms and statistical modeling techniques.",
        "postedDate": "2023-09-05",
        "applyLink": "https://www.datatechanalytics.com/careers/3"
      },
      {
        "id": 4,
        "title": "DevOps Engineer",
        "company": "CloudNet Solutions",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "description": "Join our team as a DevOps Engineer to automate our operations and processes. Proficiency in AWS and Docker is required.",
        "postedDate": "2023-06-20",
        "applyLink": "https://www.cloudnetsolutions.com/careers/4"
      },
      {
        "id": 5,
        "title": "UI/UX Designer",
        "company": "CreativeDesign Studio",
        "location": "Seattle, WA",
        "type": "Freelance",
        "description": "CreativeDesign Studio is looking for a talented UI/UX Designer to create amazing user experiences and elegant design solutions.",
        "postedDate": "2023-07-22",
        "applyLink": "https://www.creativedesignstudio.com/careers/5"
      },
      {
        "id": 6,
        "title": "Mobile App Developer",
        "company": "InnoMobile Apps",
        "location": "Boston, MA",
        "type": "Full-time",
        "description": "Seeking an experienced Mobile App Developer proficient in Swift and Kotlin to join our dynamic team.",
        "postedDate": "2023-08-01",
        "applyLink": "https://www.innomobileapps.com/careers/6"
      }
      // ... more jobs here
    ]
  };
  
  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function() {
      populateJobs(jobsData.featuredJobs);
  
      // Event listener for the filter button
      document.getElementById('filter-btn').addEventListener('click', filterJobs);
  });
  
  function populateJobs(jobs) {
      const jobsList = document.querySelector('.jobs-list');
      // Clear the list before adding filtered jobs
      jobsList.innerHTML = ''; 
  
      jobs.forEach(job => {
          const jobElement = document.createElement('div');
          jobElement.className = 'job';
          
          jobElement.innerHTML = `
              <h3>${job.title}</h3>
              <p><strong>${job.company}</strong></p>
              <p><em>${job.location}</em></p>
              <p>${job.description}</p>
              <p>Posted on: ${job.postedDate}</p>
              <a href="${job.applyLink}" target="_blank" class="apply-btn">Apply Now</a>
          `;
          
          jobsList.appendChild(jobElement);
      });
  }
 
  
  function filterJobs() {
      const keyword = document.getElementById('keywords').value.toLowerCase();
      const location = document.getElementById('location').value.toLowerCase();
  
      const filteredJobs = jobsData.featuredJobs.filter(job => {
          return (job.title.toLowerCase().includes(keyword) || job.description.toLowerCase().includes(keyword)) 
                 && job.location.toLowerCase().includes(location);
      });
  
      populateJobs(filteredJobs);
  }
