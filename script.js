 var myArrayEst=[]; //declaracción de Array de objetos
        function agregar(){
            var usuario= Object();
           
            usuario.nombre=document.getElementById('nom').value;
            usuario.apellido=document.getElementById('ape').value;
            usuario.n1=document.getElementById('ed').value;
            usuario.n2=document.getElementById('gr').value;
            usuario.n3=document.getElementById('cu').value;
            myArrayEst.push(usuario); // inserte en array el estudiante
            limpiarCajaTexto();
            listadoEst();
        }
        function limpiarCajaTexto(){         
            document.getElementById('nom').value='';
            document.getElementById('ape').value='';
            document.getElementById('ed').value='';
            document.getElementById('gr').value='';
            document.getElementById('cu').value='';
          
        }
        function listadoEst(){
            var salida="";
            for(i in myArrayEst){
               
              salida+='<tr><td>'+myArrayEst[i].nombre+'</td><td>'+myArrayEst[i].apellido+'</td><td>'+myArrayEst[i].n1+'</td><td>'+myArrayEst[i].n2+'</td><td>'+myArrayEst[i].n3+
                '';
            }
            document.getElementById('cuerpo').innerHTML=salida;

   
        }
      
       