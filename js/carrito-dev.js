$(document).ready(function(){
    
    mostrarModalProductos();
    mostrarCardsProd();
    agregarProducto();
    // var nombre = $("#nombreProd").val();
    // var precio = $("#PrecioProd").val();
    // var cantidad = $("#cantidadProd").val();

    // var agregarAlCarrito = $(".agregarAlCarrito").hover(function(){
    //     $(this).css("cursor","pointer");
    // });

    

    
// $(".submitProducto").submit(function(e){
//     e.preventDefault();
//     var nombre = $("#nombre").val();


// $.ajax({
//     url:"http://localhost/carrito_compras/carrito_agregarProd.php",
//     method:"POST",
//     dataType:"json",
//     data:{nombreProducto:nombre, precioProducto:precio, cantidadProducto:cantidad},
//     }).done(function(data){
//         alert(data);
// })     
});

function mostrarCardsProd(){
    $.ajax({
        url:"http://localhost/carrito_compras/verProductos.php",
        method:"GET",
        dataType:"json"
    }).done(function(data){
        //alert(data);
        var adjuntarCard = "";
        $.each(data, function(key, value){
            adjuntarCard = "<div class='card col-md-3' style='width: 18rem;'>",
            adjuntarCard += "<img class='card-img' src='http://localhost/carrito_compras/" + value.imagenchica + "'>",
            adjuntarCard += "<div class='card-body'>",
            adjuntarCard += "<h5 class='card-title'>" + value.nombre + "</h5>",
            adjuntarCard += "<p>PRECIO: S/" + value.precio + "</p>",
            adjuntarCard += "<p class='hideCodigo'>CÓDIGO DEL PRODUCTO: " + value.idproducto + "</p>",
            adjuntarCard += "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>",
            adjuntarCard += "<div class='container-fluid'><div class='row'>"
            adjuntarCard += "<form class='submitProducto col-md-6 d-flex align-items-center'>"
            adjuntarCard += "<button  type='submit' class='btn agregarAlCarrito' data-toggle='modal' data-target='#myModal'>",
            adjuntarCard += "<i class='fas fa-shopping-cart fa-2x'></i>",
            adjuntarCard += "</button>",
            adjuntarCard += "</form>",
            adjuntarCard += "<form class='col-md-6'><div class='form-group'>",
            adjuntarCard += "<select class='form-control' id='selectCantidad'>",
            adjuntarCard += -"<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>",
            adjuntarCard += "</select>",
            adjuntarCard += "</div></form>",
            adjuntarCard += "</div></div>",
            adjuntarCard += "</div>",
            adjuntarCard += "</div>",

            /*
            <div class="container">
                    <form>
                        <div class="form-group">
                            <label>Cantidad</label>
                            <select class="form-control" id="cantidadProd">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                    </form>
            </div>
            */

            $("#cardProductos").append(
                adjuntarCard 
            );
            $(".hideCodigo").hide();

        });
                    
        $(".agregarAlCarrito").submit(function(e){
            e.preventDefault();
           //alert("carrito de compras!!");
           $("#imagenProd").html("");
            var carritoAncestro = $(this).parent().parent().parent();
            var carritoAbuelo = $(this).parent();
            var nombre = carritoAncestro.find("h5").text(); 
            var precio = carritoAncestro.find("p").first().text();
            var codigo = carritoAncestro.find("p:eq(1)").text();
            var cantidad = carritoAbuelo.find("form").children().find("select").val();
            var imagen = carritoAncestro.parent().find("img").attr("src").text();
            
            $("#nombreProd").text(nombre);
            //$("#imagenProd").append("<img class='card-img-top' src='" + imagen + "'></img>");  
            $("#codigoProd").text(codigo);
            $("#precioProd").text(precio); 
            $("#cantidadProd").text(cantidad);

            alert(nombre)
            alert(precio)
            alert(cantidad)
    
                // $.ajax({
                //     url:"http://localhost/carrito_compras/carrito_agregarProd.php",
                //     method:"POST",
                //     dataType:"json",
                //     data:{nombreProducto:nombre, precioProducto:precio, cantidadProducto:cantidad},
                //     }).done(function(data){
                //        alert(data);
                //     })
    
        });
    });
    
}




    function mostrarModalProductos(){
        
        $.ajax({
            url:"http://localhost/carrito_compras/verCarrito_productos.php",
            methop:"POST",
            dataType:"json"
        }).done(function(data){
            //alert(data);
            $.each(data,function(index,value){
                $("#verCarritoProductos").append(
                    "<ul><li>"+ value.nombre +"</li><li>PRECIO: S/"+ value.precio +"</li><li> CATIDAD: "+ value.cantidad +"</li></ul>"
                );
            });
        });
    }
    
    function agregarProducto(){

    }