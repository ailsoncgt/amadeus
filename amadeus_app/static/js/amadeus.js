/*
 * Copyright 2008, 2009 UFPE - Universidade Federal de Pernambuco
 *
 * Este arquivo � parte do programa Amadeus Sistema de Gest�o de Aprendizagem, ou simplesmente Amadeus LMS
 * 
 * O Amadeus LMS � um software livre; voc� pode redistribui-lo e/ou modifica-lo dentro dos termos da Licen�a P�blica Geral GNU como
 * publicada pela Funda��o do Software Livre (FSF); na vers�o 2 da Licen�a.
 * 
 * Este programa � distribu�do na esperan�a que possa ser �til, mas SEM NENHUMA GARANTIA; sem uma garantia impl�cita de ADEQUA��O a qualquer MERCADO ou APLICA��O EM PARTICULAR. Veja a Licen�a P�blica Geral GNU para maiores detalhes.
 *  
 * Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral GNU, sob o t�tulo "LICENCA.txt", junto com este programa, se n�o, escreva para a Funda��o do Software Livre (FSF) Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA.
 *
 */

var keyUserNotLogged = "<ajklsdjfiei78324yhre8yds979873w78jklsdkfjsdlkfjlksdfjklksdflk9usdf98723uoudsfjk348987>";
var keyAccessDenied =  "<iseocdsfc83f93rhnfv983nnds838hfoihos83hjod9uhwjjhvf83wnhfv983nhfg98h398udfhhdia82jsd2>";
var keyError = "ajklsdjfiei7832s979873w789usdf98723uoudsfjk3489877838947234987239478hfshjjsfbhw78dsysd87y4798ufdhjg98y789";

var urlUserNotLogged = "system.do?method=showViewWelcome";
var urlAccessDenied  = "system.do?method=showViewAccessDenied";

function execScript(codigoHTMLcomScript) {
     var scriptObj = document.createElement('script');

     tmpScriptCode = codigoHTMLcomScript.split('<script type="text/javascript">');

     scriptCode = tmpScriptCode[1].split('</script>');

     scriptObj.setAttribute('language', 'javascript');

     scriptObj.text = scriptCode[0];

     document.body.appendChild(scriptObj);
}

function countOnlineUser(){
	UtilDWR.getInclude('/user.do?method=countOnlineUser',
		function(data) {
			dwr.util.setValue("countOnlineUser",data);
		}
	);
	setTimeout("countOnlineUser();",30000); 
}

function userStatus(accessInfoId) {
	UtilDWR.getInclude('/user.do?method=userStatus&accessInfoId='+accessInfoId,
		function(data) {
			if(data == 1){
				$("#userStatus"+accessInfoId).removeClass("offlineUser");
				$("#userStatus"+accessInfoId).addClass("onlineUser");
				$("#userStatus"+accessInfoId).attr("title","Online");
				$("#userStatus"+accessInfoId).text("(Online)");
			} else if(data == 0) {
				$("#userStatus"+accessInfoId).removeClass("onlineUser");
				$("#userStatus"+accessInfoId).addClass("offlineUser");
				$("#userStatus"+accessInfoId).attr("title","Offline");
				$("#userStatus"+accessInfoId).html("(Offline)");
			}
		}
	);
	setTimeout("userStatus("+accessInfoId+");",30000);
}

function minusPlus(id, divId){
	var valueLink = $(id).attr("class");
	$(divId).toggle("clip");
	if (valueLink.indexOf('imgPlus') != -1) {
		$(id).removeClass("imgPlus");
		$(id).addClass("imgMinus");
	} else { 
		$(id).removeClass("imgMinus");
		$(id).addClass("imgPlus"); 
	};
}

function success(msg) {
	$("#infoMessage").html(msg);
	$("#infoMessage").toggle("drop");
    window.setTimeout(function() {
   	 	$("#infoMessage").toggle("drop");
    }, 4000);
}

function sendMail(){
	var to = dwr.util.getValue("to");
	var subject = dwr.util.getValue("subject");
	var message = tinyMCE.get('message').getContent();
	
	var url = "user.do?method=sendMailInManagerUsers&"+"to="+to+"&subject="+subject+"&message='"+message+"'";
	alert(url);
	window.open(url, "_self");
}

function verifyEmail(personId, email) {
	if(email != ''){
		UtilDWR.getInclude('/user.do?method=verifyEmail&personId='+personId+'&email='+email,
			function(data) {
				var attrClass = $("#emailResponse").attr("class");
				if(data == 'true'){
					if (attrClass.indexOf("emailResponseNotOK") != -1) {
						$("#emailResponse").removeClass("emailResponseNotOK");
						$("#emailResponse").addClass("emailResponseOK");
					} 
					$("#emailResponse").html("Email dispon�vel!");
				} else {
					if (attrClass.indexOf("emailResponseOK") != -1) {
						$("#emailResponse").removeClass("emailResponseOK");
						$("#emailResponse").addClass("emailResponseNotOK");
					}
					$("#emailResponse").html("Email n�o dispon�vel!");
				}
				
			}
		);
	}
}