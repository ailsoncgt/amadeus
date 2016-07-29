// MATERIAL DESIGN INIT
$( document ).ready(function() {
    $.material.init()
});

// =================== DISPLAY MENU ============================
var main = function() {
  /* Push the body and the nav over by 285px over */
  $('#ancora-menu').click(function(event) {
        if($('#menu').position().left == 0){
        	$('#menu').animate({
        		left: "-255px"
    		}, 0);

        	$('#conteudo').animate({
        		marginLeft: "0px"
    		}, 0);
        
        }else{
        	$('#menu').animate({
        		left: "0px"
    		  }, 0);

        	$('#conteudo').animate({
        		marginLeft: "300px"
    		  }, 0);
        }
  });
};
$(document).ready(main);

// LOJA ATIVADA E DESATIVADA
$(document).ready(function(){
    $('#loja_ativa_change').change(function(){
        if($('#loja_ativa_change').is(':checked')){
            $('#loja_ativa').children('label').children('p').text( 'Loja Ativada');
        }else{
            $('#loja_ativa').children('label').children('p').text('Loja Desativada');
        }
    })
})

// TROCAR MENU ATIVO
$(document).ready(function(){
    $('#menu').children('.lista').children('li').click(function(event){
        $('#menu').children('.lista').children('li').children('a').removeClass('menu-lateral-aberto');
        $(this).children('a').addClass('menu-lateral-aberto');
    })
})


// TOLLIP
$(function () {
  $('[data-toggle="tooltip"]').tooltip().css({
    
  })
});

// BUSCAR
$( document ).ready(function() {
    $('#icone_busca').click(function(){
    	$('#busca_input').focus();
    })
});

// MUDAR O ICONR AO CLICAR NO MENU QUE TEM UM SUBMENU
$(document).ready(function(){
	$('[data-parent="#accordion"]').on('click', function (){
		if($(this).children('.pull-right').text().trim().length == 15){
			$(this).children('.pull-right').text('arrow_drop_up')
		}else{
			$(this).children('.pull-right').text('arrow_drop_down');
		}
	})
});

// =============================== FORM CADASTRO ================================
$(document).ready(function(){
    $('#trigger-dicas').on('click', function(){
        if($(this).children('.material-icons').text().trim().length == 6){
            $(this).children('.material-icons').text('add');
            $('#dicas').animate({
                height: "0px",
                padding: "0px"
            }, 0);

            $('.dica').hide();

            $('.bola').children('a').animate({
                height: "0px"
            }, 0)
        }else{
            $(this).children('.material-icons').text('remove');
            $('#dicas').animate({
                // height: "145px",
                padding: "2em 1em 1em 2em"
            }, 0);

            $('#dicas').css('height', 'auto');

            $('.bola').children('a').animate({
                height: "15px"
            }, 0)

            var dica_ativo = $('.bola').children('.ativo').attr('data-link');
            $('#dicas').children('#' + dica_ativo).show('fast');
        }
    })
});

// TROCAR DICAS
$(document).ready(function(){
    $('.bola').children('a').on('click', function(){
        event.preventDefault();
        $('.bola').children('.ativo').removeClass('ativo');
        $(this).addClass('ativo');
        // TROCAR DICAS
        var dica_num = $(this).attr('data-link');
        $('#dicas').children('.dica').hide();
        $('#dicas').children('#' + dica_num).fadeIn(500);        
    })
});

// TROCAR CATEGORIAS
$(document).ready(function(){
  $('.categoria').on('click', function(){
    event.preventDefault();
    var categoria = $('#categorias').children('.ativo').attr('id');
    $('#categorias').children('.ativo').removeClass('ativo');
    if (categoria == 'padrao'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-azul-padrao.png')
    }
    else if(categoria == 'eletronicos'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-azul-eletronicos.png')
    }
    else if(categoria == 'eletrodomesticos'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-azul-eletrodomesticos.png')
    }
    else if(categoria == 'livros'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-azul-livros.png')
    }
    else{
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-azul-carrosemotos.png')
    }

    categoria = $(this).attr('id');
    $('#categorias').children('.ativo').removeClass('ativo');
    if (categoria == 'padrao'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-verde-padrao.png')
    }
    else if(categoria == 'eletronicos'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-verde-eletronicos.png')
    }
    else if(categoria == 'eletrodomesticos'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-verde-eletrodomesticos.png')
    }
    else if(categoria == 'livros'){
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-verde-livros.png')
    }
    else{
      $('#categorias').children('#' + categoria).children('a').children('img').attr('src', 'static/icones/form/icon-verde-carrosemotos.png')
    }
    $(this).addClass('ativo');

    $('.forms').fadeOut();
    if(categoria == 'padrao'){
      $('#form-produto-padrao').fadeIn(500);
    }else{
      $('#form-' + categoria).fadeIn(500);
    }
  })
})

// ================================== MOSTRAR NOME DO ARQUIVO DE UPLOAD =========================
$(document).ready(function (){
  $('.carregar-imagem').children('input').change(function(){
    var nome = $(this).val();
    $(this).parent('.carregar-imagem').children('label').children('p').text(nome);

  });
});

$(document).ready(function (){
  $('.upload-categorias').children('input').change(function(){
    var nome = $(this).val();
    $(this).parent().children('.upload-label').text(nome);

  });
});

$(document).ready(function (){
  $('.upload-categorias').children('input').change(function(){
    var nome = $(this).val();
    $(this).parent().children('label').text(nome);

  });
});

// ============================= MOSTRAR/ESCONDER SESSOES DE CADASTRO ===========================
$(document).ready(function(){
    $('.fechar').on('click', function(){
        event.preventDefault();
        var categoria = $(this).attr('data-link');
        if($(this).children('.material-icons').text().trim().length == 15){
            $('#'+categoria).hide('fast');
            $(this).children('.material-icons').text('arrow_drop_up');
        }else{
            $('#'+categoria).show('fast');
            $(this).children('.material-icons').text('arrow_drop_down');
        }
        
    })
});

// TOOGLE
$(document).ready(function(){
  $('.desativar').change(function(){
    if($(this).is(':checked')){
      var form = $(this).attr('data-link');
      $('#' + form).show('fast');
    }else{
      var form = $(this).attr('data-link');
      $('#' + form).hide('fast');
    }
  })
});

// =========== DECIDIR VARIACOES ====================
$(document).ready(function(){
  $('#decidir-variacoes-nao').change(function(){
    if ($(this).is(':checked')){
      $('.variacoes-padrao').hide('fast');
    }
  });
  $('#decidir-variacoes-sim').change(function(){
    if ($(this).is(':checked')){
      $('.variacoes-padrao').show('fast');
    }
  })
})

// CHECKED BOX - Radio -> Preco sob encomenda
var precos = function() {
  $('#sob-consulta-padrao').change(function(e){
    if($('#sob-consulta-padrao').is(':checked')){
      $('.precos').hide('fast');
    }
  });

  $('#sob-encomenda-padrao').change(function(e){
    if($('#sob-encomenda-padrao').is(':checked')){
      $('.precos').hide('fast');
    }
  });

  $('#pedir-orcamento-padrao').change(function(e){
    if($('#pedir-orcamento-padrao').is(':checked')){
      $('.precos').hide('fast');
    }
  });
};
$(document).ready(precos);

var precos = function() {
  $('#sob-consulta-eletronico').change(function(e){
    if($('#sob-consulta-eletronico').is(':checked')){
      $('.precos-eletronicos').hide('fast');
    }
  });

  $('#sob-encomenda-eletronico').change(function(e){
    if($('#sob-encomenda-eletronico').is(':checked')){
      $('.precos-eletronicos').hide('fast');
    }
  });

  $('#pedir-orcamento-eletronico').change(function(e){
    if($('#pedir-orcamento-eletronico').is(':checked')){
      $('.precos-eletronicos').hide('fast');
    }
  });
};
$(document).ready(precos);

var precos = function() {
  $('#sob-consulta-eletrodomestico').change(function(e){
    if($('#sob-consulta-eletrodomestico').is(':checked')){
      $('.precos-eletrodomesticos').hide('fast');
    }
  });

  $('#sob-encomenda-eletrodomestico').change(function(e){
    if($('#sob-encomenda-eletrodomestico').is(':checked')){
      $('.precos-eletrodomesticos').hide('fast');
    }
  });

  $('#pedir-orcamento-eletrodomestico').change(function(e){
    if($('#pedir-orcamento-eletrodomestico').is(':checked')){
      $('.precos-eletrodomesticos').hide('fast');
    }
  });
};
$(document).ready(precos);

var precos = function() {
  $('#sob-consulta-livro').change(function(e){
    if($('#sob-consulta-livro').is(':checked')){
      $('.precos-livros').hide('fast');
    }
  });

  $('#sob-encomenda-livro').change(function(e){
    if($('#sob-encomenda-livro').is(':checked')){
      $('.precos-livros').hide('fast');
    }
  });

  $('#pedir-orcamento-livro').change(function(e){
    if($('#pedir-orcamento-livro').is(':checked')){
      $('.precos-livros').hide('fast');
    }
  });
};
$(document).ready(precos);

var precos = function() {
  $('#sob-consulta-imovel').change(function(e){
    if($('#sob-consulta-imovel').is(':checked')){
      $('.precos-imoveis').hide('fast');
    }
  });

  $('#sob-encomenda-imovel').change(function(e){
    if($('#sob-encomenda-imovel').is(':checked')){
      $('.precos-imoveis').hide('fast');
    }
  });

  $('#pedir-orcamento-imovel').change(function(e){
    if($('#pedir-orcamento-imovel').is(':checked')){
      $('.precos-imoveis').hide('fast');
    }
  });
};
$(document).ready(precos);



// Padrao - variacoes
var precos = function() {
  $('#sob-consulta-padrao-1').change(function(e){
    if($('#sob-consulta-padrao-1').is(':checked')){
      $('.precos-1').hide('fast');
    }
  });

  $('#sob-encomenda-padrao-1').change(function(e){
    if($('#sob-encomenda-padrao-1').is(':checked')){
      $('.precos-1').hide('fast');
    }
  });

  $('#pedir-orcamento-padrao-1').change(function(e){
    if($('#pedir-orcamento-padrao-1').is(':checked')){
      $('.precos-1').hide('fast');
    }
  });
};
$(document).ready(precos);

// DESFAZER PRECOS
$(document).ready(function(){
  $('.roll-back-preco').click(function(){
    event.preventDefault();
    $(this).parent().parent().children('.fade').show('fast');
    $(this).parent().parent().children('.col-md-4').children('.radio').children('label').children('input').prop("checked", false);
  })
})


// ===================== HABILITAR DESABILITAR INFORMACOES DE TIPO ==================
// ROLL-BACK
$(document).ready(function(){
  $('.roll-back-info-tipo').click(function(){
    event.preventDefault();
    $('.form-group').children('.tipo').children('.col-md-4').children('.radio').children('label').children('input').prop("checked", false);
    $('.form-group').children('.tipo').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", false);
    $('.form-group').children('.etiquetas').children('.col-md-4').children('.radio').children('label').children('input').prop("checked", false);
    $('.form-group').children('.etiquetas').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", false);
    $('.form-group').children('.condicao-uso').children('.col-md-4').children('.radio').children('label').children('input').prop("checked", false);    
    $('.form-group').children('.condicao-uso').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", false);    
  });

  $('.form-group').children('.tipo').children('.col-md-4').children('.radio').children('label').children('input').change(function(e){
    if($('.form-group').children('.tipo').children('.col-md-4').children('.radio').children('label').children('input').is(':checked')){
      $('.form-group').children('.etiquetas').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", true);        
      $('.form-group').children('.condicao-uso').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", true);
    }
  });

  $('.form-group').children('.condicao-uso').children('.col-md-4').children('.radio').children('label').children('input').change(function(e){
    if($('.form-group').children('.condicao-uso').children('.col-md-4').children('.radio').children('label').children('input').is(':checked')){
      $('.form-group').children('.etiquetas').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", true);        
      $('.form-group').children('.tipo').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", true);
    }
  });

  $('.form-group').children('.etiquetas').children('.col-md-4').children('.radio').children('label').children('input').change(function(e){
    if($('.form-group').children('.etiquetas').children('.col-md-4').children('.radio').children('label').children('input').is(':checked')){
      $('.form-group').children('.condicao-uso').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", true);
      $('.form-group').children('.tipo').children('.col-md-4').children('.radio').children('label').children('input').prop("disabled", true);
    }
  });

});

// VERSÃO DO LIVRO
$(document).ready(function(){
  $('#impressa-livro').change(function(){
    if($('#impressa-livro').is(':checked')){
      $('#download-livro-digital').hide('fast');
    }
  })
  $('#digital-livro').change(function(){
    if($('#digital-livro').not(':checked')){
      $('#download-livro-digital').show('fast');
    }
  })
});

// FRETE SIM /NAO
$(document).ready(function(){
  $('.frete-nao').change(function(){
    if($('.frete-nao').is(':checked')){
      $(this).parent().parent().parent().parent().children('.dados-frete').hide('fast');
      $(this).parent().parent().parent().parent().children('.dimensoes').hide('fast');
    }
  });

  $('.frete-sim').change(function(){
    if($('.frete-sim').is(':checked')){
      $(this).parent().parent().parent().parent().children('.dados-frete').show('fast');
      $(this).parent().parent().parent().parent().children('.dimensoes').show('fast');
    }
  });
})

// DESCONTO SIM /NAO
$(document).ready(function(){
  $('.desconto-nao').change(function(){
    if($('.desconto-nao').is(':checked')){
      $(this).parent().parent().parent().parent().children('.valor-desconto').hide('fast');
    }
  });

  $('.desconto-sim').change(function(){
    if($('.desconto-sim').is(':checked')){
      $(this).parent().parent().parent().parent().children('.valor-desconto').show('fast');
    }
  });
})

// MENU FLUTUANTE
$(document).ready(function(){
  $('#acoes-lateral').hover(function(){
    $(this).children('#ocultos').children('a').fadeIn('fast');
    $(this).children('#ocultos').children('a').removeClass('zoomOut');
    $(this).children('#ocultos').children('a').addClass('zoomIn');
    // $(this).children('#maior').children('a').children('.material-icons').addClass('rotateIn');

  },

  function(){
    $(this).children('#ocultos').children('a').fadeOut('fast');
    $(this).children('#ocultos').children('a').removeClass('zoomIn');
    $(this).children('#ocultos').children('a').addClass('zoomOut');

  });
})

$(document).ready(function(){
  $('#acoes-lateral').children('#maior', '#ocultos').children('a').click(function(){
    event.preventDefault();
  });
})

//GERENCIAR ATIVAR / DESATIVAR
$(document).ready(function(){
    $('.ativar-desativar').change(function(){
        if($(this).is(':checked')){
            $(this).parent().children('p').text( 'Ativo');
        }else{
            $(this).parent().children('p').text('Não Ativo');
        }
    })
})

// TROCAR CATEGORIAS
$(document).ready(function(){
  $('.categoria-envio').on('click', function(){
    event.preventDefault();
    var categoria = $('#categorias').children('.ativo').attr('id');
    $('#categorias').children('.ativo').removeClass('ativo');
    

    categoria = $(this).attr('id');
    $('#categorias').children('#' + categoria).addClass('ativo');
    

    $('.forms').fadeOut();
    $('#form-' + categoria).fadeIn(500);
  })
})

// ============================= FRETE GRATIS CUPOM ============================
$(document).ready(function(){
  $('#frete-gratis-cupom-sim').change(function(){
    if($(this).is(':checked')){
      $('#tipo-cupom').hide('fast');
    
    }else{
      $('#tipo-cupom').show('fast');
    }
  })
});

// ==================================== PAGAMENTOS ==============================
$(document).ready(function(){
  $('.meio-pagamento').children('.cabecalho').children('.col-md-3').children('.config').click( 
    function(event){
      event.preventDefault();
      if($(this).text().trim().length == 10){
        $(this).removeClass('btn-azul');
        $(this).addClass('btn-vermelho');
        $(this).html('CONFIGURANDO <i class="material-icons">replay</i>');
      }else{
        $(this).removeClass('btn-vermelho');
        $(this).addClass('btn-azul');
        $(this).text('CONFIGURAR');
      }
      $(this).parent().parent().parent().children('.corpo').toggle('slow');
    })
})

// ========================================= MODALS =================================
$(document).ready(function(){
  $('#email-lateral').click(function(){
    $('#email-lateral-modal').modal();
  })
})

// ============== CKEDITOR =================
$(document).ready(function(){
    CKEDITOR.replace('descricao-padrao');
    CKEDITOR.replace('descricao-eletronico');
    CKEDITOR.replace('descricao-eletrodomestico');
    CKEDITOR.replace('descricao-livro');
    CKEDITOR.replace('descricao-carros-e-moto');
    CKEDITOR.replace('descricao-imovel');
  }
);
























































// SCROLL
$("#topo").click(function(event){
	event.preventDefault();
	$("html, body").animate({ scrollTop: 0}, 700);
});

$("#home-click").click(function(event){
	event.preventDefault();
	$("html, body").animate({ scrollTop: $("#home").offset().top}, 700);
});