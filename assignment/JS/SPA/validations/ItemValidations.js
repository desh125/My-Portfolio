const ITEM_CODE_REGEX = /^I\d{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z0-9 ]{5,}$/;
const ITEM_PRICE_REGEX = /^\d+(\.\d{2})?$/;
const ITEM_QUANTITY_REGEX = /^\d+$/;

let i_vArray = new Array();
i_vArray.push({ field: $("#itemCode"), regEx: ITEM_CODE_REGEX, name: "Item Code" });
i_vArray.push({ field: $("#itemName"), regEx: ITEM_NAME_REGEX, name: "Item Name" });
i_vArray.push({ field: $("#price"), regEx: ITEM_PRICE_REGEX, name: "Item Price" });
i_vArray.push({ field: $("#quantity"), regEx: ITEM_QUANTITY_REGEX, name: "Quantity" });

function clearItemInputFields() {
    $("#itemCode, #itemName, #price, #quantity").val("");
    $("#itemCode, #itemName, #price, #quantity").css("border", "1px solid #ced4da");
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
    let isValid = true;

    for (let i = 0; i < i_vArray.length; i++) {
        if (!checkItemValidations(i_vArray[i])) {
            isValid = false;
        }
    }

    return isValid;
}
function addItemToTable() {
    if (checkAllItemValidations()) {

    } else {
        alert("Please fix validation errors before adding the item.");
    }
}
