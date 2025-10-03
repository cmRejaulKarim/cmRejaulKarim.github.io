
function validateCVForm() {
    const cvInput = document.getElementById('candidateCV');
    if (cvInput.files.length === 0) {
        alert('Please upload your CV.');
        return false;
    }
    const file = cvInput.files[0];
    const allowedTypes = ['application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document.');
        return false;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB
        alert('File size must be less than 5MB.');
        return false;
    }
    alert('CV submitted successfully!');
    return true;
}

function validateRegisterForm() {
    const pass = document.getElementById('registerPassword').value;
    const confirmPass = document.getElementById('registerConfirmPassword').value;
    if (pass !== confirmPass) {
        alert('Passwords do not match!');
        return false;
    }
    alert('Registration successful!');
    return true;
}

function validateLoginForm() {
    // Demo login validation
    alert('Login successful!');
    return true;
}
