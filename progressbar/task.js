const progress = document.getElementById('progress');

document.forms[0].addEventListener('submit', (event) => {
    event.preventDefault()

    const xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            console.log('Ready!')
        }
    })

    xhr.upload.addEventListener('progress', (event) => {
        let percent = (event.loaded / event.total) * 100;
        progress.value = percent / 100
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

    const formData = new FormData(document.forms[0])

    xhr.send(formData)
})