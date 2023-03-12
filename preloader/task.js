const loadIcon = document.getElementById('loader')
const valuteItems = document.getElementById('items')
const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        // Disable loading icon
        loadIcon.classList.remove('loader_active')

        // Get valute array
        let valuteArray = Object.entries((JSON.parse(xhr['response']))['response']['Valute'])

        // Add item
        valuteArray.forEach(element => {
            itemCode = element[1]['CharCode']
            itemValue = element[1]['Value']

            valuteItems.innerHTML += `
                <div class='item'>
                    <div class="item__code">${itemCode}</div>
                    <div class="item__value">${itemValue}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `
            
        })
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')

xhr.send()