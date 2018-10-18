var form = $(".contact-form");

form.validate({
    errorElement: "span",
    rules: {
        nome: "required",
        email: true,    
        phone: "required",
    },

    messages: {
        nome: "Por favor, insira seu nome!",
        email: "Digite um e-mail válido!",
        phone: "Por favor, insira seu número!",
        msg: "Por favor, insira sua mensagem!"
    }
});