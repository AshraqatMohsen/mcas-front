document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Set up click handlers for login/register
    document.querySelector('a[href="#login"]').addEventListener('click', function(e) {
        e.preventDefault();
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
    
    document.querySelector('a[href="#register"]').addEventListener('click', function(e) {
        e.preventDefault();
        const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
        registerModal.show();
    });
    
    // Highlight active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});


const doctors = [
    { id: 1, name:'Dr.Ahmed Mohamed', specialty: 'Cardiologist', rating: 4.9 , appointments:["2025-6-12","2025-06-15"] },
    { id: 2, name: 'Dr. Fatma Ali', specialty: 'Neurologist', rating: 4.8 , appointments:["2025-6-13","2025-06-20"] },
    { id: 3, name: 'Dr. Mahmoud Hassan', specialty: 'Orthopedic Surgeon', rating: 4.7 , appointments:["2025-6-21","2025-06-26"] },
    { id: 4, name: 'Dr.Ali Khaled', specialty: 'Pediatric', rating: 4.6 , appointments:["2025-6-12","2025-06-15"] },
    { id: 5, name: 'Dr. Yasmin', specialty: 'Dermatology', rating: 4.5 , appointments:["2025-6-12","2025-06-15"] },
    { id: 6, name: 'Dr. Sara', specialty: 'Gynecology', rating: 4.4 , appointments:["2025-6-12","2025-06-15"] },
    { id: 7, name: 'Dr. Omar', specialty: 'General Practitioner', rating: 4.3 , appointments:["2025-6-12","2025-06-15"] },
    { id: 8, name: 'Dr. Nour', specialty: 'Psychiatrist', rating: 4.2 ,appointments:["2025-6-12","2025-06-15"] },
    { id: 9, name: 'Dr. Hossam', specialty: 'ENT Specialist', rating: 4.1 , appointments:["2025-6-12","2025-06-15"] },
    { id: 10, name: 'Dr. Layla', specialty: 'Endocrinologist', rating: 4.0 ,appointments:["2025-6-12","2025-06-15"] }
];

function searchDoctors(){
    const input = document.getElementById('specialityInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('ResultContainer');

    resultsDiv.innerHTML = ''; // Clear previous results
    const results = doctors.filter(doctor => doctor.specialty.toLowerCase()===input.toLowerCase);
    if(results.length ==0){
        resultsDiv.innerHTML = '<p class="text-danger">No doctors found for this specialty.</p>';
        return
    }

    results.forEach(doctor => {
        const doctorDiv = document.createElement('div');
        doctorDiv.style.border = '1px solid #ccc';
        doctorDiv.style.padding = '10px';  

        const doctorName = document.createElement('h3');
        doctorName.textContent = doctor.name;
        doctorDiv.appendChild(doctorName);

        const datesElements = document.createElement('p');
        datesElements.textContent = `Available Dates: ${doctor.appointments.join(', ')}`;
        doctorDiv.appendChild(datesElements);

        resultsDiv.appendChild(doctorDiv);
    });
}