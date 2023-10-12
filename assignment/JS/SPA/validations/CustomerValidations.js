// Validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

// Add validations and text fields to the array
let c_vArray = new Array();
c_vArray.push({ field: $("#cId"), regEx: CUS_ID_REGEX });
c_vArray.push({ field: $("#cName"), regEx: CUS_NAME_REGEX });
c_vArray.push({ field: $("#cTP"), regEx: CUS_NAME_REGEX });
c_vArray.push({ field: $("#cAddress"), regEx: CUS_ADDRESS_REGEX });
c_vArray.push({ field: $("#cSalary"), regEx: CUS_SALARY_REGEX });

function clearCustomerInputFields() {
    $("#cId, #cName, #cAge,#cTP, #cSalary").val("");
    $("#cId, #cName, #cAge,#cTP, #cSalary").css("border", "1px solid #ced4da");
    $("#cId").focus();
    //setBtn();
}


function clearItemInputFields() {
    $("#itemCode, #itemName, #price,#quantity").val("");
    $("#itemCode, #itemName, #price,#quantity").css("border", "1px solid #ced4da");
    $("#itemCode").focus();
    //setBtn();
}
setBtn();

// Disable tab
$("#cId, #cName, #cAddress,#cTP, #cSalary").on("keydown keyup", function (e) {
    // Get the index number of data input fields
    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("id") == e.target.id));

    // Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    // Check validations
    checkValidations(c_vArray[indexNo]);

    setBtn();

    // If the enter key is pressed, check and focus
    if (e.key == "Enter") {
        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {
            // Check validation is ok
            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                saveCustomer();
            }
        }
    }
});

function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object);
        return true;
    }
    setBorder(false, object);
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }
}

function checkAll() {
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