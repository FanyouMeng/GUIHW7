//
// Name: Fanyou Meng
// Email: Fanyou_Meng@student.uml.edu
//
// 91.61 GUI Programming I
// Assignment 7:  Using the jQuery Validation Plugin with Your Dynamic Table
// Description: This is the javascript file for Assignment 7.
// It tries to use jquery plugin validate to check the user's inputs.
// If the inputs are validate, it generates a multiplication table.

$(function (){
  $("#myForm").validate({

    rules:{
      Hlower:{
        required: true,
        digits: true,
        range:[1,500]
      },
      Hlarger:{
        required: true,
        digits: true,
        range:[1,500]
      },
      Vlower:{
        required: true,
        digits: true,
        range:[1,500]
      },
      Vlarger:{
        required: true,
        digits: true,
        range:[1,500]
      }
    },

    messages:{
      Hlower:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      },
      Hlarger:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      },
      Vlower:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      },
      Vlarger:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      }
    }

  });


});

function myFunction() {
  if(!($('#myForm').valid())) {
    console.log("!!!");
    return false;
  }
  //get inputs
  var input = document.getElementById("myForm").elements.namedItem("Hlower").value;
  var x = parseInt(input, 10);

  input = document.getElementById("myForm").elements.namedItem("Hlarger").value;
  var y = parseInt(input, 10);

  input = document.getElementById("myForm").elements.namedItem("Vlower").value;
  z = parseInt(input, 10);

  input = document.getElementById("myForm").elements.namedItem("Vlarger").value;

  var w = parseInt(input, 10)


  //gengerate the table

  var horizontal = [];
  var i, lower;
  if(x < y)
  {
    lower = x;
  }
  else{
    lower = y;
    y = x;
    x = lower;
  }

  for (i = 0; i < (y-x+1) ;i++) {
      horizontal[i] = lower+i;
  }

  var vertical = [];

  if(z < w)
  {
    lower = z;
  }
  else{
    lower = w;
    w = z;
    z = lower;
  }
  for (i = 0; i < (w-z+1) ;i++) {
      vertical[i] = lower+i;
  }

  var textNode;
  var j;

  var oldForm = document.getElementById("demo");
  if (oldForm != null){
    oldForm.parentNode.removeChild(oldForm);
  }
  document.getElementById("box").innerHTML = "<table class=\"table table-dark table-striped table-bordered\" id=\"demo\"></table>";
  //create thead
  textnode = vertical[i];
  var headElem = document.createElement('thead');
  var rowHeadElem = document.createElement('tr');
  var head = document.createElement('th');
  head.appendChild(document.createTextNode('#'));
  rowHeadElem.appendChild(head);

  for (j = 0; j < horizontal.length; j++)
  {
    textNode = horizontal[j];
    head = document.createElement('th');
    head.appendChild(document.createTextNode(textNode));
    rowHeadElem.appendChild(head);
  }
  headElem.appendChild(rowHeadElem);
  document.getElementById("demo").appendChild(headElem);


  var tableBody = document.createElement('tbody');
  for (i = 0; i < vertical.length; i++)
  {
    // <th scope="row">2</th>
    textNode = vertical[i];
    head = document.createElement('th');
    head.appendChild(document.createTextNode(textNode));
    rowElem = document.createElement('tr');
    rowElem.appendChild(head);
    for (j = 0; j < horizontal.length; j++)
    {
      textNode = vertical[i]*horizontal[j];
      colElem = document.createElement('td');
      colElem.appendChild(document.createTextNode(textNode));
      rowElem.appendChild(colElem);
    }
    tableBody.appendChild(rowElem);
  }

  document.getElementById("demo").appendChild(tableBody);

  return false;
}
