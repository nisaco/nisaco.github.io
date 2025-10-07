        const dropdown = document.getElementById('radioDropdown');
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        const content = dropdown.querySelector('.dropdown-content');
        const radioButtons = content.querySelectorAll('input[type="radio"]');

        // 1. Toggle the dropdown open/closed
        toggleButton.addEventListener('click', () => {
            const isExpanded = dropdown.classList.toggle('open');
            toggleButton.setAttribute('aria-expanded', isExpanded);
        });

        // 2. Update the button text when a radio option is selected
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (event) => {
                // Update the text to the selected option's label
                const selectedText = event.target.value;
                toggleButton.textContent = selectedText;
                
                // Close the dropdown after selection
                dropdown.classList.remove('open');
                toggleButton.setAttribute('aria-expanded', 'false');
            });

            // Set initial button text if an option is pre-checked
            if (radio.checked) {
                toggleButton.textContent = radio.value;
            }
        });

        // 3. Close the dropdown when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('open');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Optional: Pre-select an option (remove "checked" from HTML 
        // if you want it to start unselected)
        if (!document.querySelector('input[name="choice"]:checked')) {
             // You can programmatically check one here, or leave it blank
             // radioButtons[0].checked = true;
             // toggleButton.textContent = radioButtons[0].value;
        }
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            sidebar.classList.toggle('open');
            if (sidebar.classList.contains('open')) {
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
          document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
            const toggleButton = dropdown.querySelector('.dropdown-toggle');
            const content = dropdown.querySelector('.dropdown-content');
            const radioButtons = content.querySelectorAll('input[type="radio"]');

            toggleButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = dropdown.classList.toggle('open');
                toggleButton.setAttribute('aria-expanded', isExpanded);
            });

            radioButtons.forEach(radio => {
                radio.addEventListener('change', (event) => {
                    toggleButton.textContent = event.target.value;
                    dropdown.classList.remove('open');
                    toggleButton.setAttribute('aria-expanded', 'false');
                });
                if (radio.checked) {
                    toggleButton.textContent = radio.value;
                }
            });

            document.addEventListener('click', (event) => {
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove('open');
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
            });
        });
