$(document).ready(function(e){
    function validar_email( email )
    {
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email) ? true : false;
    }

    $("#mostrar").click(function(){
        todo_correcto=true;
        if(document.getElementById('name').value == ''){
            todo_correcto = false;
            $("#warningName").attr("style", "display:flex");
        }else{
            $("#warningName").attr("style", "display:none");
        }

    
        if(document.getElementById('message').value == ''){
            todo_correcto = false;
            $("#warningMessage").attr("style", "display:flex");
        }else{
           $("#warningMessage").attr("style", "display:none");
        }


        var email = document.getElementById('email').value;
        if( validar_email( email ) )
        {
           $("#warningEmail").attr("style", "display:none");
        }
        else
        {
          todo_correcto = false;
          $("#warningEmail").attr("style", "display:flex");
        }

        if(isNaN(document.getElementById('phone').value) || document.getElementById('phone').value<0 || document.getElementById('phone').value==0){
          todo_correcto = false;
           $("#warningPhone").attr("style", "display:flex");
        }else{
           $("#warningPhone").attr("style", "display:none");
         }
         if(todo_correcto==true){
           $('#mostrar').prop('type', 'submit');
           //$("#resultado").attr("style", "display:flex");
         }

        });


})
