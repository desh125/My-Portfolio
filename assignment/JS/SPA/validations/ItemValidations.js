const ITEM_CODE_REGEX = /^I\d{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z0-9 ]{5,}$/; // 
const ITEM_PRICE_REGEX = /^\d+(\.\d{2})?$/; 
const ITEM_QUANTITY_REGEX = /^\d+$/; 

let i_vArray = new Array();
i_vArray.push({ field: $("#itemCode"), regEx: ITEM_CODE_REGEX });
i_vArray.push({ field: $("#itemName2"), regEx: ITEM_NAME_REGEX });
i_vArray.push({ field: $("#itemPrice2"), regEx: ITEM_PRICE_REGEX });
i_vArray.push({ field: $("#qty"), regEx: ITEM_QUANTITY_REGEX });

function clearItemInputFields() {
    $("#itemCode, #itemName2, #itemPrice2, #qty").val("");
    $("#itemCode, #itemName2, #itemPrice2, #qty").css("border", "1px solid #ced4da");
    $("#itemCode").focus();
}


function checkItemValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object);
        return true;
    } else {
        setBorder(false, object);
        return false;
    }
}

function checkAllItemValidations() {
    for (let i = 0; i < i_vArray.length; i++) {
        if (!checkItemValidations(i_vArray[i])) return false;
    }
    return true;
}

function addItemToTable() {
    if (checkAllItemValidations()) {

    } else {
        alert("Please fix validation errors before adding the item.");
    }
}
``