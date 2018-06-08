$(document).ready(function () {

  var name,date,assigned;
  var data = [
              {"name":
              "Test Task #1",
              "date":
              "12/01/2012",
              "assigned":
              "John Doe"
              },
              {"name":
              "Test Task #2",
              "date":
              "12/02/2012",
              "assigned":
              "John Doe"
              },
              {"name":
              "Test Task #3",
              "date":
              "12/03/2012",
              "assigned":
              "John Doe"
              },
              {"name":
              "Test Task #4",
              "date":
              "12/04/2012",
              "assigned":
              "John Doe"
              },
              {"name":
              "Test Task #5",
              "date":
              "12/05/2012",
              "assigned":
              "John Doe"
              },
              {"name":
              "Test Task #6",
              "date":
              "12/06/2012",
              "assigned":
              "John Doe"
              },
              {"name":
              "Test Task #7",
              "date":
              "12/07/2012",
              "assigned":
              "John Doe"
              }
              ]

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

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    data.forEach(function(each) {

    let value = each.name;
    let value2 = each.date;
    let value3 = each.assigned;

    $('table tr:last').after('<tr><td>'+value+'</td><td>'+value2+'</td><td>'+value3+'</td');

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
