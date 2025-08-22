document.addEventListener('DOMContentLoaded', function() {
    // ✅ Only run this if #bleeding exists (on guidelines page)
    const bleedingSection = document.getElementById('bleeding');
    if (bleedingSection) {
        bleedingSection.classList.add('active');

        // Add click event listeners to all sidebar links
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor behavior
                
                // Remove active class from all sidebar links
                document.querySelectorAll('.sidebar-nav li').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked link's parent li
                this.parentElement.classList.add('active');
                
                // Hide all sections
                document.querySelectorAll('.guideline-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show the target section
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).classList.add('active');
            });
        });
    }

    // ✅ Footer Year (runs everywhere)
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Tab switching functionality (guidelines page only)
function switchTab(tabButton, contentId) {
    const tabsContainer = tabButton.parentElement;
    const tabContent = document.getElementById(contentId);
    const tabContentContainer = tabContent.parentElement;
    
    // Remove active class from all tabs and content
    const allTabs = tabsContainer.querySelectorAll('.tab-btn');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    const allContent = tabContentContainer.querySelectorAll('.tab-content');
    allContent.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    tabButton.classList.add('active');
    tabContent.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // ✅ Only run if guideline tabs exist
    const firstTabContent = document.getElementById('minor-cuts');
    if (firstTabContent) {
        firstTabContent.classList.add('active');
    }

    const firstTabButton = document.querySelector('.guideline-tabs .tab-btn');
    if (firstTabButton) {
        firstTabButton.classList.add('active');
    }
});
