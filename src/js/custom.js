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
});

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

  $('#contact-form').on('submit', function (event) {
    event.preventDefault();

    $('.form-control').removeClass('border-danger');

    let isValid = true;

    function showError(input) {
      input.addClass('border-danger');
      isValid = false;
    }

    let nomeInput = $('#nome');
    if (nomeInput.val().trim() === '') {
      showError(nomeInput);
    }

    let emailInput = $('#email');
    if (emailInput.val().trim() === '' || !isValidEmail(emailInput.val())) {
      showError(emailInput);
    }

    let dateInput = $('#date');
    if (dateInput.val().trim() === '') {
      showError(dateInput);
    }

    let horaInput = $('#hora');
    if (horaInput.val().trim() === '') {
      showError(horaInput);
    }

    cepInput = $('#cep');
    if (cepInput.val().trim() === '') {
      showError(cepInput);
    }

    let phoneInput = $('#phone');
    if (phoneInput.val().trim() === '') {
      showError(phoneInput);
    }

    let cpfInput = $('#cpf');
    if (cpfInput.val().trim() === '') {
      showError(cpfInput);
    }

    if (!isValid) {
      alert('Por favor, preencha todos os campos corretamente.');
    } else {
      setTimeout(function () {
        $('#contact-form')[0].reset();
        alert('Formulário enviado com sucesso!');
      }, 1000);
    }
  });

  function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  $('#date').datepicker({
    showButtonPanel: true
  });
});

$(document).ready(function () {
  $('#search-button').on('click', function () {
    var mensagem = $('#search-input').val();
    console.log('Mensagem enviada:', mensagem);
  });
});

