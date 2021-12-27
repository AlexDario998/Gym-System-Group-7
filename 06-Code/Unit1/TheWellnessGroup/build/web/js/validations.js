
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

function validation(numero){
    
    var name;
    var groupName;
    var iName;
    var messageErrorName;
    
    if(numero == 1){
        
        name = document.getElementById('name').value;
        groupName = document.getElementById('groupName');
        iName = document.getElementById('iName');
        messageErrorName = document.getElementById('messageErrorName');
        
    }else if(numero == 2){
        
        name = document.getElementById('city').value;
        groupName = document.getElementById('groupCity');
        iName = document.getElementById('iCity');
        messageErrorName = document.getElementById('messageErrorCity');
    
    }else if(numero == 3){
        
        name = document.getElementById('brand').value;
        groupName = document.getElementById('groupBrand');
        iName = document.getElementById('iBrand');
        messageErrorName = document.getElementById('messageErrorBrand');
        
    }else if(numero == 4){
        
        name = document.getElementById('manager').value;
        groupName = document.getElementById('groupManager');
        iName = document.getElementById('iManager');
        messageErrorName = document.getElementById('messageErrorManager');
    }else if(numero == 5){
        
        name = document.getElementById('localName').value;
        groupName = document.getElementById('groupLocal');
        iName = document.getElementById('iLocal');
        messageErrorName = document.getElementById('messageErrorLocal');
    }
    
    nameValidation(name, groupName, iName, messageErrorName);
}

function nameValidation(name, groupName, iName, messageErrorName){
    
    var regexName = /^[a-zA-Z ]+$/;
    var aux;
    
    if(regexName.test(name)){
        groupName.classList.remove('formGroupIncorrect');
        groupName.classList.add('formGroupCorrect');
        iName.classList.remove('fa-times-circle');
        iName.classList.add('fa-check-circle');
        messageErrorName.classList.remove('formInputErrorActive');
        messageErrorName.classList.add('formInputErrorDesactive');
        
        aux = true;
        
    }else{
        groupName.classList.remove('formGroupCorrect');
        groupName.classList.add('formGroupIncorrect');
        iName.classList.remove('fa-check-circle');
        iName.classList.add('fa-times-circle');
        messageErrorName.classList.remove('formInputErrorDesactive');
        messageErrorName.classList.add('formInputErrorActive');
        
        aux = false;
    }
    
    return aux;
    
}

/*function bornYearValidation(){
    
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
}*/

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