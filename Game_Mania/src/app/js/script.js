 let menu = document.getElementById("menu");

        function mostrarMenu(){
            if(menu.style.display != "flex"){
                menu.style.display = "flex"
            }else{
                menu.style.display = "none"
            }
        }

function mostrarPopup(){
    window.alert("Seja Bem Vindo!")
}