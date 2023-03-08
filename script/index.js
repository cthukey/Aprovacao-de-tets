let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')

let ButtonVoltar = document.querySelector('.topCard .voltar')

let alert = document.querySelector('dialog')

nota1.oninput = () =>alert.close() 
nota2.oninput = () =>alert.close()

let modal = {
    Resultado:document.querySelector('.resultado'),
    Screen2:document.querySelector('.screen2'),
    Image:document.querySelector('.imagem'),

    open(){
        modal.Screen2.classList.add('open')
    },
    close(){
        modal.Screen2.classList.remove('open')
    }
}

function btVerificar(event){
    event.preventDefault()//fz com q o formulario nao recarrege

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
            
    let showAlertError = notANumber(n1) || notANumber(n2)
    if(showAlertError){
        return alert.show()
    }

    if(n1 > 100 || n2 > 100){
        return alert.show()
    }
            
    function media(n1,n2){
        return (n1 + n2)/2
    }
    let m = media(n1,n2)

           
    function passou(m){
        if(m < 80){
        return 'Reprovado' 
        }else{
            return 'Aprovado'
        }      
    }    
        
        
    function reEap(){
        if(passou(m) == 'Aprovado'){
            modal.Image.src = './complemento/aprovado.png'
            return passou(m)
        }else{
            modal.Image.src = './complemento/negado.png'
            return passou(m)
        }    
    }
    modal.Resultado.innerHTML = (`${reEap(passou(m))}`)   
    modal.open() 
    alert.close()
        
}    

window.addEventListener('keydown', handleKeydown)
function handleKeydown(e){
    if(e.key == 'Escape'){
        modal.close()
    }    
}
   
ButtonVoltar.onclick = () =>{
    modal.close()
}

function notANumber(value){
    return isNaN(value) || value == ""
}