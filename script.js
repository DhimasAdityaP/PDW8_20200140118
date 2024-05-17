function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'None';
    const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked')).map(hobby => hobby.value);

    document.getElementById('result-name').innerText = name;
    document.getElementById('result-age').innerText = age;
    document.getElementById('result-address').innerText = address;
    document.getElementById('result-education').innerText = education;
    document.getElementById('result-gender').innerText = gender;
    document.getElementById('result-hobbies').innerText = hobbies;

    document.getElementById('biodata-result').style.display = 'block';

    console.log('Nama:', name);
    console.log('Umur:', age);
    console.log('Alamat:', address);
    console.log('Pendidikan:', education);
    console.log('Jenis Kelamin:', gender);
    console.log('Hobi:', hobbies);
}

document.getElementById('biodataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleButtonClick();
});
