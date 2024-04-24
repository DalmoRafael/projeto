function search(){
    let input = document.getElementById('searchbar').value 
    input = input.toLowercase() 
    let x = document.getElementsByClassName('produtos') 
    
    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowercase().includes(input)){
            x[i].style.display = "none"
        }else{
            x[i].style.display = "list-item"
        }

    }
        
}