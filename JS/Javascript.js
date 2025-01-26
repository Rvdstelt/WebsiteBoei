new Vue({
    el: '#loginApp',
    methods: {
        login() {
            //geen login logic
            window.location.href = 'BoeiSelectie.html';
        }
    }
});

new Vue({
    el: '#buoySelectApp',
    data: {
        buoys: [
            { id: 1, name: 'Boei 1', location: 'Kruger Park', status: 'Actief' },
            { id: 2, name: 'Boei 2', location: 'Kruger Park', status: 'Actief' },
        ]
    },
    methods: {
        selectBuoy(buoy) {
            window.location.href = 'Dashboard.html';
        },
        Logout() {
            window.location.href = 'Login.html';
        }
    }
});

new Vue({
    el: '#dashboardApp',
    data: {
        buoyName: '1',
        temperature: '---',
        turbidity: '---',
        conductivity: '---',
        oxygen: '---',
        ph: '---',
        battery: '---',
        timestamps: {
        },
        autoRefreshInterval: null
    },
    created() {
        this.refreshData();
        this.autoRefreshInterval = setInterval(this.refreshData, 5000);
    },
    methods: {
        Logout() {
            window.location.href = 'Login.html';
        },
        goBack() {
            window.location.href = 'BoeiSelectie.html';
        },

        generateSensData() {
            return {
                temperature: (20 + Math.random() * 5).toFixed(1),  
                turbidity: (Math.random() * 50).toFixed(1),         
                conductivity: (500 + Math.random() * 500).toFixed(1), 
                oxygen: (5 + Math.random() * 10).toFixed(1),      
                ph: (6.5 + Math.random() * 1).toFixed(1),      
                battery: (6 + Math.random() * 10).toFixed(1), 
                timestamp: new Date().toLocaleString()
            };
        },

        refreshData() {
            const sensorData = this.generateSensData();
            this.updateSensorData(sensorData);
        },
        updateSensorData(sensorData) {
            if (sensorData.temperature) {
                this.temperature = sensorData.temperature;
                this.timestamps.temperature = sensorData.timestamp;
            }
            if (sensorData.turbidity) {
                this.turbidity = sensorData.turbidity;
                this.timestamps.turbidity = sensorData.timestamp;
            }
            if (sensorData.conductivity) {
                this.conductivity = sensorData.conductivity;
                this.timestamps.conductivity = sensorData.timestamp;
            }
            if (sensorData.oxygen) {
                this.oxygen = sensorData.oxygen;
                this.timestamps.oxygen = sensorData.timestamp;
            }
            if (sensorData.ph) {
                this.ph = sensorData.ph;
                this.timestamps.ph = sensorData.timestamp;
            }
            if (sensorData.battery) {
                this.battery = sensorData.battery;
                this.timestamps.battery = sensorData.timestamp;
            }
            if (sensorData.coordinates) {
                this.coordinates = sensorData.coordinates;
                this.timestamps.gps = sensorData.timestamp;
            }
        }
    }
});

new Vue({
    el: '#ChartApp',
    methods: {
        goBack() {
            window.location.href = '../Dashboard.html';
        }
    }
});