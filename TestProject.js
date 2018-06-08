$(document).ready(function () {

  var name,date,assigned;

  // Keypress event - On keypress of the text-box the submit button will be enabled.

  $('#name').on('keypress',function() {
    $('#submitButton').attr('disabled',false);
  });
  $('#date').on('keypress',function() {
    $('#submitButton').attr('disabled',false);
  });
  $('#assigned').on('keypress',function() {
    $('#submitButton').attr('disabled',false);
  });

  //Populates data to the table.

  $.ajax({
    url:"http://localhost:3000/posts/",
    method:"GET"
  }).done(function(response) {

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    response.forEach(function(each) {

    let value = each.name;
    let value2 = each.date;
    let value3 = each.assigned;

    $('table tr:last').after('<tr><td>'+value+'</td><td>'+value2+'</td><td>'+value3+'</td');

  });
  });

  //Submit Button- On click new task will be added to the table.

  $('#submitButton').on('click',function() {

    name = $('#name').val();
    date = $('#date').val();
    assigned = $('#assigned').val();

    $('table tr:last').after('<tr><td>'+name+'</td><td>'+date+'</td><td>'+assigned+'</td');

    $('#name').val('');
    $('#date').val('');
    $('#assigned').val('');
    $('#submitButton').attr('disabled',true);

  });


});
