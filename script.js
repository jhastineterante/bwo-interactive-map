// --- DATA FOR ALL LOCATIONS ---
// The agent data is now structured into tiers.
const officeData = {
    "oak-creek": {
        name: "OAK CREEK",
        group: "BWO Insurance Group, LLC",
        address: "7925 S. 6th St.<br>Oak Creek, WI 53154",
        phone: "(414) 768-8100",
        website: "", // No website for this location
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
    },
    "brillion": {
        name: "BRILLION",
        group: "N.E.W. Insurance and Financial Services",
        address: "950 W Ryan St, Suite B<br>Brillion, WI 54110",
        phone: "(920) 756-2500",
        website: "https://www.newifs.net/",
        description: "We offer insurance and financial services to our customers.",
        agents: {
            tier1: [
                { name: "Nick Miller", title: "Agency Owner", agency: "N.E.W. Insurance and Financial Services", email: "nick@newifs.net", phone: "(920) 756-2500", photo: "NM" }
            ],
            tier2: [
                { name: "Anne Miller", title: "Licensed Agent", agency: "N.E.W. Insurance and Financial Services", email: "anne@newifs.net", phone: "(920) 756-2500", photo: "AM" },
                { name: "Cindy Hardy", title: "Licensed Agent", agency: "N.E.W. Insurance and Financial Services", email: "cindy@newifs.net", phone: "(920) 756-2500", photo: "CH" },
                { name: "Steve Schreiber", title: "Licensed Agent", agency: "N.E.W. Insurance and Financial Services", email: "steve@newifs.net", phone: "(920) 756-2500", photo: "SS" },
                { name: "Cashton Miller", title: "Licensed Agent", agency: "N.E.W. Insurance and Financial Services", email: "cash@newifs.net", phone: "(920) 756-2500", photo: "CM" }
            ],
            tier3: [],
            tier4: []
        }
    },
    "elkhorn": {
        name: "ELKHORN",
        group: "BWO Insurance - Elkhorn",
        address: "N5860 US HWY 12, Suite C<br>Elkhorn, WI 53121",
        phone: "(262) 743-2011",
        website: "http://www.bwoinsuranceelkhorn.com/",
        description: "Since opening our Elkhorn office in 2005, we have made it our mission to treat every customer with the care and respect they deserve—just as we would want to be treated ourselves. As your neighbors and friends, we understand that your concerns are our concerns. This commitment has earned us the trust of our clients, who appreciate our genuine dedication to meeting their needs. We are proud to serve not only Elkhorn, but also the surrounding areas of Lake Geneva, Delavan, and all of Walworth County. Our focus is always on the community, and we are honored to be a part of it. Additionally, we offer bilingual services in Spanish, ensuring that we can meet the needs of even more residents. We look forward to serving you!",
        agents: {
            tier1: [
                { name: "Jennifer Hutchinson", title: "Agency Owner", agency: "BWO Insurance - Elkhorn", email: "jen@bwoinsuranceelkhorn.com", phone: "(262) 743-2011", photo: "JH" },
                { name: "Hoss Rehberg", title: "Agency Owner", agency: "BWO Insurance - Elkhorn", email: "Hoss@bwoinsuranceelkhorn.com", phone: "(262) 743-2011", photo: "HR" }
            ],
            tier2: [
                { name: "Denise De La Vega", title: "Licensed Agent", agency: "BWO Insurance - Elkhorn", email: "denisse@bwoinsuranceelkhorn.com", phone: "(262) 743-2011", photo: "DD" }
            ],
            tier3: [],
            tier4: []
        }
    },
    "dixon": {
        name: "DIXON",
        group: "Newcomer Insurance Services Inc",
        address: "77 S Peoria Ave<br>P.O. Box 443<br>Dixon, IL 61021",
        phone: "(815) 288-4431",
        website: "http://www.newcomerins.com/",
        description: "Newcomer Insurance Services Inc. is an Independent Insurance Agency providing insurance services in Dixon, IL and the surrounding Sauk Valley area. We proudly represent many Insurance Carriers, some for over 40 years, and are licensed in the State of Illinois and Arizona. We specialize in auto, recreational vehicles, home, flood, life, and business insurance. We also are a remitter for the Illinois Secretary of State, assisting clients with vehicle titling and registration applications.",
        agents: {
            tier1: [
                { name: "Randall D Newcomer", title: "Agency Owner", agency: "Newcomer Insurance Services Inc", email: "randyn@bwoinsurance.com", phone: "(815) 288-4431", photo: "RN" }
            ],
            tier2: [],
            tier3: [],
            tier4: []
        }
    },
    "winthrop": {
        name: "WINTHROP HARBOR",
        group: "Michelle Fonk Insurance Agency",
        address: "1011 Sheridan Rd, Unit B<br>Winthrop Harbor, IL 60096",
        phone: "(224) 789-7221",
        website: "https://fonkinsurance.com/",
        description: "It's my mission to offer the best service and insurance coverage to suit each client's individual needs and to build lasting relationships based on trust and guidance. I've been licensed in Illinois and Wisconsin since 2005. I specialize in insurance products for individuals and businesses. I would like to invite you to stop by or call my office and find out how my insurance agency can help you with your auto, home, life and business insurance needs. I will prepare for you at no cost or obligation a review and comparison of your current insurance coverages. I look forward to seeing you!",
        agents: {
            tier1: [
                { name: "Michelle Fonk", title: "Agency Owner", agency: "Michelle Fonk Insurance Agency", email: "michelle@bwoinsurance.com", phone: "(224) 789-7221", photo: "MF" }
            ],
            tier2: [],
            tier3: [],
            tier4: []
        }
    },
    "oostburg": {
        name: "OOSTBURG",
        group: "Stubler Insurance Solutions",
        address: "N/A - Works from home",
        phone: "(920) 564-6987",
        website: "http://www.stublerinsurancesolutions.com/",
        description: "I make house calls, at your kitchen or conference table. I don't sell insurance, I teach insurance.",
        agents: {
            tier1: [
                { name: "Mike Stubler", title: "Agency Owner", agency: "Stubler Insurance Solutions", email: "mike@stublerinsurancesolutions.com", phone: "(920) 564-6987", photo: "MS" }
            ],
            tier2: [],
            tier3: [],
            tier4: []
        }
    },
    "burlington": {
        name: "BURLINGTON",
        group: "Cates Insurance Services, LLC",
        address: "565 Milwaukee Ave, Suite 2C<br>Burlington, WI 53105",
        phone: "(262) 757-6107",
        website: "",
        description: "Full service agency offering Property, Casualty, Life and Health insurance.",
        agents: {
            tier1: [
                { name: "Tim Cates", title: "Agency Owner", agency: "Cates Insurance Services, LLC", email: "tim@catesinsuranceservices.com", phone: "(262) 757-6107", photo: "TC" }
            ],
            tier2: [],
            tier3: [],
            tier4: []
        }
    },
    "appleton": {
        name: "APPLETON",
        group: "Jeff Oswald Insurance Agency",
        address: "5700 W Grande Market Dr, Suite A<br>Appleton, WI 54913",
        phone: "(920) 202-8088",
        website: "https://www.oswaldinsuranceagency.com/",
        description: "Jeff Oswald Insurance Agency provides comprehensive insurance solutions to the Appleton community.",
        agents: {
            tier1: [
                { name: "Jeff Oswald", title: "Agency Owner", agency: "Jeff Oswald Insurance Agency", email: "jeff@oswaldagency.com", phone: "(920) 202-8088", photo: "JO" },
                { name: "Catina Schienebeck", title: "Agency Owner", agency: "Jeff Oswald Insurance Agency", email: "catina@oswaldagency.com", phone: "(920) 202-8088", photo: "CS" }
            ],
            tier2: [],
            tier3: [],
            tier4: []
        }
    },
    "oconomowoc": {
        name: "OCONOMOWOC",
        hasMultipleLocations: true,
        activeLocation: 0, // Default to the first agency
        locations: [
            {
                id: "oconomowoc-lake",
                tabName: "Lake Area Insurance",
                group: "Lake Area Insurance Agency, LLC",
                address: "606 Summit Avenue<br>Oconomowoc, WI 53066",
                phone: "(262) 569-9150",
                website: "http://www.lakeareains.com/",
                description: "Lake Area Insurance has three agents with over 50 years of combined experience who help people navigate the world of insurance. We have always been and will always be local agents. Our group was started in Oconomowoc and all three of us are happy to call this area home. If you are looking for an agent that focuses on quality and cost, listens and wants to get to know you, and has a variety of carriers, we might be the agents for you.",
                agents: {
                    tier1: [
                        { name: "Nicole Rodriguez", title: "Agency Owner", agency: "Lake Area Insurance Agency, LLC", email: "nikki@lakeareains.com", phone: "(262) 569-9150", photo: "NR" },
                        { name: "Paula Kummrow", title: "Agency Owner", agency: "Lake Area Insurance Agency, LLC", email: "paula@lakeareains.com", phone: "(262) 569-9150", photo: "PK" }
                    ],
                    tier2: [
                         { name: "Lauren Vetz", title: "Licensed Agent", agency: "Lake Area Insurance Agency, LLC", email: "lauren@lakeareains.com", phone: "(262) 569-9150", photo: "LV" }
                    ],
                    tier3: [],
                    tier4: []
                }
            },
            {
                id: "oconomowoc-kerschner",
                tabName: "Kerschner Group",
                group: "Kerschner Group",
                address: "110 N Main Street<br>Oconomowoc, WI 53066",
                phone: "(262) 292-9502",
                website: "https://kerschnergroup.com/",
                description: "I have been in the insurance industry for over 20 years. I have spent a lot of time researching all aspects of insurance to fit with a family's overall financial plan. As an independent insurance agent, the Kerschner Group has all the tools necessary to serve their client base. We have the best companies in the state, product and price-wise, for the insurance industry. We also have the products for just about every business out there, from someone starting out or an established company that's been around for years.",
                agents: {
                    tier1: [
                        { name: "Dustin Kerschner", title: "Agency Owner", agency: "Kerschner Group", email: "dustin@kerschnergroup.com", phone: "(262) 292-9502", photo: "DK" }
                    ],
                    tier2: [],
                    tier3: [],
                    tier4: []
                }
            }
        ]
    },
    "milwaukee": {
        name: "MILWAUKEE",
        hasMultipleLocations: true,
        activeLocation: 0, // Track which location is currently active
        locations: [
            {
                id: "milwaukee-see",
                tabName: "See Insurance Agency LLC",
                group: "See Insurance Agency LLC",
                address: "7817 W Brown Deer Road<br>Milwaukee, WI 53223",
                phone: "(414) 355-5433",
                website: "https://www.daseeins.com/",
                description: "See Insurance Agency has been serving Milwaukee with dedicated insurance solutions.",
                agents: {
                    tier1: [
                        { name: "David See", title: "Agency Owner", agency: "See Insurance Agency LLC", email: "david@daseeins.com", phone: "(414) 355-5433", photo: "DS" }
                    ],
                    tier2: [
                        { name: "Erica Tucker", title: "Licensed Agent", agency: "See Insurance Agency LLC", email: "erica@daseeins.com", phone: "(414) 355-5433", photo: "ET" },
                        { name: "Rosty Lasowsky", title: "Licensed Agent", agency: "See Insurance Agency LLC", email: "rosty@daseeins.com", phone: "(414) 355-5433", photo: "RL" },
                        { name: "Lili Yu", title: "Licensed Agent", agency: "See Insurance Agency LLC", email: "lili@daseeins.com", phone: "(414) 355-5433", photo: "LY" }
                    ],
                    tier3: [],
                    tier4: []
                }
            },
            {
                id: "milwaukee-reed",
                tabName: "Reed Street Insurance Agency",
                group: "Reed Street Insurance Agency",
                address: "414 S 2nd St<br>Milwaukee, WI 53204",
                phone: "(414) 277-0414",
                website: "https://www.reedstreetins.com/",
                description: "Insurance Doesn't Matter Until You Need It - Reed Street Insurance Agency is here when you do.",
                agents: {
                    tier1: [
                        { name: "James Pogorelc", title: "Agency Owner", agency: "Reed Street Insurance Agency", email: "jim@reedstreetins.com", phone: "(414) 277-0414", photo: "JP" }
                    ],
                    tier2: [
                        { name: "Kritzia Morales-Vega", title: "Licensed Agent", agency: "Reed Street Insurance Agency", email: "kritzia@reedstreetins.com", phone: "(414) 277-0414", photo: "KM" },
                        { name: "Tiffany Knight", title: "Licensed Agent", agency: "Reed Street Insurance Agency", email: "tiffany@reedstreetins.com", phone: "(414) 277-0414", photo: "TK" }
                    ],
                    tier3: [],
                    tier4: []
                }
            },
            {
                id: "milwaukee-advantage",
                tabName: "Advantage Insurance Agency",
                group: "Advantage Insurance Agency",
                address: "1578 W National Ave<br>Milwaukee, WI 53204",
                phone: "(414) 531-7900",
                website: "",
                description: "Advantage Insurance Agency provides comprehensive insurance solutions to the Milwaukee community.",
                agents: {
                    tier1: [],
                    tier2: [
                        { name: "Jynelsa Ruiz Velazquez", title: "Licensed Agent", agency: "Advantage Insurance Agency", email: "jynelsar@bwoinsurance.com", phone: "(414) 531-7900", photo: "JR" }
                    ],
                    tier3: [],
                    tier4: []
                }
            },
            {
                id: "milwaukee-american-one",
                tabName: "American One Insurance",
                group: "American One Insurance Agency LLC",
                address: "3920 S 27th St, Suite D<br>Milwaukee, WI 53221",
                phone: "(414) 539-4036",
                website: "",
                description: "As an insurance agent specializing in Commercial, Personal, and Life insurance, I am dedicated to providing tailored coverage solutions for our clients. With a deep understanding of the industry, I prioritize building strong relationships, ensuring that each client feels valued and informed. My expertise allows me to navigate complex policies, offering clear explanations and personalized recommendations—whether protecting a business's assets or securing a family's financial future. I am committed to delivering peace of mind through reliable coverage and exceptional service.",
                agents: {
                    tier1: [
                        { name: "Karian Castillo", title: "Agency Owner", agency: "American One Insurance Agency LLC", email: "karina@bwoinsurance.com", phone: "(414) 539-4036", photo: "KC" }
                    ],
                    tier2: [
                        { name: "Fatima Valle", title: "Licensed Agent", agency: "American One Insurance Agency LLC", email: "FatimaV@bwoinsurance.com", phone: "(414) 539-4036", photo: "FV" },
                        { name: "Luis Islas", title: "Transaction Specialist", agency: "American One Insurance Agency LLC", email: "Infoamericanone@bwoinsurance.com", phone: "(414) 539-4036", photo: "LI" },
                        { name: "Maria Lopez", title: "Executive Assistant", agency: "American One Insurance Agency LLC", email: "americanone@bwoinsurance.com", phone: "(414) 539-4036", photo: "ML" }
                    ],
                    tier3: [],
                    tier4: []
                }
            }
        ]
    },
    "east-troy": {
        name: "EAST TROY",
        group: "Alpine Insurance Agency",
        address: "3224 Main St, Suite E, East Troy WI 53120<br>Mailing address: P.O. Box 16, East Troy WI 53120",
        phone: "(262) 642-9801",
        website: "",
        description: "To provide our clients with the insurance options they need, at the prices they want, delivered with the service they deserve.",
        agents: {
            tier1: [
                { name: "Randy Dauffenbach", title: "Agency Owner", agency: "Alpine Insurance Agency", email: "randy@bwoinsurance.com", phone: "262-642-9801", photo: "RD" }
            ],
            tier2: [
                { name: "Greg Dauffenbach", title: "Commercial Lines Account Manager", agency: "Alpine Insurance Agency", email: "gregd@bwoinsurance.com", phone: "262-642-9801", photo: "GD" },
                { name: "Michelle Baker", title: "Personal Lines Account Manager", agency: "Alpine Insurance Agency", email: "michelleb@bwoinsurance.com", phone: "262-642-9801", photo: "MB" },
                { name: "Alicia Burton", title: "Personal Lines Customer Service Agent", agency: "Alpine Insurance Agency", email: "aliciab@bwoinsurance.com", phone: "262-642-9801", photo: "AB" }
            ],
            tier3: [],
            tier4: []
        }
    },
    "plymouth": {
        name: "PLYMOUTH",
        group: "Advantage Insurance Agency",
        address: "435 E Mill Street, Plymouth WI 53073",
        phone: "920-893-3252",
        website: "https://www.advantageinsurancewi.com/",
        description: "Insurance to give you peace of mind. We understand that it can be hard to trust the insurance industry, but we promise to change your mind when you work with AIA. We are here for you, to help protect you, and guide you so you are taken care of when it matters most. At Advantage Insurance Agency, we have a range of options to best suit your situation. We will not find you the cookie cutter solution. We will find you the solution that works best for your personal life or business.",
        agents: {
            tier1: [
                { name: "April Tarras", title: "Agency Owner", agency: "Advantage Insurance Agency", email: "april@bwoinsurance.com", phone: "920-893-3252", photo: "AT" }
            ],
            tier2: [
                { name: "Mitchell Tarras", title: "Licensed Agent", agency: "Advantage Insurance Agency", email: "mitch@bwoinsurance.com", phone: "920-893-3252", photo: "MT" },
                { name: "Laura Sapino", title: "Licensed Agent", agency: "Advantage Insurance Agency", email: "lauras@bwoinsurance.com", phone: "920-893-3252", photo: "LS" }
            ],
            tier3: [],
            tier4: []
        }
    }
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
        modalY = pinY - 250;  // Position below pin
    } else if (locationId === 'oconomowoc') {
        // Oconomowoc specific positioning  
        modalX = pinX - 140; // Center on pin
        modalY = pinY - 160; // Position above pin
    } else {
        // Default positioning for any future multi-location pins
        modalX = pinX - 125;
        modalY = pinY - 140;
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

// Function to add plus indicators to multi-location pins
function addPlusIndicators() {
    document.querySelectorAll('g.map-pin.multi-location').forEach(pin => {
        // Check if plus indicator already exists
        if (pin.querySelector('.plus-indicator')) return;
        
        const mapContainer = document.querySelector('.map-container');
        const svgElement = mapContainer.querySelector('svg');
        const pinCircle = pin.querySelector('.pin-background');
        const cx = parseFloat(pinCircle.getAttribute('cx'));
        const cy = parseFloat(pinCircle.getAttribute('cy'));
        
        // Calculate position
        const viewBox = svgElement.viewBox.baseVal;
        const svgRect = svgElement.getBoundingClientRect();
        const scaleX = svgRect.width / viewBox.width;
        const scaleY = svgRect.height / viewBox.height;
        
        const pinX = cx * scaleX;
        const pinY = cy * scaleY;
        
        // Create plus indicator element
        const plusIndicator = document.createElement('div');
        plusIndicator.className = 'plus-indicator';
        plusIndicator.textContent = '+';
        plusIndicator.style.cssText = `
            position: absolute;
            left: ${pinX + 8}px;
            top: ${pinY - 15}px;
            background: #1A8E44;
            color: #ffffffff;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            font-size: 12px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            pointer-events: none;
            z-index: 10;
        `;
        
        mapContainer.appendChild(plusIndicator);
    });
}

// Main function to run after the page loads
window.addEventListener('DOMContentLoaded', () => {
    
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
    
    // Add plus indicators
    addPlusIndicators();

    // Handle window resize - this should be inside DOMContentLoaded
    window.addEventListener('resize', () => {
        // Remove existing indicators
        document.querySelectorAll('.plus-indicator').forEach(el => el.remove());
        // Re-add them with updated positions
        addPlusIndicators();
    });
}); 
