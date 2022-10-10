

const dateFormat = dateParameter => {

    const dateArray = new Date(dateParameter).toISOString().slice(0, 10);

    const date = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Date(dateArray).toLocaleDateString('en-EN', date);

}

export default dateFormat;