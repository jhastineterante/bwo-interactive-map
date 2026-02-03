// This function dynamically builds the HTML for a single agent profile
// bwo map script version: 2026-02-03
function createAgentHTML(agent) {
    const emailLink = agent.email ? `<p class="agent-email"><a href="mailto:${agent.email}">${agent.email}</a></p>` : '';
    const phoneLink = agent.phone ? `<p class="agent-phone"><span onclick="window.location.href='tel:${agent.phone}'" style="cursor: pointer; color: inherit;">${agent.phone}</span></p>` : '';
    const headshotUrl = agent.photo.startsWith('http') ? agent.photo : `https://placehold.co/200x200/0a1835/ffffff?text=${agent.photo}`;
    
    return `
        <div class="agent-profile">
            <img class="agent-headshot" src="${headshotUrl}" alt="${agent.name}">
            <p class="agent-name">${agent.name}</p>
            <p class="agent-title">${agent.title}</p>
            <hr class="agent-divider">
            <p class="agent-agency">${agent.agency}</p>
            ${emailLink}
            ${phoneLink}
        </div>
    `;
}

// This function clears and rebuilds the entire agent section
function renderAgentsForLocation(locationId, subLocationIndex = 0) {
    const data = officeData[locationId];
    let location = data;
    if (data.hasMultipleLocations) {
        location = data.locations[subLocationIndex];
    }
    
    const container = document.getElementById('agents-grid-container');
    if (!location || !container) return;

    container.innerHTML = ''; // Clear previous agents

    const tiersWithAgents = [];
    if (location.agents && location.agents.tier1 && location.agents.tier1.length > 0) {
        tiersWithAgents.push({ tierClass: 'tier-1', agents: location.agents.tier1 });
    }
    if (location.agents && location.agents.tier2 && location.agents.tier2.length > 0) {
        tiersWithAgents.push({ tierClass: 'tier-2', agents: location.agents.tier2 });
    }
    if (location.agents && location.agents.tier3 && location.agents.tier3.length > 0) {
        tiersWithAgents.push({ tierClass: 'tier-3', agents: location.agents.tier3 });
    }
    if (location.agents && location.agents.tier4 && location.agents.tier4.length > 0) {
        tiersWithAgents.push({ tierClass: 'tier-4', agents: location.agents.tier4 });
    }

    tiersWithAgents.forEach((tierData, index) => {
        const grid = document.createElement('div');
        grid.className = `office-agents-grid ${tierData.tierClass}`;
        
        let agentsHTML = '';
        tierData.agents.forEach(agent => {
            agentsHTML += createAgentHTML(agent);
        });
        grid.innerHTML = agentsHTML;
        container.appendChild(grid);

        if (index < tiersWithAgents.length - 1) {
            const divider = document.createElement('hr');
            divider.className = 'full-width-divider';
            container.appendChild(divider);
        }
    });
}

// Add this new function to create city name labels
function addCityLabels() {
    const allPins = document.querySelectorAll('g.map-pin');
    
    allPins.forEach(pin => {
        const locationId = pin.id;
        const locationData = officeData[locationId];
        
        if (!locationData) return;
        
        // Get the pin's circle element to position the label
        const pinCircle = pin.querySelector('.pin-background');
        if (!pinCircle) return;
        
        const cx = parseFloat(pinCircle.getAttribute('cx'));
        const cy = parseFloat(pinCircle.getAttribute('cy'));
        
        // Create text element for the label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.classList.add('pin-label');
        label.setAttribute('x', cx);
        label.setAttribute('y', cy - 30); // Position above the pin (adjust this value as needed)
        label.setAttribute('text-anchor', 'middle');
        label.textContent = locationData.name;
        
        // Insert label as first child so it appears behind the pin
        pin.insertBefore(label, pin.firstChild);
    });
}

// Add this function after your addCityLabels function
function setupPinHoverEffect() {
    const allPins = document.querySelectorAll('g.map-pin');
    
    allPins.forEach(pin => {
        pin.addEventListener('mouseenter', () => {
            // Move this pin to the end of its parent to bring it to front
            const parent = pin.parentNode;
            if (parent) {
                parent.appendChild(pin);
            }
        });
    });
}

// Function to update the main info box
function updateInfoBox(locationId, subLocationIndex = 0) {
    const data = officeData[locationId];
    let location = data;
    if (data.hasMultipleLocations) {
        location = data.locations[subLocationIndex];
    }

    const officeNameEl = document.querySelector('.office-name');
    const officeGroupEl = document.querySelector('.office-group');
    const officeAddressEl = document.querySelector('.office-address');
    const officePhoneEl = document.querySelector('.office-phone');
    const officeDescriptionEl = document.querySelector('.office-description');
    
    officeNameEl.textContent = data.name;
    officeGroupEl.textContent = location.group || '';
    officeAddressEl.innerHTML = location.address || '';
    if (location.phone) {
        officePhoneEl.innerHTML = `<a href="tel:${location.phone.replace(/[^\d+]/g, '')}" style="color: inherit; text-decoration: none;">${location.phone}</a>`;
    } else {
        officePhoneEl.textContent = '';
    }
    officeDescriptionEl.textContent = location.description || '';

    renderAgentsForLocation(locationId, subLocationIndex);
}

// Function to create and show the modal
function showLocationModal(pinElement, locationId) {
    const locationData = officeData[locationId];
    const modal = document.getElementById('location-modal');
    
    let modalContent = '<ul>';
    locationData.locations.forEach((loc, index) => {
        modalContent += `<li><a href="#" data-location-id="${locationId}" data-index="${index}">${loc.tabName}</a></li>`;
    });
    modalContent += '</ul>';
    modal.innerHTML = modalContent;

    // Position and show the modal
    const pinRect = pinElement.getBoundingClientRect();
    const mapContainerRect = document.querySelector('.map-container').getBoundingClientRect();
    
    modal.style.left = `${pinRect.left - mapContainerRect.left + (pinRect.width / 2)}px`;
    modal.style.top = `${pinRect.top - mapContainerRect.top}px`;
    modal.classList.add('active');

    // Add event listeners for the links inside the modal
    modal.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const locId = e.target.dataset.locationId;
            const index = parseInt(e.target.dataset.index, 10);
            
            // Set the active sub-location and update the info box
            officeData[locId].activeLocation = index;
            updateInfoBox(locId, index);
            
            // Highlight the correct main pin
            setActivePin(pinElement);
            
            hideLocationModal();
        });
    });
}

function hideLocationModal() {
    const modal = document.getElementById('location-modal');
    modal.classList.remove('active');
}

// UPDATED Helper function to set the active pin and bring it to the front
function setActivePin(pinElement) {
    // Remove 'active' from all other pins and reset z-index
    document.querySelectorAll('g.map-pin').forEach(p => {
        p.classList.remove('active');
        p.style.zIndex = '';
    });

    // Add 'active' to the target pin
    pinElement.classList.add('active');
    
    // SOLUTION: Use inline z-index AND move to end of parent
    pinElement.style.zIndex = '9999';
    
    // Also move to end of parent container to ensure it's last in DOM order
    const parent = pinElement.parentNode;
    if (parent) {
        parent.appendChild(pinElement);
    }
}

// UPDATED Helper function to set the active pin and bring it to the front
function setActivePin(pinElement) {
    // Remove 'active' from all other pins and reset z-index
    document.querySelectorAll('g.map-pin').forEach(p => {
        p.classList.remove('active');
        p.style.zIndex = '';
    });

    // Add 'active' to the target pin
    pinElement.classList.add('active');
    
    // SOLUTION: Use inline z-index AND move to end of parent
    pinElement.style.zIndex = '9999';
    
    // Also move to end of parent container to ensure it's last in DOM order
    const parent = pinElement.parentNode;
    if (parent) {
        parent.appendChild(pinElement);
    }
}

// UPDATED Helper function to set the active pin and bring it to the front
function setActivePin(pinElement) {
    // Remove 'active' from all other pins and reset z-index
    document.querySelectorAll('g.map-pin').forEach(p => {
        p.classList.remove('active');
        p.style.zIndex = '';
    });

    // Add 'active' to the target pin
    pinElement.classList.add('active');
    
    // SOLUTION: Use inline z-index AND move to end of parent
    pinElement.style.zIndex = '9999';
    
    // Also move to end of parent container to ensure it's last in DOM order
    const parent = pinElement.parentNode;
    if (parent) {
        parent.appendChild(pinElement);
    }
}

// UPDATED modal positioning function
function showLocationModal(pinElement, locationId) {
    const locationData = officeData[locationId];
    const modal = document.getElementById('location-modal');
    
    // FIRST: Set the pin as active when modal opens
    setActivePin(pinElement);
    
    let modalContent = '<ul>';
    locationData.locations.forEach((loc, index) => {
        modalContent += `<li><a href="#" data-location-id="${locationId}" data-index="${index}">${loc.tabName}</a></li>`;
    });
    modalContent += '</ul>';
    modal.innerHTML = modalContent;

    // Get positioning elements
    const mapContainer = document.querySelector('.map-container');
    const svgElement = mapContainer.querySelector('svg');
    
    // Get the pin's position within the SVG
    const pinCircle = pinElement.querySelector('.pin-background');
    const cx = parseFloat(pinCircle.getAttribute('cx'));
    const cy = parseFloat(pinCircle.getAttribute('cy'));
    
    // Get SVG viewBox to calculate scale
    const viewBox = svgElement.viewBox.baseVal;
    const svgRect = svgElement.getBoundingClientRect();
    const scaleX = svgRect.width / viewBox.width;
    const scaleY = svgRect.height / viewBox.height;
    
    // Calculate position relative to map container
    const pinX = cx * scaleX;
    const pinY = cy * scaleY;
    
    // Position modal with pin-specific adjustments
    let modalX, modalY;
    
    if (locationId === 'milwaukee') {
        // Milwaukee specific positioning
        modalX = pinX - 140; // Center on pin (250px modal width / 2)
        modalY = pinY - 280;  // Position below pin
    } else if (locationId === 'oconomowoc') {
        // Oconomowoc specific positioning  
        modalX = pinX - 140; // Center on pin
        modalY = pinY - 160; // Position above pin
    } else if (locationId === 'kenosha') {
        // Default positioning for any future multi-location pins
        modalX = pinX - 140;
        modalY = pinY - 270;
    } else if (locationId === 'waupun') {
    modalX = pinX - 140;
    modalY = pinY - 180; // Adjust as needed after testing
}
    
    // Basic boundary checking - keep within map
    const mapRect = mapContainer.getBoundingClientRect();
    if (modalX < 10) modalX = 10;
    if (modalX + 250 > mapRect.width) modalX = mapRect.width - 260;
    
    // Position modal
    modal.style.left = `${modalX}px`;
    modal.style.top = `${modalY}px`;
    modal.classList.add('active');

    // Add event listeners for the links inside the modal
    modal.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const locId = e.target.dataset.locationId;
            const index = parseInt(e.target.dataset.index, 10);
            
            // Set the active sub-location and update the info box
            officeData[locId].activeLocation = index;
            updateInfoBox(locId, index);
            
            hideLocationModal();
        });
    });
}

// Main function to run after the page loads
window.addEventListener('DOMContentLoaded', () => {
    
    // Add city labels first
    addCityLabels();

    // Setup hover effect for z-index
    setupPinHoverEffect();
    
    const allPins = document.querySelectorAll('g.map-pin');
    
    function handlePinClick(pinElement) {
        const locationId = pinElement.id;
        const data = officeData[locationId];

        hideLocationModal(); // Hide any open modals first

        if (data.hasMultipleLocations) {
            showLocationModal(pinElement, locationId);
        } else {
            updateInfoBox(locationId);
            setActivePin(pinElement);
        }
    }

    allPins.forEach(pin => {
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            handlePinClick(pin);
        });
        
        // Add class to multi-location pins for styling
        if (officeData[pin.id] && officeData[pin.id].hasMultipleLocations) {
            pin.classList.add('multi-location');
        }
    });

    // Close modal if clicking anywhere else on the page
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('location-modal');
        if (modal.classList.contains('active') && !modal.contains(e.target)) {
            hideLocationModal();
        }
    });

    // Initialize with a default location
    updateInfoBox('oak-creek');
    const initialPin = document.getElementById('oak-creek');
    if (initialPin) {
         setActivePin(initialPin);
    }
});





