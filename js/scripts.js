$(document).ready(function() {
  $("#term").click(function() {
    $("#definition").show(function() {
      $("#term").hide();
    });
  $("#definition").click(function() {
    $("#term").show(function() {
      $("#definition").hide();
      });
    });
  });
  $("#term2").click(function() {
    $("#definition2").show(function() {
      $("#term2").hide();
    });
  $("#definition2").click(function() {
    $("#term2").show(function() {
      $("#definition2").hide();
      });
    });
  });
  $("#term3").click(function() {
    $("#definition3").show(function() {
      $("#term3").hide();
    });
  $("#definition3").click(function() {
    $("#term3").show(function() {
      $("#definition3").hide();
      });
    });
  });
  $("#term4").click(function() {
    $("#definition4").show(function() {
      $("#term4").hide();
    });
  $("#definition4").click(function() {
    $("#term4").show(function() {
      $("#definition4").hide();
      });
    });
  });
});