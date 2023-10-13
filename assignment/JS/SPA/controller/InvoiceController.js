    function populateCustomerDropdown() {
        var selectCusID = $('#selectCusID');

        selectCusID.empty();

        selectCusID.append($('<option>', {
            value: '',
            text: 'Select Customer ID'
        }));

       for(let i = 0; i < customerDB.length; i++){
            selectCusID.append($('<option>', {
                value: customerDB[i].id,
                text: customerDB[i].id
            }));
        }
    }

    function populateItemCodeDropdown() {
        var selectItemCode = $('#selectItemCode');

        selectItemCode.empty();

        selectItemCode.append($('<option>', {
            value: '',
            text: 'Select Item Code'
        }));

        itemDB.forEach(function (item) {
            selectItemCode.append($('<option>', {
                value: item.code,
                text: item.code
            }));
        });
    }


    $('#selectCusID').change(function () {
        var selectedCustomerId = $(this).val();
        var selectedCustomer = customerDB.find(function (customer) {
            return customer.id == selectedCustomerId;
        });

  
        $('#orderId').val(generateOrderId()); 
        $('#customerName').val(selectedCustomer.name);
        $('#customerTP').val(selectedCustomer.tp);
        $('#customerSalary').val(selectedCustomer.salary);
        $('#customerAddress').val('');
    });

    $('#selectItemCode').change(function () {
        var selectedItemCode = $(this).val();
        var selectedItem = itemDB.find(function (item) {
            return item.code == selectedItemCode;
        });

        $('#itemName2').val(selectedItem.name);
        $('#itemPrice2').val(selectedItem.price);
        $('#qtyOnHand').val(selectedItem.quantity);
        let qtyAfter = $('#qty').val();
        $('#qtyAfter').val(selectedItem.quantity-qtyAfter);
    });

    $('#qty, #itemPrice2').on('input', function () {
        var qty = parseFloat($('#qty').val()) || 0;
        var price = parseFloat($('#itemPrice2').val()) || 0;
        var totalPrice = qty * price;
        $('#totalPrice').val(totalPrice);
    });

    function generateOrderId() {
        return 'ORD' + Math.floor(Math.random() * 10000);
    }

    $('#purchaseButton').click(function () {

        alert('Purchase button clicked');
    });

    $('#addItemButton2').click(function () {
        var itemCode = $('#selectItemCode').val();
        var itemName = $('#itemName2').val();
        var itemPrice = parseFloat($('#itemPrice2').val()) || 0;
        var qty = parseInt($('#qty').val()) || 0;
        var qtyAfter = parseInt($('#qtyAfter').val()) || 0;

        var totalPrice = itemPrice * qty;

        var newRow = $('<tr>');
        newRow.append($('<td>').text(itemCode));
        newRow.append($('<td>').text(itemName));
        newRow.append($('<td>').text(itemPrice));
        newRow.append($('<td>').text(qty));
        newRow.append($('<td>').text(totalPrice));

        $('#tb3').append(newRow);

        $('#qtyAfter').val(qtyAfter - qty);

        $('#selectItemCode').val('');
        $('#itemName2').val('');
        $('#itemPrice2').val('');
        $('#qty').val('');

        $('#qty, #itemPrice2').on('input', function () {
            var updatedQty = parseInt($('#qty').val()) || 0;
            var updatedPrice = parseFloat($('#itemPrice2').val()) || 0;
            var updatedTotalPrice = updatedQty * updatedPrice;
            $('#totalPrice').val(updatedTotalPrice);
        });
    });

    function calculateBalanceAndDiscount() {
        var cash = parseFloat($('#cash').val()) || 0;
        var totalPrice = parseFloat($('#totalPrice').val()) || 0;

        var balance = cash - totalPrice;

        var discountPercentage = parseFloat($('#discount').val()) || 0;
        var discountAmount = (totalPrice * discountPercentage) / 100;

        $('#balance').val(balance);
        $('#totalPrice').val(totalPrice - discountAmount);
    }

    $('#cash').on('input', calculateBalanceAndDiscount);
    $('#discount').on('input', calculateBalanceAndDiscount);
