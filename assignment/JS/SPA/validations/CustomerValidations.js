const CUS_ID_REGEX = /^C00-\d{3}$/; 
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_TP_REGEX = /^\d{10}$/; 
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/; 
const CUS_SALARY_REGEX = /^\d+(\.\d{2})?$/; 

let c_vArray = new Array();
c_vArray.push({ field: $("#cId"), regEx: CUS_ID_REGEX });
c_vArray.push({ field: $("#cName"), regEx: CUS_NAME_REGEX });
c_vArray.push({ field: $("#cTP"), regEx: CUS_TP_REGEX });
c_vArray.push({ field: $("#cAddress"), regEx: CUS_ADDRESS_REGEX });
c_vArray.push({ field: $("#cSalary"), regEx: CUS_SALARY_REGEX });
function clearCustomerInputFields() {
    $("#cId, #cName, #cAge,#cTP, #cSalary").val("");
    $("#cId, #cName, #cAge,#cTP, #cSalary").css("border", "1px solid #ced4da");
    $("#cId").focus();
    //setBtn();
}


function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object);
        return true;
    } else {
        setBorder(false, object);
        return false;
    }
}

function setBorder(bol, ob) {
    if (!bol) {
        ob.field.css("border", "2px solid red");
    } else {
        ob.field.css("border", "2px solid green");
    }
}

function checkAll() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}

function checkAllValidations() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}
/*
function setBtn() {
    $("#deleteButtonCustomer").prop("disabled", true);
    $("#updateButtonCustomer").prop("disabled", true);

    if (checkAll()) {
        $("#saveButtonCustomer").prop("disabled", false);
    } else {
        $("#saveButtonCustomer").prop("disabled", true);
    }

    let id = $("#cId").val();
    if (searchCustomer(id) == undefined) {
        $("#deleteButtonCustomer").prop("disabled", true);
        $("#updateButtonCustomer").prop("disabled", true);
    } else {
        $("#deleteButtonCustomer").prop("disabled", false);
        $("#updateButtonCustomer").prop("disabled", false);
    }
}
*/