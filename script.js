// =================================================================
// == DATA SECTION                                                ==
// =================================================================
// The key (e.g., "oak-creek") MUST exactly match the SVG group ID.
const officeData = {
    "oak-creek": {
      name: "OAK CREEK",
      group: "BWO Insurance Group, LLC",
      address: "7925 S. 6th St.<br>Oak Creek, WI 53154",
      phone: "(414) 768-8100",
      description: "Since 1985, BWO Insurance has been committed to providing our clients with the highest quality products and care. We pride ourselves on building lasting relationships with our clients built on trust and respect. With decades of experience, our team continues to grow while staying true to our mission: protecting what matters most.",
      agents: [
        // Owners & Directors
        { name: "Tom Budzisz", title: "Owner/Licensed Agent", agency: "Budzisz Agency", email: "tom@bwoinsurance.com", phone: "(414) 501-1246", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=TB" },
        { name: "Michael Osborne", title: "Owner/Licensed Agent", agency: "Osborne Agency", email: "michael@bwoinsurance.com", phone: "(414) 501-1245", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=MO" },
        { name: "Greg Budzisz", title: "Owner/Licensed Agent", agency: "Budzisz Agency", email: "greg@bwoinsurance.com", phone: "(414) 501-1254", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=GB" },
        { name: "Bethany Debroux", title: "Director of Operations", agency: "BWO Insurance", email: "bethanyd@bwoinsurance.com", phone: "(414) 501-1238", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=BD" },
        { name: "Teresa LaCoursiere", title: "Accounting & Financial Manager", agency: "BWO Insurance", email: "teresa@bwoinsurance.com", phone: "(414) 501-1261", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=TL" },
        { name: "Jessica Baeten", title: "Accounting & Finance Specialist", agency: "BWO Insurance", email: "jessica@bwoinsurance.com", phone: "(414) 501-1282", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=JB" },
        // Licensed Agents
        { name: "Alyssa Hobgood", title: "Licensed Agent", agency: "Budzisz Agency", email: "alyssa@bwoinsurance.com", phone: "(414) 501-1232", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=AH" },
        { name: "Alicia Drum", title: "Licensed Agent", agency: "Budzisz Agency", email: "aliciad@bwoinsurance.com", phone: "(414) 501-1256", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=AD" },
        { name: "Matt Rebek", title: "Licensed Agent", agency: "Budzisz Agency", email: "matt@bwoinsurance.com", phone: "(414) 501-1253", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=MR" },
        { name: "Chelsea Malueg", title: "Licensed Agent", agency: "Budzisz Agency", email: "chelsea@bwoinsurance.com", phone: "(920) 373-7214", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=CM" },
        { name: "Amy Stralow", title: "Licensed Agent", agency: "Budzisz Agency", email: "amys@bwoinsurance.com", phone: "(414) 856-2114", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=AS" },
        { name: "Mike Vande Vusse", title: "Licensed Agent", agency: "Budzisz Agency", email: "mikev@bwoinsurance.com", phone: "(414) 501-1257", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=MV" },
        { name: "Anna Jacobs", title: "Licensed Agent", agency: "Anna Jacobs Agency", email: "Anna@bwoinsurance.com", phone: "(414) 501-1278", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=AJ" },
        { name: "Joe Kossow", title: "Licensed Agent", agency: "Kossow Agency", email: "joe@bwoinsurance.com", phone: "(414) 856-2107", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=JK" },
        { name: "Ariel Meyers", title: "Licensed Agent", agency: "Kossow Agency", email: "arielm@bwoinsurance.com", phone: "(414) 856-2110", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=AM" },
        { name: "Lisa Russell", title: "Licensed Agent", agency: "Kossow Agency", email: "lisar@bwoinsurance.com", phone: "(414) 856-2106", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=LR" },
        { name: "David Matta", title: "Licensed Agent", agency: "David Matta Agency", email: "david@bwoinsurance.com", phone: "(414) 501-1247", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=DM" },
        { name: "Rebecca Gomez", title: "Licensed Agent", agency: "Osborne Agency", email: "rebeccag@bwoinsurance.com", phone: "(414) 501-1259", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=RG" },
        // Staff
        { name: "Jenny Klein", title: "Quality & Training Specialist", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=JK" },
        { name: "Jordyn Hunt", title: "Training & Audit Specialist", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=JH" },
        { name: "Victoria (Vicki) Leuze", title: "Account Manager", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=VL" },
        { name: "Andrea Suheski", title: "Account Manager", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=AS" },
        { name: "Bria Lopez", title: "Account Manager", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=BL" },
        { name: "Evan Sell", title: "Account Manager", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=ES" },
        { name: "Peter Opie", title: "Commercial Lines Account Manager", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=PO" },
        { name: "David Oas", title: "Commercial Lines Team Lead", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=DO" },
        { name: "Paulette Bakalars", title: "Commercial Lines Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=PB" },
        { name: "Diane Brandt", title: "Commercial Lines Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=DB" },
        { name: "Toni Lane", title: "Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=TL" },
        { name: "Carolyn Schubert", title: "Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=CS" },
        { name: "Zack Klein", title: "Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=ZK" },
        { name: "Shawn Stolte", title: "Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=SS" },
        { name: "Nancy Ashmore", title: "Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=NA" },
        { name: "Victoria Coleman", title: "Customer Service Agent", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=VC" },
        { name: "Jennifer Ferreira", title: "Transaction Specialist", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=JF" },
        { name: "Ashleigh Santos Saldes", title: "Transaction Specialist", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=AS" },
        { name: "Melissa Dillon", title: "Receptionist", agency: "BWO Insurance", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=MD" }
      ]
    },
    "wauwatosa": {
      name: "WAUWATOSA",
      group: "BWO Insurance Group, LLC",
      address: "123 Main St.<br>Wauwatosa, WI 55555",
      phone: "(555) 555-1234",
      description: "Serving the Wauwatosa community with pride, this office specializes in comprehensive home and auto insurance bundles for families.",
      agents: [
        { name: "Agent One", title: "Title", agency: "Agency", email: "email@example.com", phone: "(555) 555-5555", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=A1" },
        { name: "Agent Two", title: "Title", agency: "Agency", email: "email@example.com", phone: "(555) 555-5555", headshot: "https://placehold.co/180x180/0a1835/ffffff?text=A2" },
      ]
    },
    // ... ADD DATA FOR THE OTHER 23 LOCATIONS HERE ...
};

// =================================================================
// == LOGIC SECTION                                               ==
// =================================================================
window.addEventListener('DOMContentLoaded', () => {
  
    const allPins = document.querySelectorAll('g.map-pin');
    const officeNameEl = document.querySelector('.office-name');
    const officeGroupEl = document.querySelector('.office-group');
    const officeAddressEl = document.querySelector('.office-address');
    const officePhoneEl = document.querySelector('.office-phone');
    const officeDescriptionEl = document.querySelector('.office-description');
    const agentsGridContainer = document.getElementById('agents-grid-container');

    function createAgentHTML(agent) {
        // Conditionally add phone and email only if they exist
        const phoneHTML = agent.phone ? `<p class="agent-phone"><a href="tel:${agent.phone}">${agent.phone}</a></p>` : '';
        const emailHTML = agent.email ? `<p class="agent-email"><a href="mailto:${agent.email}">${agent.email}</a></p>` : '';

        return `
            <div class="agent-profile">
                <img class="agent-headshot" src="${agent.headshot}" alt="${agent.name}" onerror="this.src='https://placehold.co/180x180/eeeeee/333333?text=Error';">
                <p class="agent-name">${agent.name}</p>
                <p class="agent-title">${agent.title}</p>
                <hr class="agent-divider">
                <p class="agent-agency">${agent.agency}</p>
                ${emailHTML}
                ${phoneHTML}
            </div>
        `;
    }

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
        });

        let agentsHTML = '';
        if (data.agents && data.agents.length > 0) {
            agentsHTML += '<div class="office-agents-grid">';
            data.agents.forEach((agent, index) => {
                agentsHTML += createAgentHTML(agent);
                // Add a full-width divider after every 3 agents
                if ((index + 1) % 3 === 0 && (index + 1) < data.agents.length) {
                    agentsHTML += '<hr class="full-width-divider">';
                }
            });
            agentsHTML += '</div>';
        }
        agentsGridContainer.innerHTML = agentsHTML;
    }

    allPins.forEach(pin => {
        pin.addEventListener('click', () => {
            updateActiveLocation(pin.id);
        });
    });

    updateActiveLocation('oak-creek');
});

