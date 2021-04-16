$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){  // Si la url tiene algo con index
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1100
        });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                tittle: 'Prueba de titulo 1',
                date: 'Publicado el ' + moment().format("MMMM Do YYYY"),  //se usa con el plugin moment
                //date: 'Publicado el ' + moment().day(),  
                conten: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in volutpat neque, vitaevenenatis sapien. Morbi ante tellus, vestibulum sed ex sed, dictum bibendum sem. Nulla rutrum' 
            },
            {
                tittle: 'Prueba de titulo 2',
                date: 'Publicado el ' + moment().format("MMMM Do YYYY"),
                conten: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in volutpat neque, vitaevenenatis sapien. Morbi ante tellus, vestibulum sed ex sed, dictum bibendum sem. Nulla rutrum' 
            },
            {
                tittle: 'Prueba de titulo 3',
                date: 'Publicado el ' + moment().format("MMMM Do YYYY"),
                conten: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in volutpat neque, vitaevenenatis sapien. Morbi ante tellus, vestibulum sed ex sed, dictum bibendum sem. Nulla rutrum' 
            },
            {
                tittle: 'Prueba de titulo 4',
                date: 'Publicado el ' + moment().format("MMMM Do YYYY"),
                conten: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in volutpat neque, vitaevenenatis sapien. Morbi ante tellus, vestibulum sed ex sed, dictum bibendum sem. Nulla rutrum' 
            },
            {
                tittle: 'Prueba de titulo 5',
                date: 'Publicado el ' + moment().format("MMMM Do YYYY"),
                conten: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in volutpat neque, vitaevenenatis sapien. Morbi ante tellus, vestibulum sed ex sed, dictum bibendum sem. Nulla rutrum' 
            },
            
        ];

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                    <h2>${item.tittle}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.conten}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>            
            `;

            console.log(post);

            $('#posts').append(post);

        });
    }

    // Selector de Tema
    var tema = $('#tema');

    $("#to-green").click(function(){
        tema.attr("href", "css/green.css")
    });

    $("#to-red").click(function(){
        tema.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
        tema.attr("href", "css/blue.css")
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();  /*Esto es para que el link no nos lleve a otro sio que es su funcion natural*/

        $('html, body').animate({
            scrollTop: 0   /*sube hasta el pixel 0*/
        }, 400);

        return false;  /*Para lo mismo del preventDefault*/
    });

    // Login Falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        //Guardarlo en el local, se va a llamar = nom_del_from y va a agiurdar la variable form_name
        localStorage.setItem("nom_del_from", form_name);    
    });

        // despues del login obtener valor e incrustarlo en el parrafpo del about
    var form_name = localStorage.getItem('nom_del_from');

    if(form_name != null && form_name !='undefined'){
        var about_parrafo = $('#about p');

        about_parrafo.html("<br><strong>Bievenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerra sesión</a>");

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }



    // Acordeon
    if(window.location.href.indexOf('about') > -1){ // Si la url tiene algo con about
        $('#acordeon').accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){   // Si la url tiene algo con reloj

        setInterval(function(){ /*Esta funcion permite ejecutar unn bucle cada segundo o timepo un  trozo de instrucción*/

            var reloj = moment().format("h:mm:ss"); // el formato viene de esta libreria : https://momentjs.com/
            $('#reloj').html(reloj);

        }, 1000); /*cada segundo*/
     
    }


    // Validacion de form contact
    if(window.location.href.indexOf('contact') > -1){ 

        // poner el calendario de jquery en los inputde name 'date'
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({    /*Con este metodo activamos la libreria de jQuery Validacion*/
            lang: 'es', 
            errorMessagePosition: 'top',  /* enviar el msn de error arrbiba del form*/ 
            scrollToTopOnError: true   /* Esto es para cuando haga submit me lleva a donde esta el error*/
        });
    }

    

});