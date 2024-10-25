const ctx = document.getElementById('basicChart').getContext('2d');
const basicChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Sales',
            data: [8, 23, 35, 47, 50, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.6)', 
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true 
            }
        }
    }
});
