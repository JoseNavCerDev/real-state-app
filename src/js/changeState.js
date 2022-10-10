(function(){
    const changeStateButtons = document.querySelectorAll('.change-state');
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    changeStateButtons.forEach( button => {
        button.addEventListener('click', changePropertyState)
    } )

    async function changePropertyState(e) {

        const { propertyId: id } = e.target.dataset;

        try {

            const url = `/api/properties/change-state/${id}`

            const response = await fetch(url, {
                method:'PUT',
                headers: {
                    'CSRF-Token': token
                }
            }).then(e => e.json());

            if(e.target.classList.contains('bg-yellow-100')){
                e.target.classList.add('bg-green-100', 'text-green-800');
                e.target.classList.remove('bg-yellow-100', 'text-red-800');
                e.target.textContent = 'Published'
            } else {
                e.target.classList.add('bg-yellow-100', 'text-red-800');
                e.target.classList.remove('bg-green-100', 'text-green-800');
                e.target.textContent = 'Not Published'

            }

            console.log(e.target.classList.contains('bg-green-100'));

        } catch (error) {

            console.log(error);
            
        }
    }

})()