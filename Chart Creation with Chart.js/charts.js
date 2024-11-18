class ChartManager {
    constructor() {
      this.barChart = null;
      this.pieChart = null;
      this.init();
    }
  
    async fetchData() {
      const response = await fetch('data.json');
      return await response.json();
    }
  
    createBarChart(data) {
      const ctx = document.getElementById('barChart').getContext('2d');
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Monthly Sales' }
          }
        }
      });
    }
  
    createPieChart(data) {
      const ctx = document.getElementById('pieChart').getContext('2d');
      this.pieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Category Distribution' }
          }
        }
      });
    }
  
    async init() {
      const data = await this.fetchData();
      this.createBarChart(data.barChartData);
      this.createPieChart(data.pieChartData);
    }
  }
  
  new ChartManager();
  