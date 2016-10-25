var arrayPush = function(input, array){
  array.push(input);
  return array;
}
var evaluateArrays = function (warning, health, treatment){
  if (warning.length > health.length && warning.length > treatment.length){
    return "You are at risk for health problems. Go see a doctor.";
  }else if(health.length > warning.length && health.length > treament.length){
    return "You should explore treatments such as yoga, meditation, and excersize."
  }else if (treatment.length > warning.length && treatment.length > health.length){
    return "Keep up the good work."
  } else{
    return "You're doing some things well, but other things not so well. Make sure you take yourself."
  }
}


$(document).ready(function(){
  $("#stress-survey").submit(function(event){

    var warningArray = [];
    var healthArray = [];
    var treatmentArray = [];

    $("input:checkbox[name=warning-signs]:checked").each(function (){
      var warningSigns = $(this).val();
      $("#warning-responses").append(warningSigns + "<br>");
      arrayPush(warningSigns, warningArray);
    });

    $("input:checkbox[name=health-signs]:checked").each(function (){
      var healthSigns = $(this).val();
      $("#health-responses").append(healthSigns + "<br>");
      arrayPush(healthSigns, healthArray);
    });

    $("input:checkbox[name=treatment]:checked").each(function (){
      var treatmentSigns = $(this).val();
      $("#treatment-responses").append(treatmentSigns + "<br>");
      arrayPush(treatmentSigns, treatmentArray);
    });

    console.log(warningArray, healthArray, treatmentArray);

    $("#warning-responses").show();
    $("#health-responses").show();
    $("#treatment-responses").show();
    $("#response").text(evaluateArrays(warningArray, healthArray, treatmentArray));
    $("#stress-survey").hide();
    event.preventDefault();
  });
});
