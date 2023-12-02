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
  // Handle Registration Form Submission
    function handleRegistration(event) {
      event.preventDefault();
      // Perform input validation and send data to server
      // On success:
      alert('Account created successfully! You can now log in.');
    }
    // Handle Login Form Submission
      function handleLogin(event) {
        event.preventDefault();
        // Validate login credentials
        // On success:
        document.querySelector('.login-registration-section').style.display = 'none';
        populateJobs(jobsData.featuredJobs.slice(0, 2)); // Show first 2 jobs
        document.querySelector('.more-jobs-section').style.display = 'block'; // Show 'login to see more jobs' message
      }


  
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
// Mock data for the featured jobs (existing data)


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  populateJobs(jobsData.featuredJobs);

  // Existing event listener for the filter button
  document.getElementById('filter-btn').addEventListener('click', filterJobs);

  // Event listeners for login, registration, and job posting forms
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registrationForm').addEventListener('submit', handleRegistration);
  document.getElementById('jobPostingForm').addEventListener('submit', handleJobPosting);
});



// Function to handle user login
function handleLogin(event) {
  event.preventDefault();
  // Login logic here
  console.log('Login successful');
  // Example: toggleRecruiterForm if user is a recruiter
}

// Function to handle user registration
function handleRegistration(event) {
  event.preventDefault();
  // Registration logic here
  console.log('Registration successful');
  // Example: toggleRecruiterForm if user is a recruiter
}

// Function to handle job posting
function handleJobPosting(event) {
  event.preventDefault();
  const jobTitle = document.getElementById('jobTitle').value;
  const jobDescription = document.getElementById('jobDescription').value;
  const jobRequirements = document.getElementById('jobRequirements').value;

  // Add the new job to the jobsData and update the job list
  const newJob = {
      id: jobsData.featuredJobs.length + 1, // Simple ID generation
      title: jobTitle,
      description: jobDescription,
      // ... add other job details as necessary
  };
  jobsData.featuredJobs.push(newJob);
  populateJobs(jobsData.featuredJobs);

  console.log('New job posted:', newJob);
}

// Gmail Authentication Integration (placeholder)
function handleGmailAuth() {
  // Integration logic for Gmail authentication
  console.log('Gmail Auth');
}

// Toggle visibility of job posting form for recruiters
function toggleRecruiterForm() {
  const jobPostingSection = document.querySelector('.job-posting-form');
  // Logic to determine if the user is a recruiter
  // jobPostingSection.style.display = 'block' or 'none';
}
