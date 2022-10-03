(function() {
    const lat = document.querySelector('#lat').value || 20.67444163271174;
    const lng = document.querySelector('#lng').value || -103.38739216304566;
    const map = L.map('map').setView([lat, lng ], 12);
    let marker;    

    //Use provider and Geocode
    const geocodeService = L.esri.Geocoding.geocodeService();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Pin colocation
    marker = new L.marker([lat, lng], {
        draggable: true,
        autoPan: true
    })
    .addTo(map); 

    //Catch and detects coordinates
    marker.on('moveend', function(e){
        marker = e.target;

        const position = marker.getLatLng();
        map.panTo(new L.LatLng(position.lat, position.lng));

        //Get streets information
        geocodeService.reverse().latlng(position, 13).run(function(error,result){
            //console.log(result);

            marker.bindPopup(result.address.LongLabel).openPopup();

            //Fill out data
            document.querySelector('.street').textContent = result?.address?.Address ?? '';
            document.querySelector('#street').value = result?.address?.Address ?? '';
            document.querySelector('#lat').value = result?.latlng?.lat ?? '';
            document.querySelector('#lng').value = result?.latlng?.lng ?? '';
        })


    });    
    
    
})()