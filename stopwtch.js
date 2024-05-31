    let intervalId;
    let i = 1; 

    function play() {
        stop(); // Mengambil fungsi stop() yang sudah ada untuk memastikan tidak ada interval yang berjalan sebelumnya
        intervalId = setInterval(tampilAngka, 1000); 
        document.getElementById('mulaiAngka').style.display = 'none';
        document.getElementById('tampilAngka').style.display = 'block';
    }

    function tampilAngka() {
        document.getElementById("tampilAngka").innerHTML = i;
        i++;
    }

    function stop() {
        clearInterval(intervalId);
    }

    function reset() {
        stop();
        i = 0;
        document.getElementById('mulaiAngka').style.display = 'block';
        document.getElementById('tampilAngka').style.display = 'none';
        document.getElementById("tampilAngka").innerHTML = ''; // Mengosongkan isi tampilAngka saat mereset
    }
