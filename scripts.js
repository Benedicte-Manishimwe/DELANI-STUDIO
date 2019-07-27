$(document).ready(function () {
  $("#toDo-1").click(function () {
    $("#text-1").toggle();
    $("#toDo-1").toggle();
  });
  $("#text-1").click(function () {
    $("#toDo-1").toggle();
    $("#text-1").toggle();

  });
  $("#toDo-2").click(function () {
    $("#text-2").toggle();
    $("#toDo-2").toggle();
  });
  $("#text-2").click(function () {
    $("#toDo-2").toggle();
    $("#text-2").toggle();
  });
  $("#toDo-3").click(function () {
    $("#text-3").toggle();
    $("#toDo-3").toggle();
  });
  $("#text-3").click(function () {
    $("#toDo-3").toggle();
    $("#text-3").toggle();
  });


  $("#work4").mouseover(function(){
    $("#pres-4").show();
    // $("#work-4").addClass(".pres-4");
  });
  $("#work4").mouseleave(function(){
   $("#pres-4").hide();
   });


  $("#valid").click(function () {
    var input1=$("#names").value;
    var input2=$("#emails").value;
    var input3=$("#textarea").value;

    if ((input1=="")||(input2=="") || (input3=="")) {
      alert("Please fill the blank spaces!!");
    }
    else {
      alert(input1 + " , we have received your message. Thank you fro reaching out to us.");
    }

  })

});


