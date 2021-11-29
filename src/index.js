import dayjs from "dayjs"
import {Car} from "./car.js"
import { displayCarInfo, updateDOMWishlist } from "./DOMMethods.js";
import {WishList} from "./wishlist.js"

// // console.log(dayjs());

window.onload = function() {
    const form = document.getElementById("submitForm");
    const makeInput = document.getElementById("makeInput");
    const modelInput = document.getElementById("modelInput");
    const yearInput = document.getElementById("yearInput");

    const wishlist = new WishList();

    const [removeBtn] = document.getElementsByClassName("btn btn-warning removeBtn");
    removeBtn.addEventListener("click",function(){
        displayCarInfo({make: "", model:"", year:""},this.id)
        wishlist.remove(this.id);

    })

    form.addEventListener("submit", function(event){
        console.log("in side event listener---submit")
        event.preventDefault();

        let newCar = new Car(makeInput.value, modelInput.value, yearInput.value);
        wishlist.add(newCar);

    });




}






console.log("End OF EVERY THING");