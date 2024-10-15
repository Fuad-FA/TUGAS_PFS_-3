// Pie Chart
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Penjualan', 'Pembagian', 'Pengembalian'],
        datasets: [{
            data: [55.5, 33.5, 11],
            backgroundColor: ['#6366F1', '#4ADE80', '#F472B6']
        }]
    },
    options: {
        responsive: true
    }
});

// Growth Chart
const growthCtx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(growthCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: '2021',
                data: [25000, 40000, 30000, 35000, 25581, 45000, 30000, 50000],
                backgroundColor: '#6366F1'
            },
            {
                label: '2022',
                data: [30000, 50000, 40000, 55000, 47921, 55000, 45000, 60000],
                backgroundColor: '#4ADE80'
            }
        ]
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
