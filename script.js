    // State/Province data
        const stateData = {
            ng: ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'],
            ca: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
            uk: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
            au: ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'],
            us: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            de: ['Baden-Württemberg', 'Bavaria', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hesse', 'Lower Saxony', 'Mecklenburg-Vorpommern', 'North Rhine-Westphalia', 'Rhineland-Palatinate', 'Saarland', 'Saxony', 'Saxony-Anhalt', 'Schleswig-Holstein', 'Thuringia'],
            fr: ['Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Brittany', 'Centre-Val de Loire', 'Corsica', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandy', 'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur'],
            other: ['Please specify in station field']
        };

        function handleStatusClick() {
            const statusSelect = document.getElementById('status');
            statusSelect.style.backgroundColor = '#e8f4fd';
            statusSelect.style.borderColor = '#3498db';
            
            // Add a subtle animation
            statusSelect.style.transform = 'scale(1.02)';
            setTimeout(() => {
                statusSelect.style.transform = 'scale(1)';
            }, 200);
        }

        function updateStates() {
            const countrySelect = document.getElementById('country');
            const stateSelect = document.getElementById('state');
            const selectedCountry = countrySelect.value;

            stateSelect.innerHTML = '<option value="">Select State</option>';
            stateSelect.disabled = !selectedCountry;

            if (selectedCountry && stateData[selectedCountry]) {
                stateData[selectedCountry].forEach(state => {
                    const option = document.createElement('option');
                    option.value = state.toLowerCase().replace(/\s+/g, '-');
                    option.textContent = state;
                    stateSelect.appendChild(option);
                });
                stateSelect.disabled = false;
            }
        }

        function showLoginForm() {
            alert('Login functionality would redirect to the login page');
        }

        function validateForm() {
            const form = document.getElementById('registrationForm');
            const inputs = form.querySelectorAll('input[required], select[required]');
            let isValid = true;

            inputs.forEach(input => {
                const formGroup = input.closest('.form-group');
                
                if (!input.value.trim()) {
                    formGroup.classList.add('error');
                    isValid = false;
                } else {
                    formGroup.classList.remove('error');
                }

                // Email validation
                if (input.type === 'email' && input.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        formGroup.classList.add('error');
                        isValid = false;
                    }
                }

                // Phone validation
                if (input.type === 'tel' && input.value) {
                    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                    if (!phoneRegex.test(input.value.replace(/[\s\-\(\)]/g, ''))) {
                        formGroup.classList.add('error');
                        isValid = false;
                    }
                }
            });

            return isValid;
        }

       
        // Real-time validation
        document.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('blur', function() {
                const formGroup = this.closest('.form-group');
                if (this.hasAttribute('required') && !this.value.trim()) {
                    formGroup.classList.add('error');
                } else {
                    formGroup.classList.remove('error');
                }
            });

            input.addEventListener('input', function() {
                const formGroup = this.closest('.form-group');
                if (this.value.trim()) {
                    formGroup.classList.remove('error');
                }
            });
        });

        // Set current year as max for year of entry
        document.getElementById('yearOfEntry').setAttribute('max', new Date().getFullYear());

         function showLoginForm() {
            const modal = document.getElementById('loginModal');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Focus on email input after modal animation
            setTimeout(() => {
                document.getElementById('loginEmail').focus();
            }, 300);
        }

        function closeLoginModal() {
            const modal = document.getElementById('loginModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        // Close modal when clicking outside
        document.getElementById('loginModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLoginModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLoginModal();
            }
        });

        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            console.log('Login attempt with email:', email);
            alert(`Login successful! Welcome back, ${email}`);
            closeLoginModal();
            
           
        });