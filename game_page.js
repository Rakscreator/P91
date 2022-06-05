function send(){//defining send function
    number_1 = document.getElementById("nos1").value;
    number_2 = document.getElementById("nos2").value;
    actual_ans = parseInt(number_1) * parseInt(number_2);
    question = "<h4>"+ number_1 +" X "+ number_2 +"</h4>";//html for generation of question
    input_box = "<br>Answer : <input type='text' id='input_checkbox'>";//html for generation of input
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"//html for generation of button
    code = question + input_box + check_button;//combining the generated code
    document.getElementById("output").innerHTML = code;
    document.getElementById("nos1").value = "";
    document.getElementById("nos2").value = "";
}