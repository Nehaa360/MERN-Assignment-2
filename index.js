function fetchData() {
    const userId_Input = document.getElementById('userIdInput').value;
    const url = `https://reqres.in/api/users/${userId_Input}`;
    const tableData = document.getElementById('userlist');
    const spinnerContainer = document.querySelector(".spinner-container");

    spinnerContainer.style.display = "block";
    tableData.style.display = "none";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            tableData.innerHTML = '';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.data.id}</td>
                <td><img src="${data.data.avatar}" alt="avatar" width="50"></td>
                <td>${data.data.first_name}</td>
                <td>${data.data.last_name}</td>
                <td>${data.data.email}</td>
            `;
            tableData.appendChild(row);
            spinnerContainer.style.display = "none";
            tableData.style.display = "table";
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            spinnerContainer.style.display = "none";
        });
}
