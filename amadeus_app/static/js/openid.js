/*
 * Copyright 2008, 2009 UFPE - Universidade Federal de Pernambuco
 *
 * Este arquivo � parte do programa Amadeus Sistema de Gest�o de Aprendizagem, ou simplesmente Amadeus LMS
 * 
 * O Amadeus LMS � um software livre; voc� pode redistribui-lo e/ou modifica-lo dentro dos termos da Licen�a P�blica Geral GNU como
 * publicada pela Funda��o do Software LiveditMaterialRequestActivityre (FSF); na vers�o 2 da Licen�a.
 * 
 * Este programa � distribu�do na esperan�a que possa ser �til, mas SEM NENHUMA GARANTIA; sem uma garantia impl�cita de ADEQUA��O a qualquer MERCADO ou APLICA��O EM PARTICULAR. Veja a Licen�a P�blica Geral GNU para maiores detalhes.
 *  
 * Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral GNU, sob o t�tulo "LICENCA.txt", junto com este programa, se n�o, escreva para a Funda��o do Software Livre (FSF) Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA.
 *
 */

function showInputloginOpenID() {
	$("#dInputLoginOpenID").toggle("drop");
	$("#remindPassword").toggle("drop");
	window.setTimeout(function() {
		$("#identifier").focus();
	}, 1000);
}

function requestGoogleOpenID(url) {
	window.open(url, "_self");
}

function requestAddNewGoogleOpenId(url) {
	window.open(url, "_self");
}

function deleteGoogleOpenId(url) {
	window.open(url, "_self");
}

function requestOpenID(url) {
	window.open(url+dwr.util.getValue("identifier"), "_self");
}
