const enviar=document.getElementById('enviar'),
    asunto=document.getElementById('asunto'),
    texto=document.getElementById('texto'),
    email=document.getElementById('email'),
    aca=document.getElementById('aca'),
    roulete=document.getElementById('roulete');
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const validado=[];
document.addEventListener('DOMContentLoaded',()=>{
    enviar.disabled=true;
})

email.addEventListener('blur',(e)=>{
    
    if(!regex.test(e.target.value) || e.target.value=="" ){
        enviar.disabled=true;
       return error('Email')
    }

    validar()
})

asunto.addEventListener('blur',(e)=>{
    
    if(e.target.value=="" ){
        enviar.disabled=true;
       return error('Asunto')
    }
    
validar()
})


texto.addEventListener('blur',(e)=>{
    
    if(e.target.value=="" ){
        enviar.disabled=true;
       return error('Mensaje')
    }

    validar()
})

function validar(){
    if(texto.value!="" && email.value!="" && asunto.value!=""){
        console.log('hola')
        enviar.disabled=false;    } 
}

enviar.addEventListener('click', (e)=>{
e.preventDefault();
enviado('mensaje')
})

function error(mensaje){
    let eror=document.getElementsByClassName(mensaje);
    console.log(eror)
    if(eror.length==0){

        const div=document.createElement('div');
        div.setAttribute('role','alert')
        div.classList.add('alert', 'alert-danger',`${mensaje}`)
        div.innerText=`${mensaje} no valido`;
        console.log(div)
        aca.appendChild(div)
    setTimeout(()=>{
    div.remove()
    },6000)

    }
        
}


function enviado(mensaje){
    let eror=document.getElementsByClassName(mensaje);
    console.log(eror)
    if(eror.length==0){
roulete.classList.add('spinner-border')
roulete.setAttribute('role','status')
    setTimeout(()=>{
       roulete.remove();
       enviar.disabled=true; 
        const div=document.createElement('div');
        div.setAttribute('role','alert')
        div.classList.add('alert', 'alert-primary',`${mensaje}`)
        div.innerText=`${mensaje} enviado`;
        console.log(div)
        aca.appendChild(div)
        setTimeout(()=>{location.reload()},5000)
        
    },4000)

    }
        
}