$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            weight:
                {
                    required: true,

                    min:88,
                    max:353,
                    digits:true
                },
            height:
                {
                    required: true,

                    min:59,
                    max:79,
                    digits:true
                }

        };

    // Object containing the error messages
    var myMessages =
        {
            weight:
                {
                    required: "A weight is Required",

                    min: "Too Little",
                    maX: "Too Much",
                    digits:"Invalid Number"
                },
            height:
                {
                    required: "A height is Required",

                    min: "Too Little",
                    maX: "Too Much",
                    digits:"Invalid Number"
                }
        };

    $("Form").validate(
        {
            submitHandler:runMyProgram,
            rules: myRules,
            messages: myMessages,
        }
    );

    function runMyProgram() {
        //nested if statement for each radio option

        $("form").submit(runMyProgram)
        var weight = $("input[name=weight]").val()
        var height = $("input[name=height]").val()

        var BMIImp = weight * 703 / (height * height);
        var BMIMetric =  weight / height;

        if($('#impOption').is(':checked'))
        {
            $("#message").text("Your BMI is: " + (BMIImp).toFixed(3));

            if(BMIImp <= 18.6) {
                $("#message2").text("Status: Under Weight");
            } else if(BMIImp >= 18.6 && BMIImp <= 25) {
                $("#message2").text("Status:  Normal Weight");
            }
            else if(BMIImp > 25 && BMIImp <= 30) {
                $("#message2").text("Status:  Above Weight");
            } else {
                $("#message2").text("Status:  Obese");
            }
        }
        else if($('#metricOption').is(':checked'))
        {
            $("#message").text("Your BMI is: " + (BMIMetric).toFixed(3));

            if(BMIMetric <= 18.6) {
                $("#message2").text("Status:  Under Weight");
            } else if(BMIMetric >= 18.6 && BMIMetric <= 25) {
                $("#message2").text("Status:  Normal Weight");
            }
            else if(BMIMetric > 25 && BMIMetric <= 30) {
                $("#message2").text("Status:  Above Weight");
            } else {
                $("#message2").text("Status:  Obese");
            }
        }

    }
});