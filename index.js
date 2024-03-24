function fetchData() {
    const userId_Input = document.getElementById('userId_Input').value;
    const url = `https://reqres.in/api/users/${userId_Input}`;
    const table = document.getElementById('userlist');
    const spinnerContainer = document.querySelector(".spinner-container");

    spinnerContainer.style.display = "block";
    table.style.display = "none";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            table.innerHTML = '';
            const headingsRow = document.createElement('tr');
            headingsRow.innerHTML = `
                <th>ID</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            `;
            table.appendChild(headingsRow);
            const userRow = document.createElement('tr');
            userRow.innerHTML = `
                <td>${data.data.id}</td>
                <td><img src="${data.data.avatar}" alt="avatar" width="50"></td>
                <td>${data.data.first_name}</td>
                <td>${data.data.last_name}</td>
                <td>${data.data.email}</td>
            `;
            table.appendChild(userRow);

            spinnerContainer.style.display = "none";
            table.style.display = "table";
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            spinnerContainer.style.display = "none";
        });
}
