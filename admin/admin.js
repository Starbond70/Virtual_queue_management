document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const res = await fetch('/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    
    const data = await res.json();
    if (res.ok) {
        localStorage.setItem('token', data.token);
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        fetchQueue();
    } else {
        alert(data.message);
    }
});

async function fetchQueue() {
    const res = await fetch('/queue', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    const queue = await res.json();
    
    const table = document.getElementById('queue-table');
    table.innerHTML = '';
    queue.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.tokenNumber}</td>
            <td>${entry.name}</td>
            <td>${entry.service}</td>
            <td><button onclick="finishService('${entry._id}')">Service Finished</button></td>
        `;
        table.appendChild(row);
    });
}

async function finishService(id) {
    await fetch(`/queue/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    fetchQueue();
}
