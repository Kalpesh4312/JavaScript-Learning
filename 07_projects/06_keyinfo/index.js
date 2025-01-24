let table = document.querySelector('.table')

document.body.addEventListener('keydown',function (e) {
    table.innerHTML = `
    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>keyspace</th>
        </tr>
        <tr>
            <td>${e.key===' ' ? 'space':e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
})