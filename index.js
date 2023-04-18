src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"

function myFunction() 
{
        window.location.href="index.html";  
}
function forward() 
{
        window.location.href="home.html";  
}

// Code for functional table
type="text/javascript">
      $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
        var actions = $("table td:last-child").html();
        // Append table with add row form on add new button click
        $(".add-new").click(function () {
          $(this).attr("disabled", "disabled");
          var index = $("table tbody tr:last-child").index();
          var row =
            "<tr>" +
            '<td><input type="text" class="form-control" name="current shift" id="cur_shft"></td>' +
            '<td><input type="text" class="form-control" name="name current" id="n_curr"></td>' +
            '<td><input type="text" class="form-control" name="shift handedover" id="shft_hndover"></td>' +
            '<td><input type="text" class="form-control" name="name next" id="n_next"></td>' +
            '<td><input type="text" class="form-control" name="time" id="shft_time"></td>' +
            "<td>" +
            actions +
            "</td>" +
            "</tr>";
          $("table").append(row);
          $("table tbody tr")
            .eq(index + 1)
            .find(".add, .edit")
            .toggle();
          $('[data-toggle="tooltip"]').tooltip();
        });
        // Add row on add button click
        $(document).on("click", ".add", function () {
          var empty = false;
          var input = $(this).parents("tr").find('input[type="text"]');
          input.each(function () {
            if (!$(this).val()) {
              $(this).addClass("error");
              empty = true;
            } else {
              $(this).removeClass("error");
            }
          });
          $(this).parents("tr").find(".error").first().focus();
          if (!empty) {
            input.each(function () {
              $(this).parent("td").html($(this).val());
            });
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
          }
        });
        // Edit row on edit button click
        $(document).on("click", ".edit", function () {
          $(this)
            .parents("tr")
            .find("td:not(:last-child)")
            .each(function () {
              $(this).html(
                '<input type="text" class="form-control" value="' +
                  $(this).text() +
                  '">'
              );
            });
          $(this).parents("tr").find(".add, .edit").toggle();
          $(".add-new").attr("disabled", "disabled");
        });
        // Delete row on delete button click
        $(document).on("click", ".delete", function () {
          $(this).parents("tr").remove();
          $(".add-new").removeAttr("disabled");
        });
      });

    