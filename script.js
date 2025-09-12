// NOTE: Do not include <script> tags in this .js file

const officeData = {
  "oak-creek": {
    name: "OAK CREEK",
    group: "BWO Insurance Group, LLC",
    address: "7925 S. 6th St.<br>Oak Creek, WI 53154",
    phone: "(414) 768-8100"
  },
  "wauwatosa": {
    name: "WAUWATOSA",
    group: "BWO Insurance Group, LLC",
    address: "123 Main St.<br>Wauwatosa, WI 55555",
    phone: "(555) 555-1234"
  }
  // ... Add all your other locations here when ready
};

// This code runs after the page has finished loading
window.addEventListener('DOMContentLoaded', () => {
  
  // Select all the elements we need to control
  const allPins = document.querySelectorAll('g.map-pin');
  const officeNameEl = document.querySelector('.office-name');
  const officeGroupEl = document.querySelector('.office-group');
  const officeAddressEl = document.querySelector('.office-address');
  const officePhoneEl = document.querySelector('.office-phone');
  
  // This function updates the info box AND the active pin style
  function updateActivePin(locationId) {
    const data = officeData[locationId];
    if (!data) { // Exit if the location ID has no data
      console.error("No data found for location:", locationId);
      return;
    }

    // Update the text in the info box
    officeNameEl.textContent = data.name;
    officeGroupEl.textContent = data.group;
    officeAddressEl.innerHTML = data.address;
    officePhoneEl.textContent = data.phone;

    // Loop through all pins to correctly set the 'active' class
    allPins.forEach(pin => {
      if (pin.id === locationId) {
        pin.classList.add('active'); // Add class to the selected pin
      } else {
        pin.classList.remove('active'); // Remove class from all other pins
      }
    });
  }

  // Add a click listener to every single pin
  allPins.forEach(pin => {
    pin.addEventListener('click', () => {
      updateActivePin(pin.id);
    });
  });

  // Set the initial state to Oak Creek when the page loads
  updateActivePin('oak-creek');
});