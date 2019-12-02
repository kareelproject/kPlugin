if(sessionStorage.getItem("KoBlogSLN")!==null){if(sessionStorage.getItem("KoBlogSLN")=="NIGHT"){KoBlogSLN('NIGHT');}}
if(sessionStorage.getItem("KoBlogSwitch")!==null){if(sessionStorage.getItem("KoBlogSwitch")=="GRID"){KoBlogSwitch('grid');}if(sessionStorage.getItem("KoBlogSwitch")=="LIST"){KoBlogSwitch('list');}}

function NavMenuKoblog(x) {if (x.matches) {document.getElementById("koblog-navigasi").style.display = 'none';$(document).on('click', '#koblog-navigasi-button', function(){var $this = $(this), x = document.getElementById("koblog-navigasi");if(x.style.display == "none"){$('#koblog-navigasi').css('display','block');$('#koblog-navigasi').addClass('show');}else{$('#koblog-navigasi').removeClass('show');$('#koblog-navigasi').css('display','none');}});$('.col-md-3').css('flex','unset').css('max-width','unset').css('-ms-flex','unset');$('#koblog-navigasi-button').removeClass('d-md-none');$('.koblog-sidebar-right').css('height','unset').css('margin-bottom','10px');} else {}}
function KoBlogSLN(pilih){
var pilihan;if(pilih.toLowerCase()==""||pilih.toLowerCase()==null||pilih.toLowerCase()==undefined){pilihan='grid';}else{if(pilih.toLowerCase()=="light"){pilihan='light';}else{pilihan='night';}}
if(pilihan=='light'){
if(sessionStorage.getItem("KoBlogSLN")!==null){sessionStorage.removeItem("KoBlogSLN");}
$("body").removeClass('KoBlogSN');
}
if(pilihan=='night'){
if(sessionStorage.getItem("KoBlogSLN")!==null){sessionStorage.removeItem("KoBlogSLN");}sessionStorage.setItem("KoBlogSLN", "NIGHT");
$("body").addClass('KoBlogSN');
}
}
function KoBlogSwitch(pilih){
var pilihan;if(pilih.toLowerCase()==""||pilih.toLowerCase()==null||pilih.toLowerCase()==undefined){pilihan='grid';}else{if(pilih.toLowerCase()=="list"){pilihan='list';}else{pilihan='grid';}}
if(pilihan=='grid'){
if(sessionStorage.getItem("KoBlogSwitch")!==null){sessionStorage.removeItem("KoBlogSwitch");}
sessionStorage.setItem("KoBlogSwitch", "GRID");
$('#gantiLIST').removeAttr('checked');$('#gantiGRID').attr('checked');
for(var list=document.querySelectorAll("#indexposts.row"),i=0;i<list.length;i++){$(list[i]).removeClass('pr-md-3');}
for(var list=document.querySelectorAll(".col-md.col-md-12"),i=0;i<list.length;i++){$(list[i]).removeClass('col-md-12').addClass('col-md-5');}
for(var list=document.querySelectorAll("div.img-thumb"),i=0;i<list.length;i++){$(list[i]).removeClass('img-thumb-list');}
for(var list=document.querySelectorAll("img.lazy"),i=0;i<list.length;i++){$(list[i]).removeClass('lazy-thumb-list');}
for(var list=document.querySelectorAll("h2#judul-indexpost"),i=0;i<list.length;i++){$(list[i]).css('height','40px').css('font-size','17px');}
for(var list=document.querySelectorAll("div#info-list"),i=0;i<list.length;i++){$(list[i]).addClass('d-none');}
for(var list=document.querySelectorAll("div#desc-list"),i=0;i<list.length;i++){$(list[i]).addClass('d-none');}
}
if(pilihan=='list'){
if(sessionStorage.getItem("KoBlogSwitch")!==null){sessionStorage.removeItem("KoBlogSwitch");}
sessionStorage.setItem("KoBlogSwitch", "LIST");
$('#gantiGRID').removeAttr('checked');$('#gantiLIST').attr('checked');
for(var list=document.querySelectorAll("#indexposts.row"),i=0;i<list.length;i++){$(list[i]).addClass('pr-md-3');}
for(var list=document.querySelectorAll(".col-md.col-md-5"),i=0;i<list.length;i++){$(list[i]).removeClass('col-md-5').addClass('col-md-12');}
for(var list=document.querySelectorAll("div.img-thumb"),i=0;i<list.length;i++){$(list[i]).addClass('img-thumb-list');}
for(var list=document.querySelectorAll("img.lazy"),i=0;i<list.length;i++){$(list[i]).addClass('lazy-thumb-list');}
for(var list=document.querySelectorAll("h2#judul-indexpost"),i=0;i<list.length;i++){$(list[i]).css('height','26px').css('font-size','22px');}
for(var list=document.querySelectorAll("div#info-list"),i=0;i<list.length;i++){$(list[i]).removeClass('d-none');}
for(var list=document.querySelectorAll("div#desc-list"),i=0;i<list.length;i++){$(list[i]).removeClass('d-none');}
}
}
!function(){for(var aTags=document.querySelectorAll("a[data-href]"),i=0;i<aTags.length;i++){var randlinknya=aTags[i];aTags[i].addEventListener("click",function(a){var t=a.target;console.log(t),window.open(t.getAttribute("data-href"),"_blank","toolbar=0,status=0,width=800,height=600")})}}();
!function(){var xNavMenuKoblog = window.matchMedia("(max-width: 1199px)");NavMenuKoblog(xNavMenuKoblog);xNavMenuKoblog.addListener(NavMenuKoblog);}();
$(document).ready(function(){
$(document).on('click','#gantiLIST', function(){KoBlogSwitch('list');});
$(document).on('click','#gantiGRID', function(){KoBlogSwitch('grid');});
});
$(document).ready(function(){
$(document).on('click','#KoBlogSN', function(){if($('body').hasClass('KoBlogSN')==false){KoBlogSLN('night');}else{KoBlogSLN('light');}});
$(document).on('click', '#KoBlogDropN', function(){if($('#KoBlogShowN').hasClass('koblog-sidenav')){$('#KoBlogShowN').removeClass('koblog-sidenav');}else{$('#KoBlogShowN').addClass('koblog-sidenav');}});
});
$(document).ready(function(){if("www.kareel.com"==SettingKGUARDIAN.licenseCode){""!=function(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),i=0;i<t.length;i++){for(var o=t[i];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(n))return o.substring(n.length,o.length)}return""}("KareelShield")&&$(SettingKGUARDIAN.SELECTOR).css("display","none");var e=0;$(document).on("click",SettingKGUARDIAN.SELECTOR,function(n){++e>SettingKGUARDIAN.jumlahBolehKlik&&($(SettingKGUARDIAN.SELECTOR).css("display","none"),function(e,n,t){var i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3);var o="expires="+i.toGMTString();document.cookie=e+"="+n+";"+o+";path=/"}("KareelShield",e,SettingKGUARDIAN.waktuKarantina))}),$(document).on("contextmenu",SettingKGUARDIAN.SELECTOR,function(e){return!1})}});
var asnHAJSN2733N=$('footer>.d-table>.d-table-row>.d-table-cell>.container>.row>.col-sm-7>a');
if (asnHAJSN2733N.length&&asnHAJSN2733N.is(':hidden')==false) {
$('footer').css('display','block').css('width','100%').css('position','relative').css('height','50px');
asnHAJSN2733N.attr('href', '//www.kareel.com/').attr('rel','dofollow').attr('title','Theme By Kareel Project').text('Theme By Kareel Project').css('display','inline');
$('#konetenhalaman').removeClass('d-none');$('#konetenhalamanLOAD').addClass('d-none');
}else{
setTimeout(function(){location.href='http://www.kareel.com';}, 5000);$('footer').html('<div class="modal fade" id="ShowCopyright" tabindex="-1" role="dialog" aria-labelledby="ShowCopyrightTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title text-danger" id="ShowCopyrightTitle">Copyright Notice</h5></div><div class="modal-body">Anda melihat pemberitahuan ini berarti anda telah merubah hak cipta yang tidak seharusnya boleh dirubah.<br/></div><div class="modal-footer">Oleh <strong>Kareel Project</strong><small class="text-success">www.kareel.com</small></div></div></div></div>');setTimeout(function(){$('#ShowCopyright').modal('show');}, 1000);
}
