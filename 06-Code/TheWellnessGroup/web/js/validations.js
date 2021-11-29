
function idValidation(){
    
    var regexId = /[0-9]+$/;
    var chickenId = document.getElementById('chickenId').value;
    var groupChickenId = document.getElementById("groupChickenId");
    var iChickenId = document.getElementById('iChickenId');
    var messageErrorId = document.getElementById('messageErrorId');
    var aux;
    
    if(regexId.test(chickenId)){
        groupChickenId.classList.remove('formGroupIncorrect');
        groupChickenId.classList.add('formGroupCorrect');
        iChickenId.classList.remove('fa-times-circle');
        iChickenId.classList.add('fa-check-circle');
        
        aux = true;
        
    }else{
        groupChickenId.classList.remove('formGroupCorrect');
        groupChickenId.classList.add('formGroupIncorrect');
        iChickenId.classList.remove('fa-check-circle');
        iChickenId.classList.add('fa-times-circle');
        
        aux = false;
    }
    
    return aux;
    
}

function nameValidation(){
    
    var regexName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('name').value;
    var groupChickenName = document.getElementById('groupChickenName');
    var iChickenName = document.getElementById('iChickenName');
    var messageErrorName = document.getElementById('messageErrorName');
    var aux;
    
    if(regexName.test(name)){
        groupChickenName.classList.remove('formGroupIncorrect');
        groupChickenName.classList.add('formGroupCorrect');
        iChickenName.classList.remove('fa-times-circle');
        iChickenName.classList.add('fa-check-circle');
        messageErrorName.classList.remove('formInputErrorActive');
        messageErrorName.classList.add('formInputErrorDesactive');
        
        aux = true;
        
    }else{
        groupChickenName.classList.remove('formGroupCorrect');
        groupChickenName.classList.add('formGroupIncorrect');
        iChickenName.classList.remove('fa-check-circle');
        iChickenName.classList.add('fa-times-circle');
        messageErrorName.classList.remove('formInputErrorDesactive');
        messageErrorName.classList.add('formInputErrorActive');
        
        aux = false;
    }
    
    return aux;
    
}

function bornYearValidation(){
    
    var regexBornYear = /[0-9]+$/;
    var bornYear = document.getElementById('bornYear').value;
    var groupChickenBornYear = document.getElementById("groupChickenBornYear");
    var iChickenBornYear = document.getElementById('iChickenBornYear');
    var messageErrorBornYear = document.getElementById('messageErrorBornYear');
    var aux;
    
    var date = new Date();
    
    if(regexBornYear.test(bornYear) && bornYear <= date.getFullYear()){
        groupChickenBornYear.classList.remove('formGroupIncorrect');
        groupChickenBornYear.classList.add('formGroupCorrect');
        iChickenBornYear.classList.remove('fa-times-circle');
        iChickenBornYear.classList.add('fa-check-circle');
        messageErrorBornYear.classList.remove('formInputErrorActive');
        messageErrorBornYear.classList.add('formInputErrorDesactive');
        
        aux = true;
        
    }else{
        groupChickenBornYear.classList.remove('formGroupCorrect');
        groupChickenBornYear.classList.add('formGroupIncorrect');
        iChickenBornYear.classList.remove('fa-check-circle');
        iChickenBornYear.classList.add('fa-times-circle');
        messageErrorBornYear.classList.remove('formInputErrorDesactive');
        messageErrorBornYear.classList.add('formInputErrorActive');
        
        aux = false;
    }
    
    return aux;
}

function colorValidation(){
    
    var regexColor = /^[a-zA-Z ]+$/;
    var color = document.getElementById('color').value;
    var groupChickenColor = document.getElementById('groupChickenColor');
    var iChickenColor = document.getElementById('iChickenColor');
    var messageErrorColor = document.getElementById('messageErrorColor');
    var aux;
    
    if(regexColor.test(color)){
        groupChickenColor.classList.remove('formGroupIncorrect');
        groupChickenColor.classList.add('formGroupCorrect');
        iChickenColor.classList.remove('fa-times-circle');
        iChickenColor.classList.add('fa-check-circle');
        messageErrorColor.classList.remove('formInputErrorActive');
        messageErrorColor.classList.add('formInputErrorDesactive');
        
        aux = true;
        
    }else{
        groupChickenColor.classList.remove('formGroupCorrect');
        groupChickenColor.classList.add('formGroupIncorrect');
        iChickenColor.classList.remove('fa-check-circle');
        iChickenColor.classList.add('fa-times-circle');
        messageErrorColor.classList.remove('formInputErrorDesactive');
        messageErrorColor.classList.add('formInputErrorActive');
        
        aux = false;
    }
    
    return aux;
}

function submitValidation(){
    
    var aux = false;
    
    if(idValidation() == true && nameValidation() == true && bornYearValidation() == true && colorValidation() == true){
        aux = true;
    }else{
        window.alert("Please, check your information, you must enter the data correctly.");
    }
    
    return aux;
    
}