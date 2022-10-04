(function(){

    const lat = 20.67444163271174;
    const lng = -103.38739216304566;
    const map = L.map('start-map').setView([lat, lng ], 12);

    let markers = new L.LayerGroup().addTo(map);

    let properties = [];

    //Object FILTERs
    const filters = {
        category: '',
        price: ''
    }

    const categoriesSelect = document.querySelector('#categories');
    const priceSelect = document.querySelector('#prices');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Filtering CATEGORIES
    categoriesSelect.addEventListener('change', e => {
        filters.category = e.target.value,
        filterProperties();
    });

    //Filtering PRICES
    priceSelect.addEventListener('change', e => {
        filters.price = +e.target.value,        
        filterProperties();
    });

    //Method to fetch data of internal API
    const getProperties = async () => {
        try {

            const url = '/api/public/properties';

            properties = await fetch(url).then(e => e.json());

            showProperties(properties);
            
        } catch (error) {
            console.log(error);   
        }
    };

    //Method to processing data after FECTH
    const showProperties = properties => {

        //Clean the previous markers
        markers.clearLayers();

        //Function to add pines
        properties.forEach(property => {
            const marker = new L.marker([property?.lat, property?.lng], {
                autoPan: true
            })
            .addTo(map)
            .bindPopup(`
            <p class="text-indigo-600 font-bold">${property.category.categories_name}</p>
                <h1 class="text-xl font-extrabold uppercase my-3">
                    ${property.title}
                </h1>
                <img src="/uploads/${property.image}" alt="Property image ${property.title}"/>
                <p class="text-gray-600 font-bold">${property.price.price_name}</p>
                <a class="bg-indigo-600 block p-2 text-center font-bold uppercase text-white rounded" href="/api/public/property/${property.id}">Show Property</a>
            
            `);
            markers.addLayer(marker);
        });

        

    }

    const filterProperties = () => {
        const resultProperties = properties.filter( filterCategoriesCallBack ).filter( filterPricesCallBack );
        showProperties(resultProperties);
    }

    const filterCategoriesCallBack = property => {
        return filters.category ? property.idCategory === filters.category : property
    }

    const filterPricesCallBack = property => {
        return filters.price ? property.price.id === filters.price : property
    }


    getProperties();

})()