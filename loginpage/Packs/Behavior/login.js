localStorage.setItem('cpf', "00000000000");
localStorage.setItem('password', "soueu");

const cpfacess = localStorage.getItem('cpf');
// let cpfacessnumber = parseInt(cpfacess);
const passwordacess = localStorage.getItem('password');
function abrir(){
    window.location.href = "../../dashboard/account.html";
}

function logar(){
    let cpfcamp = document.getElementById('cpf').value;
    let passwordcamp = document.getElementById('password').value;
    let realcpf = cpfcamp.replace(/[.-]/g,"");

    if((realcpf === cpfacess) && (passwordcamp === passwordacess)){
       abrir();
    }else{
        alert("Senha ou cpf incorreto")
    };
};

onload = function(){
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function() {
        let value = cpfInput.value;
        value = value.replace(/\D/g, '');
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        cpfInput.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    });
};
