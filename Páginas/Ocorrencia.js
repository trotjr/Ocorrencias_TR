  //busca os dados
  var Professor = document.getElementById("Professor-name");
  var Aluno = document.getElementById("Aluno-name");
  var Ocorrencia = document.getElementById("Ocorrencia-text");



//deletar os campos do formulario.
var cancelar = document.querySelector("#cancelar");

cancelar.addEventListener("click", function(apagar){

    Professor.value ="";
    Aluno.value ="";
    Ocorrencia.value ="";
});


//adicionar nova ocorrencia.
var adicionar = document.querySelector("#Adicionar");

adicionar.addEventListener("click", function(evento){
  var registroNovo = document.getElementById("Registro");

   var OcorrenciaNova = "<tr>"+
    "<th id='aluno'>" + Aluno.value + "</th>" +
      "<td id='professor'>"+ Professor.value + "</td>" +
        "<td id='ocorrencia'>"+ Ocorrencia.value + "</td>" +
           "</tr>"

  registroNovo.innerHTML = registroNovo.innerHTML + OcorrenciaNova;

  Professor.value ="";
  Aluno.value ="";
  Ocorrencia.value ="";

});
