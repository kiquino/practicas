const h1 = document.querySelector('h1');
const compra = document.querySelector('#compra');
const venta = document.querySelector('#venta');
const div = document.querySelector('#THEDIV');

busqueda();
setInterval(busqueda, 5000);
let counter = 0;

async function busqueda() {
    try {
        const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const data = await response.json();
        h1.innerHTML = data[0].casa.nombre;
        compra.innerHTML = data[0].casa.compra;
        venta.innerHTML = data[0].casa.venta;
    } catch (error) {
        console.log(error);
    }
  

    div.style.backgroundColor = cambioColor(counter);
    counter++;
    if (counter > 7) {
        counter = 0;
    }
  
}

function cambioColor(params) {

    switch (params) {
        case 0:
            color = 'red';
            break;
        case 1:
            color = 'blue';
            break;
        case 2:
            color = 'green';
            break;
        case 3:
            color = 'yellow';
            break;
        case 4:
            color = 'orange';
            break;
        case 5:
            color = 'gold';
            break;
        case 6:
            color = 'pink';
            break;
        case 7:
            color = 'brown';
            break;
    }

    return color;
}