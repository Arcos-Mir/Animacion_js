$(document).ready(function(){

    //$(selector).animate({parametros, velocidad, callback});
    $('#boton').on('click', function(){
        $('#caja').animate({
            //width: '300px',
            //opacity: '0.2'
            //width: '+=300px' para incrementar el tamaño del elemento de acuerdo a los cliks que de el usuario al boton
            //margin: '20px' desplazar el elemento 20px de arriba y de izquierda a derecha
            //marginLeft: '20px' para desplazar el elementode izquierda a derecha '+=20px' para ir desplazando en cada click al boton
            //animaciones de color no funcionan en jquery por si solo se puede hacer combinando con css
            marginLeft:'+=20px'
        },300,function(){
            //alert('Fin de la animacion');
        });

        //$('.caja').addClass('animacion');
        //$('.caja').toggleClass('animacion');

        $('.caja').animate({
            marginLeft: '-=50px'
        }, 300);
    });
});