const baseUrl = 'http://localhost:3135/'
var section = 1
const main_section = document.getElementsByClassName("main")[0]

// add html

function addShop(){
    section = 1
    main_section.innerHTML = `<h5>Shope Details</h5>
            <div class="box">
                <div class="subbox">
                    <label for="shopname">shop's name</label>
                    <input type="text" placeholder="Shop's Name" name="shopname">
                </div>

                <div class="subbox">
                    <label for="shopaddress">shop's address</label>
                    <input type="text" placeholder="Shop's Address" name="shopaddress">
                </div>
            </div>`
}

function addItems(){
    section = 2
    main_section.innerHTML = `<h5>Items Details</h5>
        <div class="box">
            <div class="subbox">
                <label for="itemsname">Items name</label>
                <input type="text" placeholder="Items name" name="itemsname">
            </div>

            <div class="subbox">
                <label for="Quantity">Quantity (Number)</label>
                <input type="number" placeholder="Quantity" name="Quantity">
            </div>
        </div>`
}

function addDelivery(){
    section = 3
    main_section.innerHTML = `<h5>Delivery Details</h5>
        <div class="box">
            <div class="subbox">
                <label for="deliveryman">Delivery Man</label>
                <input type="text" placeholder="Delivery Man" name="deliveryman">
            </div>

            <div class="subbox">
                <label for="deliveryaddress">Phone number</label>
                <input type="number" placeholder="Delivery Number" name="deliveryaddress">
            </div>
        </div>`
}



//post method
function dataPost(){

    switch(section){
        case 1:
            let sdata = {
                shop_name:document.getElementsByName('shopname')[0].value,
                address:document.getElementsByName('shopaddress')[0].value
            }
            //console.log(data)
            $.post(baseUrl+"shop",sdata,function(result){
                alert(result)
            })
            break;
        
        case 2:
            let idata = {
                name:document.getElementsByName('itemsname')[0].value,
                quantity:Number(document.getElementsByName('Quantity')[0].value)
            }
            //console.log(data)
            $.post(baseUrl+"item",idata,function(result){
                alert(result)
            })
            break;

        case 3:
            let ddata = {
                delivery_name:document.getElementsByName('deliveryman')[0].value,
                delivery_number:Number(document.getElementsByName('deliveryaddress')[0].value)
            }
            //console.log(data)
            $.post(baseUrl+"delivery",ddata,function(result){
                alert(result)
            })
            break;

        default:
            null
    }
}