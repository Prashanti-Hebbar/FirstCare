// Sidebar navigation
document.addEventListener('DOMContentLoaded', function() {
    // Show the first section by default (Bleeding & Cuts)
    document.getElementById('bleeding').classList.add('active');
    
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
});


// Tab switching functionality
function switchTab(tabButton, contentId) {
    // Get all tab buttons and content in the parent container
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

// Initialize the tabs - show the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    // Show the first tab content by default (Minor Cuts)
    const firstTabContent = document.getElementById('minor-cuts');
    if (firstTabContent) {
        firstTabContent.classList.add('active');
    }
    
    // Make sure the first tab button is active
    const firstTabButton = document.querySelector('.guideline-tabs .tab-btn');
    if (firstTabButton) {
        firstTabButton.classList.add('active');
    }
    
    // Sidebar navigation (as previously implemented)
    // Show the first section by default (Bleeding & Cuts)
    document.getElementById('bleeding').classList.add('active');
    
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
});
