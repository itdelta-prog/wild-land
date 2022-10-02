// LOCALSTORAGE
this.storeInputs = function(){
	var inputs = document.getElementsByTagName('input');

	Array.prototype.forEach.call(inputs, function(item){
		item.addEventListener('keyup', function(event){
			let inputName = event.target.name;
			let inputValue = event.target.value;

			if(inputName !== '_hjid')
				localStorage.setItem(inputName, inputValue);
		});
  	});
}

storeInputs();

this.setInputs = function(){
	var inputs = getStorage();

	for(var name in inputs){
	    if (name.includes('/')) continue;

	    var inp = document.querySelector('input[name=' + name + ']');
	    if (inp) inp.value = inputs[name];
	}
}
//setInputs();

function getStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
	    if(keys[i] !== '_hjid')
        	values[keys[i]] = localStorage.getItem(keys[i]);
    }

    return values;
}
// MODALS
this.openModal = function(event){
	//event.preventDefault();
	document.getElementsByTagName( 'html' )[0].classList.toggle('hidden');
	document.getElementsByClassName('modals__wrapper')[0].classList.toggle('show');
	document.getElementById(event.dataset.target).classList.add('show');
}

this.modalClose = function(event){
        var iddd = $(event.closest('.modal')).prop("id");
	event.closest('.modal').classList.toggle('show');
	document.getElementsByTagName( 'html' )[0].classList.toggle('hidden');
	document.getElementsByClassName('modals__wrapper')[0].classList.toggle('show');
	if (iddd == 'modalThanks' ) window.location = '/';
}

this.modalCloseAll = function(){
	document.getElementsByTagName( 'html' )[0].classList.remove('hidden');
	document.getElementsByClassName('modals__wrapper')[0].classList.remove('show');

	var modals = document.getElementsByClassName("modal");
	Array.prototype.forEach.call(modals, function(item){
		item.classList.remove('show');
  	});
}

// COUNTDOWN

// Set the date we're counting down to
let currentDate = new Date();
currentDate.setMinutes(currentDate.getMinutes() + 5);

var countDownDate = currentDate.getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var countdowns = document.getElementsByClassName("countdown__datetime");

  Array.prototype.forEach.call(countdowns, function(item){
	 item.innerHTML = "<span class='num'>" + days + "</span><span class='del'>:</span><span class='num'>" + hours + "</span><span class='del'>:</span><span class='num'>"
  + minutes + "</span><span class='del'>:</span><span class='num'>" + seconds + "</span>";
  });

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown__datetime").innerHTML = "EXPIRED";
  }
}, 1000);


// TRANSLITERATION FUNCTION
this.rus_to_latin = function(str) {

    var ru = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
        'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
    }, n_str = [];

    str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

    for ( var i = 0; i < str.length; ++i ) {
       n_str.push(
              ru[ str[i] ]
           || ru[ str[i].toLowerCase() ] == undefined && str[i]
           || ru[ str[i].toLowerCase() ].toUpperCase()
       );
    }

    return n_str.join('');
}

$(document).ready(function() {
    $('#registration').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            password: {
                required: true,
            }
        },
        messages: {
            email: {
                required: "Please enter email",
                email: "Неверно введена почта. Попробуйте еще раз."
            },
            email: {
                required: "Please enter email",
            },
            password: {
                required: "Please enter password",
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
  $('#main-page-form2').hide();

  // VALIDATE EMAIL FIRST STEP
  $('#main-page-form1 button').click((e) => {
    e.preventDefault();

var firstnameInput = $('input[name="firstname"]').val();
var lastnameInput = $('input[name="lastname"]').val();

    var phoneInput = $('input[name="phone"]').val();

    var emailInput = $('input[name="email"]').val();

$('.input__wrapper_email').removeClass('error');
$('.input__wrapper_phone').removeClass('error');
$('.input__wrapper_firstname').removeClass('error');
$('.input__wrapper_lastname').removeClass('error');



    if(firstnameInput.length < 2) {
        $('.input__wrapper_firstname .error__text').text('Введите свое Имя');
        $('.input__wrapper_firstname').addClass('error');
        return;
} else  if(lastnameInput.length < 2) {
        $('.input__wrapper_lastname .error__text').text('Введите свою Фамилию');
        $('.input__wrapper_lastname').addClass('error');
        return;
} else if(phoneInput.length < 6) {
        $('.input__wrapper_phone .error__text').text('Введите свой телефон');
        $('.input__wrapper_phone').addClass('error');
        return;
    }
    else
    if(emailInput.length < 4) {
        $('.input__wrapper_email .error__text').text('Введите свой email-адрес');
        $('.input__wrapper_email').addClass('error');
        return;
    }
    else
    if(emailInput.indexOf('@') === -1) {
        $('.input__wrapper_email .error__text').text('Неверный формат email-адреса');
        $('.input__wrapper_email').addClass('error');
        return;
    } else {

        let data = {
	        email: emailInput,
            name: firstnameInput + ' ' + lastnameInput,
            url: 'https://safevpn.online/register'
        };

        $.ajax({
            url: '/api/proxy',
            data: data,
            type: 'POST'
        }).done(function (response) {
	        console.log(response);
        	$('.input__wrapper_email').removeClass('error');
        	$('#main-page-form1').hide();
			$('#main-page-form2').show();

        }).fail(function (response) {
	        console.log(response);
            $('.input__wrapper_email .error__text').text(response.responseJSON.error);
            $('.input__wrapper_email').addClass('error');
        });
    }


  })


  $('#card-number').inputmask({"mask": "9999 9999 9999 9999"});
  $('#card-expiry').inputmask({"mask": "99/99"});
  $('#card-cvc').inputmask({"mask": "999"});
  new Card({
    form: document.querySelector('#form'),
    container: '.card-wrapper',
    formatting: true,
  });
});

// SET NAME FROM FIRST STEP TO CARD
$('.button-continue').click((e) => {
    // TRANSLITERATION FIELDS
    let card_owner = rus_to_latin(document.querySelector('input[name=firstname]').value + ' ' + document.querySelector('input[name=lastname]').value);

    // SET VALUE TO CARD NAME FIELD
    document.querySelector('#name').value = document.querySelector('input[name=firstname]').value || document.querySelector('input[name=lastname]').value? card_owner : '';

    // SET VALUE TO CARD NAME HIDDEN INPUT
    $('input[data-cp="name"]').val(document.querySelector('#name').value);

    // WRITE NAME TO CARD IMAGE
    if(document.querySelector('#name').value)
        document.querySelector('.jp-card-name').textContent = document.querySelector('#name').value;
});

// $('.button-submit').click((e) => {
//     document.querySelector('#form').submit();
// });
$('#card-expiry').change(function(e) {
    let val = this.value.split('/');
    $('input[data-cp="expDateMonth"]').val(val[0]);
    $('input[data-cp="expDateYear"]').val(val[1]);
});

$('#card-number').change(function(e) {
    $('input[data-cp="cardNumber"]').val(this.value);
});

$('#card-cvc').change(function(e) {
    console.log(this.value);
    $('input[data-cp="cvv"]').val(this.value);
});

$('#name').change(function(e) {
    $('input[data-cp="name"]').val(this.value);
});

// $('.payment-button').click();
// $.ajax({
//     url: 'http://gifter.parabee8.beget.tech/api/cloudPayments',
//     method: 'POST',
//     success: function(response){
//         console.log('response', response);
//     },
//     error: function( response ){
//         console.log('error', response);
//     }
// });

$(document).on("click", ".button-submit", function (e) {
    console.log(e);
    e.preventDefault();
    //Проверяем ошибки в форме
    //При ошибках в файле validation-pay-card добавляется класс card__field--error
/*
    var form_valid = true;
    $(this).find('.card__field').each(function() {
        form_valid = form_valid && !$(this).hasClass('card__field--error');
    });
    if (!form_valid) {
        return false;
    }
*/
    /* Создание checkout */
    var checkout = new cp.Checkout(
        // public id из личного кабинета
        'pk_622997cd24f8862d93b4ee9fe6922',
        // тег, содержащий поля данных карты
        document.getElementById("form"));
        createCryptogram(checkout);
});

window.order_cost = 1;


    function getGet(name) {
        var s = window.location.search;
        s = s.match(new RegExp(name + '=([^&=]+)'));
        return s ? s[1] : false;
    }


var createCryptogram = async function (checkout) {
    await checkout.createPaymentCryptogram()
        .then((cryptogram) => {
            result = cryptogram;
    }).catch((errors) => {
        result = false;
    });;

    console.log(result);


    if (result) {
        // сформирована криптограмма
        var email = '', phone = '';
        if ($('#checkSms').is(':checked')) {
            phone = $('#tel').val();
        } else {
            email = $('#email').val();
        }
        var data = {
            action: 'sendCryptogram',
            token: result,
            name: $('#firstname').val(),
            lastname: $('#lastname').val(),
            email: email,
            accountId: email,
            phone: $('#phone').val(),
            clickid:getGet('clickid'),
        };
        $.ajax({
            url: 'https://safevpn.online/api/subscription/create',
            data: data,
            type: 'post',
            dataType: 'json'
        }).done(function (response) {

            if (response['Success']) {
                console.log(response);
                window.location.href = 'https://safevpn.online'
            }
            else {
                // if (response['acs_form']) {
                //     window.openAcs(response['acs_form']);
                // } else {
                //     console.error(response);
                //     alert('Произошла ошибка при оплате');
                // }

                if (response.Model.AcsUrl) {
                    $('#secure input[name="MD"]').val(response.Model.TransactionId);
                    $('#secure input[name="PaReq"]').val(response.Model.PaReq);

                    $('#secure input[name="TermUrl"]').val('https://safevpn.online/api/subscription/post3ds');

                    $('#secure').attr('action', response.Model.AcsUrl);

                    $('#secure').submit();
                } else {
                    console.error(response);
                    alert('Произошла ошибка при оплате');
                }
            }
        });
    } else {
        Object.keys(result.messages).forEach(function(key) {
            $('.input__wrapper_' + key + ' .error__text').text(result.messages[key]);
            $('.input__wrapper_' + key).addClass('error');
        });
    }
};

$('.popup_content .close_btn, .close_popup_button').on('click', function(){
    $(this).closest('.popup_wrap').fadeOut();
});

$('.first_screen__form').on('submit', function(e){
    e.preventDefault();
    $('.card_popup').fadeIn();
});

$('.show_text_popup, .show_text_popup_open').on('click', function(e){
    e.preventDefault();
    $('.popup_policy').fadeIn();
});


$('.term_open').on('click',function(e){
    e.preventDefault();
    $('.term_popup').fadeIn();
})
