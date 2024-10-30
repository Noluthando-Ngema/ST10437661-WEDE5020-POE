// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    const bookingType = document.getElementById("bookingType");
    const additionalInfo = document.getElementById("additionalInfo");
    const formFields = document.getElementById("formFields");
    const submitButton = document.getElementById("submitButton");

    // Update form fields based on booking type selected
    bookingType.addEventListener("change", () => {
        const selectedOption = bookingType.value;
        formFields.innerHTML = ''; // Clear previous fields
        additionalInfo.style.display = "none";

        if (selectedOption === "adoptDog") {
            formFields.innerHTML = `
                <label for="dogPreference">Preferred Dog Breed or Size:</label>
                <input type="text" id="dogPreference" name="dogPreference" required>
                <label for="adoptionDate">Preferred Adoption Date:</label>
                <input type="date" id="adoptionDate" name="adoptionDate" required>
            `;
        } else if (selectedOption === "animalRescue") {
            formFields.innerHTML = `
                <label for="rescueLocation">Location of Animal Rescue:</label>
                <input type="text" id="rescueLocation" name="rescueLocation" required>
                <label for="animalType">Type of Animal (e.g., Dog, Cat):</label>
                <input type="text" id="animalType" name="animalType" required>
                <label for="rescueDate">Rescue Date:</label>
                <input type="date" id="rescueDate" name="rescueDate" required>
            `;
        } else if (selectedOption === "vetCare") {
            formFields.innerHTML = `
                <label for="vetService">Type of Veterinary Service (e.g., Checkup, Vaccination):</label>
                <input type="text" id="vetService" name="vetService" required>
                <label for="appointmentDate">Preferred Appointment Date:</label>
                <input type="date" id="appointmentDate" name="appointmentDate" required>
                <label for="petName">Pet's Name:</label>
                <input type="text" id="petName" name="petName" required>
            `;
        }

        additionalInfo.style.display = "block"; // Show additional fields
    });

    // Submit form with booking data
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const formData = new FormData(bookingForm);
        const bookingData = {};
        formData.forEach((value, key) => {
            bookingData[key] = value;
        });

        // Simulate form submission (log to console for now)
        console.log("Booking submitted:", bookingData);

        // Display confirmation
        alert(`Your ${bookingType.options[bookingType.selectedIndex].text} booking has been submitted!`);
        bookingForm.reset(); // Clear form after submission
        additionalInfo.style.display = "none";
    });
});
