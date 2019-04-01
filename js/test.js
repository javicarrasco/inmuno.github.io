function mostrar() {
            div = document.getElementById('flotante');
            div.style.display = '';
        }

function mostrarIncorrecto() {
            div = document.getElementById('flotanteIncorrecto');
            div.style.display = '';
        }


function cerrar() {
            div = document.getElementById('flotante');
            div.style.display = 'none';
        }

function cerrarIncorrecto() {
            div = document.getElementById('flotanteIncorrecto');
            div.style.display = 'none';
        }


function resultado() {
        var p1;

        if (document.getElementById('p1').checked==true) {cerrarIncorrecto(), mostrar()}
        else {cerrar(), mostrarIncorrecto()}
        }


function mostrarB() {
        div = document.getElementById('flotanteB');
        div.style.display = '';
                }
