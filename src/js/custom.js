$(document).ready(function () {
  $('.owl-carousel').owlCarousel();

  $('img[alt="Item 9"]').closest('.item').find('a').click(function (event) {
    event.preventDefault();
    alert('Produto esgotado');
  });





  $('.item:first-child .btn-comprar').after('<span class="new-item">Novo</span>');
});



$(document).ready(function () {

  $('.piscar-image').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });


  $('.piscar-image').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });

});;

$(document).ready(function () {

  let input = $('input[type="search"]');


  input.focus(function () {
    $(this).addClass('bg-primary');
  });


  input.blur(function () {
    $(this).removeClass('bg-primary');
    $(this).addClass('bg-light');
  });
});



$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    animateOut: 'animate__slideOutDown',
    animateIn: 'animate__zoomIn'
  });

  // Máscaras para os campos
  $('#date').mask('00/00/0000');
  $('#email').mask('A', {
    translation: {
      A: {
        pattern: /[\w@\-.+]/,
        recursive: true
      }
    }
  });
  $('#cep').mask('00000-000');
  $('#cpf').mask('000.000.000-00');
  $('#hora').mask('00:00');
  $('#phone').mask('(00) 00000-0000');

  // Validação do formulário
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Remove as classes de erro dos campos
    $('.form-control').removeClass('border-danger');

    // Restante do código de validação...

    let isValid = true;

    // Função para adicionar a classe de erro
    function showError(input) {
      input.addClass('border-danger');
      isValid = false;
    }

    // Validação do campo Nome
    let nomeInput = $('#nome');
    if (nomeInput.val().trim() === "") {
      showError(nomeInput);
    }

    // Validação do campo Email
    let emailInput = $('#email');
    if (emailInput.val().trim() === "" || !isValidEmail(emailInput.val())) {
      showError(emailInput);
    }

    // Validação do campo Data
    let dateInput = $('#date');
    if (dateInput.val().trim() === "") {
      showError(dateInput);
    }

    // Validação do campo Hora
    let horaInput = $('#hora');
    if (horaInput.val().trim() === "") {
      showError(horaInput);
    }

    // Validação do campo CEP
    cepInput = $('#cep');
    if (cepInput.val().trim() === "") {
      showError(cepInput);
    }

    // Validação do campo Celular
    let phoneInput = $('#phone');
    if (phoneInput.val().trim() === "") {
      showError(phoneInput);
    }

    // Validação do campo CPF
    let cpfInput = $('#cpf');
    if (cpfInput.val().trim() === "") {
      showError(cpfInput);
    }

    // Se algum campo estiver inválido, exiba uma mensagem de erro
    if (!isValid) {
      alert("Por favor, preencha todos os campos corretamente.");
    } else {
      // Simulação de envio do formulário (substitua com sua lógica real de envio)
      setTimeout(function () {
        // Limpar os campos do formulário
        $('#contact-form')[0].reset();

        // Exibir mensagem de envio bem-sucedido
        alert("Formulário enviado com sucesso!");
      }, 1000);
    }
  });

  // Função para validar o formato de e-mail
  function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Datepicker
  $('#date').datepicker({
    showButtonPanel: true
  });
});