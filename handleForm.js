const btn = document.getElementById('btn')
const btnReload = document.getElementById('btn-reload')
const img = document.getElementById('img')
const hasil = document.getElementById('hasil')

async function getNeko(){
    try{
        const res = await fetch('https://nekos.best/api/v2/neko')
        const data = await res.json()
        const result = data.results[0]
        console.log(result);

        img.src = result.url
        img.style.display = 'block'
    }catch(error){
        console.error(error);
    }
    btn.style.display = 'none'
    btnReload.style.display = 'block'
    hasil.style.display = 'flex'
}

btn.addEventListener('click', function(e){
    getNeko()
})

btnReload.addEventListener('click', function(e){
    location.reload();
})