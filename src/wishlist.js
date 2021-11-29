import { displayCarInfo } from "./DOMMethods";

export class WishList{
    constructor(){
        this.list=[];

    }

    add(item){
        this.list.push(item);
        this.updateDOM();
        // console.log("pushed in a car");
    }

    remove(id){
        this.list = this.list.filter((car, i)=>i != id);
        this.updateDOM();
    }

    updateDOM(){
        const listContainer = document.getElementById("wishListContainer");
        const oldList = document.getElementById("wishlist")
    
        if(oldList){
            listContainer.removeChild(oldList);
        }
    
        const list = document.createElement("ul");
        list.id = "wishlist";
        list.classList.add("list-group");
    
        listContainer.appendChild(list);
    
        this.list.forEach((car,id)=>{
            let li = document.createElement("li");
            li.id = id;
            li.classList.add("list-group-item");
            li.textContent = `${car.make} ${car.model}`;
    
            li.addEventListener("click", function (){
                displayCarInfo(car,id);
                
            })
    
            list.appendChild(li);
    
        });
    }
}