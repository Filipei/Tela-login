function clickentrar() {
    const login = document.getElementById('loginjs').value;
    const senha = document.getElementById('senhajs').value;

    if (login === "" || senha === "") {
        Swal.fire({
            title: "Dados incompletos",
            text: "Por favor, preencha todos os dados.",
            icon: "error",
          });
    } else {
        Swal.fire({
            title: "Login bem Sucedido.",
            text: "Seja bem Vindo ",
            icon: "success",
          });     
    }
}
function clickesqueceu(){
    const esqueceu = document.getElementById('esqueceutext')

    Swal.fire({
        title: "Esqueceu sua senha?",
        text: "Verifique o link que chegou no seu Email.",
        icon: "question"
      });
}