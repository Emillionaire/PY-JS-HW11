const xhr = new XMLHttpRequest()
const questionDiv = document.getElementById('poll__title')
const answersDiv = document.getElementById('poll__answers')

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        // Get Q and A
        questionText = Object.entries(JSON.parse(xhr['response']))[1][1]['title']
        answersText = Object.entries(JSON.parse(xhr['response']))[1][1]['answers']

        // Add Q text
        questionDiv.innerHTML += `
            ${questionText}
        `

        // Add A texts
        answersText.forEach(element => {
            answersDiv.innerHTML += `
                <button>${element}</button>
            `
        })

        // Add click react
        Array.from(answersDiv.children).forEach(element => {
            element.addEventListener('click', (event) => {alert('Спасибо, ваш голос засчитан!')})
        })
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')

xhr.send()