
// Function to format phone number as 000-000-000
function formatPhoneNumber(event) {
    const input = event.target;
    let phoneNumber = input.value.replace(/\D/g, ''); // Remove non-digit characters

    // Format with dashes as 000-000-000
    if (phoneNumber.length > 3 && phoneNumber.length <= 6) {
        phoneNumber = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length > 6) {
        phoneNumber = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
    }

    input.value = phoneNumber; // Update input with formatted value
}

// Add the input event listener for the telephone input field
document.querySelector('input[type="tel"]').addEventListener('input', formatPhoneNumber);

document.getElementById('submitBtn').addEventListener('click', function (event) {
    // Prevent form submission initially
    event.preventDefault();

    // Check if all required fields are filled
    const inputs = document.querySelectorAll('input[required], select[required]');
    let allFilled = true;

    // Regular expressions for email and telephone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^\d{3}-\d{3}-\d{3}$/;

    inputs.forEach(input => {
        let isValid = true;

        // Check for specific validations on email and telephone
        if (input.type === 'email' && !emailRegex.test(input.value)) {
            isValid = false;
            Swal.fire({
                title: 'Neveljaven format e-pošte!',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        } else if (input.type === 'tel' && !telRegex.test(input.value)) {
            isValid = false;
            Swal.fire({
                title: 'Neveljaven format telefonske številke! Uporabite obliko 000-000-000.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        } else if (!input.value) {
            isValid = false;
        }

        if (!isValid) {
            allFilled = false;
            input.classList.add('error'); // Optional: add a class to highlight the empty fields
        } else {
            input.classList.remove('error'); // Remove error class if filled
        }
    });
      if (allFilled) {
          // Show success alert if all fields are valid
          Swal.fire({
              title: 'Vaše naročilo je bilo oddano',
              icon: 'success',
              confirmButtonText: 'Ok'
          }).then((result) => {
              if (result.isConfirmed) {
                  // Redirect to index.html after form submission
                  document.forms[0].submit();
                  window.location.href = 'index.html';
              }
          });
    } else {
        // Show error alert if not all fields are filled or valid
        Swal.fire({
            title: 'Prosimo, izpolnite vsa obvezna polja in preverite vnos.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
});

