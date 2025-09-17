// --- DATA FOR ALL LOCATIONS ---
// The agent data is now structured into tiers.
const officeData = {
    "oak-creek": {
        name: "OAK CREEK",
        group: "BWO Insurance Group, LLC",
        address: "7925 S. 6th St.<br>Oak Creek, WI 53154",
        phone: "(414) 768-8100",
        description: "Since 1983, BWO Insurance has been committed to providing our clients with the highest level of professional care. We pride ourselves on building lasting relationships built on trust and respect.",
        agents: {
            // TIER 1: Owners (3 columns, large headshots)
            tier1: [
                { name: "Tom Budzisz", title: "Owner/Licensed Agent", agency: "Budzisz Agency", email: "tom@bwoinsurance.com", phone: "(414) 501-1246", photo: "TB" },
                { name: "Michael Osborne", title: "Owner/Licensed Agent", agency: "Osborne Agency", email: "michael@bwoinsurance.com", phone: "(414) 501-1245", photo: "MO" },
                { name: "Greg Budzisz", title: "Owner/Licensed Agent", agency: "Budzisz Agency", email: "greg@bwoinsurance.com", phone: "(414) 501-1254", photo: "GB" }
            ],
            // TIER 2: Directors (3 columns, medium headshots)
            tier2: [
                { name: "Bethany Debroux", title: "Director of Operations", agency: "BWO Insurance", email: "bethanyd@bwoinsurance.com", phone: "(414) 501-1238", photo: "BD" },
                { name: "Teresa LaCoursiere", title: "Accounting & Financial Manager", agency: "BWO Insurance", email: "teresa@bwoinsurance.com", phone: "(414) 501-1261", photo: "TL" },
                { name: "Jessica Baeten", title: "Accounting & Finance Specialist", agency: "BWO Insurance", email: "jessica@bwoinsurance.com", phone: "(414) 501-1282", photo: "JB" }
            ],
            // TIER 3: Licensed Agents (5 columns, small headshots)
            tier3: [
                 { name: "Alyssa Hobgood", title: "Licensed Agent", agency: "Budzisz Agency", email: "alyssa@bwoinsurance.com", phone: "(414) 501-1232", photo: "AH" },
                { name: "Alicia Drum", title: "Licensed Agent", agency: "Budzisz Agency", email: "aliciad@bwoinsurance.com", phone: "(414) 501-1256", photo: "AD" },
                { name: "Matt Rebek", title: "Licensed Agent", agency: "Budzisz Agency", email: "matt@bwoinsurance.com", phone: "(414) 501-1253", photo: "MR" },
                { name: "Chelsea Malueg", title: "Licensed Agent", agency: "Budzisz Agency", email: "chelsea@bwoinsurance.com", phone: "(920) 373-7214", photo: "CM" },
                { name: "Amy Stralow", title: "Licensed Agent", agency: "Budzisz Agency", email: "amys@bwoinsurance.com", phone: "(414) 856-2114", photo: "AS" },
                { name: "Mike Vande Vusse", title: "Licensed Agent", agency: "Budzisz Agency", email: "mikev@bwoinsurance.com", phone: "(414) 501-1257", photo: "MV" },
                { name: "Anna Jacobs", title: "Licensed Agent", agency: "Anna Jacobs Agency", email: "anna@bwoinsurance.com", phone: "(414) 501-1278", photo: "AJ" },
                { name: "Joe Kossow", title: "Licensed Agent", agency: "Kossow Agency", email: "joe@bwoinsurance.com", phone: "(414) 856-2107", photo: "JK" },
                { name: "Ariel Meyers", title: "Licensed Agent", agency: "Kossow Agency", email: "arielm@bwoinsurance.com", phone: "(414) 856-2110", photo: "AM" },
                { name: "Lisa Russell", title: "Licensed Agent", agency: "Kossow Agency", email: "lisar@bwoinsurance.com", phone: "(414) 856-2106", photo: "LR" },
                { name: "David Matta", title: "Licensed Agent", agency: "David Matta Agency", email: "david@bwoinsurance.com", phone: "(414) 501-1247", photo: "DM" },
                { name: "Rebecca Gomez", title: "Licensed Agent", agency: "Osborne Agency", email: "rebeccag@bwoinsurance.com", phone: "(414) 501-1259", photo: "RG" }
            ],
            // TIER 4: Staff (5 columns, small headshots)
            tier4: [
                { name: "Jenny Klein", title: "Quality & Training Specialist", agency: "BWO Insurance", photo: "JK" },
                { name: "Jordyn Hunt", title: "Training & Audit Specialist", agency: "BWO Insurance", photo: "JH" },
                { name: "Victoria (Vicki) Leuze", title: "Account Manager", agency: "BWO Insurance", photo: "VL" },
                { name: "Andrea Suheski", title: "Account Manager", agency: "BWO Insurance", photo: "AS" },
                { name: "Bria Lopez", title: "Account Manager", agency: "BWO Insurance", photo: "BL" },
                { name: "Evan Sell", title: "Account Manager", agency: "BWO Insurance", photo: "ES" },
                { name: "Peter Opie", title: "Commercial Lines Account Manager", agency: "BWO Insurance", photo: "PO" },
                { name: "David Oas", title: "Commercial Lines Team Lead", agency: "BWO Insurance", photo: "DO" },
                { name: "Paulette Bakalars", title: "Commercial Lines Customer Service Agent", agency: "BWO Insurance", photo: "PB" },
                { name: "Diane Brandt", title: "Commercial Lines Customer Service Agent", agency: "BWO Insurance", photo: "DB" },
                { name: "Toni Lane", title: "Customer Service Agent", agency: "BWO Insurance", photo: "TL" },
                { name: "Carolyn Schubert", title: "Customer Service Agent", agency: "BWO Insurance", photo: "CS" },
                { name: "Zack Klein", title: "Customer Service Agent", agency: "BWO Insurance", photo: "ZK" },
                { name: "Shawn Stolte", title: "Customer Service Agent", agency: "BWO Insurance", photo: "SS" },
                { name: "Nancy Ashmore", title: "Customer Service Agent", agency: "BWO Insurance", photo: "NA" },
                { name: "Victoria Coleman", title: "Customer Service Agent", agency: "BWO Insurance", photo: "VC" },
                { name: "Jennifer Ferreira", title: "Transaction Specialist", agency: "BWO Insurance", photo: "JF" },
                { name: "Ashleigh Santos Saldes", title: "Transaction Specialist", agency: "BWO Insurance", photo: "AS" },
                { name: "Melissa Dillon", title: "Receptionist", agency: "BWO Insurance", photo: "MD" }
            ]
        }
    },
    "wauwatosa": {
        name: "WAUWATOSA",
        group: "BWO Insurance Group, LLC",
        address: "123 Main St.<br>Wauwatosa, WI 55555",
        phone: "(555) 555-1234",
        description: "Serving the Wauwatosa community with dedicated care and expert insurance solutions for over 20 years.",
        agents: {
            tier1: [], tier2: [], tier3: [], tier4: []
        }
    }
    // ... ADD YOUR OTHER 23 LOCATIONS IN THE SAME TIERED FORMAT
};

// This function dynamically builds the HTML for a single agent profile
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
function renderAgentsForLocation(locationId) {
    const location = officeData[locationId];
    const container = document.getElementById('agents-grid-container');
    if (!location || !container) return;

    container.innerHTML = ''; // Clear previous agents

    const tiersWithAgents = [];
    if (location.agents.tier1 && location.agents.tier1.length > 0) {
        tiersWithAgents.push({ tierClass: 'tier-1', agents: location.agents.tier1 });
    }
    if (location.agents.tier2 && location.agents.tier2.length > 0) {
        tiersWithAgents.push({ tierClass: 'tier-2', agents: location.agents.tier2 });
    }
    if (location.agents.tier3 && location.agents.tier3.length > 0) {
        tiersWithAgents.push({ tierClass: 'tier-3', agents: location.agents.tier3 });
    }
    if (location.agents.tier4 && location.agents.tier4.length > 0) {
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

// Main function to run after the page loads
window.addEventListener('DOMContentLoaded', () => {
    
    const allPins = document.querySelectorAll('g.map-pin');
    const officeNameEl = document.querySelector('.office-name');
    const officeGroupEl = document.querySelector('.office-group');
    const officeAddressEl = document.querySelector('.office-address');
    const officePhoneEl = document.querySelector('.office-phone');
    const officeDescriptionEl = document.querySelector('.office-description');
    
    function updateActiveLocation(locationId) {
        const data = officeData[locationId];
        if (!data) {
            console.error("No data found for location:", locationId);
            return;
        }

        officeNameEl.textContent = data.name;
        officeGroupEl.textContent = data.group;
        officeAddressEl.innerHTML = data.address;
        officePhoneEl.textContent = data.phone;
        officeDescriptionEl.textContent = data.description;

        allPins.forEach(pin => {
            pin.classList.toggle('active', pin.id === locationId);

        // Move active pin to end of its parent (brings it to front in SVG)
        if (pin.id === locationId) {
            pin.parentNode.appendChild(pin);
        }
        });

        renderAgentsForLocation(locationId);
    }

    allPins.forEach(pin => {
        pin.addEventListener('click', () => {
            updateActiveLocation(pin.id);
        });
    });

    updateActiveLocation('oak-creek');
});

