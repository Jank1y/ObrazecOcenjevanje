function formatPhoneNumber() {
    const input = document.getElementById('phone');
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > 0) {
        value = '+386 ' + value; // Add country code
    }
    if (value.length > 6) {
        value = value.replace(/(\+386 \d{1})(\d)/, '$1 $2'); // Format for area/mobile
    }
    if (value.length > 9) {
        value = value.replace(/(\+386 \d{1} \d{3})(\d)/, '$1 $2'); // Add space after area code
    }
    if (value.length > 13) {
        value = value.replace(/(\+386 \d{1} \d{3} \d{3})(\d)/, '$1 $2'); // Final formatting
    }
    
    input.value = value;
}