
$(document).ready(function(){

	$("#input_course").on('keyup', function(event){
		if(event.keyCode == 13){
			var input_course = document.getElementById("input_course").value;

			if(input_course == 1){
				$(".course").fadeOut("fast");
				$(".display_table").fadeIn("slow");
			}else if(input_course == 2){
				$(".course").fadeOut("fast");
				$(".display_two").fadeIn("slow");
			}else if(input_course == 3){
				$(".course").fadeOut("fast");
				$(".display_three").fadeIn("slow");
				$(".reset input").css("margin-top", "70px");
			}else if(input_course == 4){
				$(".course").fadeOut("fast");
				$(".display_four").fadeIn("slow");
				$(".reset input").css("margin-top", "20%");
			}else if(input_course == 5){
				$(".course").fadeOut("fast");
				$(".display_fiv").fadeIn("slow");
				$(".reset input").css("margin-top", "30%");
			}else if(input_course == 6){
				$(".course").fadeOut("fast");
				$(".display_six").fadeIn("slow");
				$(".reset input").css("margin-top", "40%");
			}else if(input_course == 7){
				$(".course").fadeOut("fast");
				$(".display_sev").fadeIn("slow");
				$(".reset input").css("margin-top", "50%");
			}else if(input_course == 8){
				$(".course").fadeOut("fast");
				$(".display_eig").fadeIn("slow");
				$(".reset input").css("margin-top", "60%");
			}else if(input_course == 9){
				$(".course").fadeOut("fast");
				$(".display_nin").fadeIn("slow");
				$(".reset input").css("margin-top", "70%");
			}else if(input_course == 10){
				$(".course").fadeOut("fast");
				$(".display_ten").fadeIn("slow");
				$(".reset input").css("margin-top", "80%");
			}else if(input_course == 11){
				$(".course").fadeOut("fast");
				$(".display_Ele").fadeIn("slow");
				$(".reset input").css("margin-top", "90%");
			}else{
				$(".input_error").fadeIn("slow");
			}
		}
	});



});
document.getElementById("gpa_1").addEventListener("click", gpa_1Function);
document.getElementById("gpa_2").addEventListener("click", gpa_2Function);
document.getElementById("gpa_3").addEventListener("click", gpa_3Function);
document.getElementById("gpa_4").addEventListener("click", gpa_4Function);
document.getElementById("gpa_5").addEventListener("click", gpa_5Function);
document.getElementById("gpa_6").addEventListener("click", gpa_6Function);
document.getElementById("gpa_7").addEventListener("click", gpa_7Function);
document.getElementById("gpa_8").addEventListener("click", gpa_8Function);
document.getElementById("gpa_9").addEventListener("click", gpa_9Function);
document.getElementById("gpa_10").addEventListener("click", gpa_10Function);
document.getElementById("gpa_11").addEventListener("click", gpa_11Function);



function gpa_1Function(){
	validate();
	gpacalc();
}
function gpa_2Function(){
	gpa2calc();
}
function gpa_3Function(){
	gpa3calc();
}
function gpa_4Function(){
	gpa4calc();
}
function gpa_5Function(){
	gpa5calc()
}
function gpa_6Function(){
	gpa6calc();
}
function gpa_7Function(){
	gpa7calc();
}
function gpa_8Function(){
	gpa8calc();
}
function gpa_9Function(){
	gpa9calc();
}
function gpa_10Function(){
	gpa10calc();
}
function gpa_11Function(){
	gpa11calc();
}

function validate(){
var input = document.getElementById("unit_value").value;
var input2 = document.getElementById("fis_input").value;
var input3 = document.getElementById("sec_input").value;
var x = document.getElementById("mySelect");
var i = x.selectedIndex;

if(input =="" || i ==""){
	document.getElementById("error-show").style.display ="block";
}else{
	document.getElementById("error-show").style.display ="none";
}

}
function gpacalc(){
	var input = document.getElementById("unit_value").value;
	var x = document.getElementById("mySelect");
	var i = x.selectedIndex;
	var j = x.options[i].value;
	var integer = parseInt(j,10);

	var multi = integer * input;
	var gpa = multi/input;
	var n = gpa.toFixed(2);

document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = n;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}

function gpa2calc(){
	var input1 = document.getElementById("fis_input").value;
	var input2 = document.getElementById("sec_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var x = document.getElementById("mySelect1");
	var i = x.selectedIndex;
	var j = x.options[i].value;
	var integer = parseInt(j,10);

	var y = document.getElementById("mySelect2");
	var s = y.selectedIndex;
	var v = y.options[s].value;
	var s_int = parseInt(v,10);

	var fisMulti = integer * con_input1;
	var secMulit =  s_int * con_input2;

	var totMulti = fisMulti + secMulit;
	var totalUnit = con_input1 + con_input2;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";

}
function gpa3calc(){
	var input1 = document.getElementById("trd_input").value;
	var input2 = document.getElementById("fth_input").value;
	var input3 = document.getElementById("fith_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);

	var x = document.getElementById("mySelect3");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect4");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect5");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3);
	var totalUnit = con_input1 + con_input2 + con_input3;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

	document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";

}
function gpa4calc(){
	var input1 = document.getElementById("sith_input").value;
	var input2 = document.getElementById("sevth_input").value;
	var input3 = document.getElementById("eith_input").value;
	var input4 = document.getElementById("nith_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);

	var x = document.getElementById("mySelect6");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect7");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect8");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect9");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

	document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";

}
function gpa_5Function(){
	var input1 = document.getElementById("t10_input").value;
	var input2 = document.getElementById("t11_input").value;
	var input3 = document.getElementById("t12_input").value;
	var input4 = document.getElementById("t13_input").value;
	var input5 = document.getElementById("t14_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);
	var con_input5 = parseInt(input5,10);

	var x = document.getElementById("mySelect10");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect11");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect12");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect13");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var zB = document.getElementById("mySelect14");
	var i = zB.selectedIndex;
	var j = zB.options[i].value;
	var sel_5 = parseInt(j,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4)
				  + (sel_5*con_input5);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4 + con_input5;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

	document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function gpa_6Function(){
	var input1 = document.getElementById("t15_input").value;
	var input2 = document.getElementById("t16_input").value;
	var input3 = document.getElementById("t17_input").value;
	var input4 = document.getElementById("t18_input").value;
	var input5 = document.getElementById("t19_input").value;
	var input6 = document.getElementById("t20_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);
	var con_input5 = parseInt(input5,10);
	var con_input6 = parseInt(input6,10);

	var x = document.getElementById("mySelect15");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect16");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect17");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect18");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var zB = document.getElementById("mySelect19");
	var i = zB.selectedIndex;
	var j = zB.options[i].value;
	var sel_5 = parseInt(j,10);

	var zC = document.getElementById("mySelect20");
	var k = zC.selectedIndex;
	var l = zC.options[k].value;
	var sel_6 = parseInt(l,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4)
				  + (sel_5*con_input5) + (sel_6*con_input6);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4 + con_input5 + con_input6;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

	document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function gpa7calc(){
	var input1 = document.getElementById("t21_input").value;
	var input2 = document.getElementById("t22_input").value;
	var input3 = document.getElementById("t23_input").value;
	var input4 = document.getElementById("t24_input").value;
	var input5 = document.getElementById("t25_input").value;
	var input6 = document.getElementById("t26_input").value;
	var input7 = document.getElementById("t27_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);
	var con_input5 = parseInt(input5,10);
	var con_input6 = parseInt(input6,10);
	var con_input7 = parseInt(input7,10);

	var x = document.getElementById("mySelect21");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect22");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect23");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect24");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var zB = document.getElementById("mySelect25");
	var i = zB.selectedIndex;
	var j = zB.options[i].value;
	var sel_5 = parseInt(j,10);

	var zC = document.getElementById("mySelect26");
	var k = zC.selectedIndex;
	var l = zC.options[k].value;
	var sel_6 = parseInt(l,10);

	var zD = document.getElementById("mySelect27");
	var m = zD.selectedIndex;
	var n = zD.options[m].value;
	var sel_7 = parseInt(n,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4)
				  + (sel_5*con_input5) + (sel_6*con_input6) + (sel_7*con_input7);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4 + con_input5 + con_input6 + con_input7;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

	document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function gpa8calc(){
	var input1 = document.getElementById("t28_input").value;
	var input2 = document.getElementById("t29_input").value;
	var input3 = document.getElementById("t30_input").value;
	var input4 = document.getElementById("t31_input").value;
	var input5 = document.getElementById("t32_input").value;
	var input6 = document.getElementById("t33_input").value;
	var input7 = document.getElementById("t34_input").value;
	var input8 = document.getElementById("t35_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);
	var con_input5 = parseInt(input5,10);
	var con_input6 = parseInt(input6,10);
	var con_input7 = parseInt(input7,10);
	var con_input8 = parseInt(input8,10);

	var x = document.getElementById("mySelect28");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect29");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect30");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect31");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var zB = document.getElementById("mySelect32");
	var i = zB.selectedIndex;
	var j = zB.options[i].value;
	var sel_5 = parseInt(j,10);

	var zC = document.getElementById("mySelect33");
	var k = zC.selectedIndex;
	var l = zC.options[k].value;
	var sel_6 = parseInt(l,10);

	var zD = document.getElementById("mySelect34");
	var m = zD.selectedIndex;
	var n = zD.options[m].value;
	var sel_7 = parseInt(n,10);

	var zE = document.getElementById("mySelect35");
	var o = zE.selectedIndex;
	var p = zE.options[o].value;
	var sel_8 = parseInt(p,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4)
				  + (sel_5*con_input5) + (sel_6*con_input6) + (sel_7*con_input7) + (sel_8*con_input8);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4 + con_input5 + con_input6 + con_input7
					+ con_input8;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function gpa9calc(){
	var input1 = document.getElementById("t36_input").value;
	var input2 = document.getElementById("t37_input").value;
	var input3 = document.getElementById("t38_input").value;
	var input4 = document.getElementById("t39_input").value;
	var input5 = document.getElementById("t40_input").value;
	var input6 = document.getElementById("t41_input").value;
	var input7 = document.getElementById("t42_input").value;
	var input8 = document.getElementById("t43_input").value;
	var input9 = document.getElementById("t44_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);
	var con_input5 = parseInt(input5,10);
	var con_input6 = parseInt(input6,10);
	var con_input7 = parseInt(input7,10);
	var con_input8 = parseInt(input8,10);
	var con_input9 = parseInt(input9,10);

	var x = document.getElementById("mySelect36");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect37");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect38");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect39");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var zB = document.getElementById("mySelect40");
	var i = zB.selectedIndex;
	var j = zB.options[i].value;
	var sel_5 = parseInt(j,10);

	var zC = document.getElementById("mySelect41");
	var k = zC.selectedIndex;
	var l = zC.options[k].value;
	var sel_6 = parseInt(l,10);

	var zD = document.getElementById("mySelect42");
	var m = zD.selectedIndex;
	var n = zD.options[m].value;
	var sel_7 = parseInt(n,10);

	var zE = document.getElementById("mySelect43");
	var o = zE.selectedIndex;
	var p = zE.options[o].value;
	var sel_8 = parseInt(p,10);

	var zF = document.getElementById("mySelect44");
	var q= zF.selectedIndex;
	var r = zF.options[q].value;
	var sel_9 = parseInt(r,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4)
				  + (sel_5*con_input5) + (sel_6*con_input6) + (sel_7*con_input7) + (sel_8*con_input8)
				  + (sel_9*con_input9);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4 + con_input5 + con_input6 + con_input7
					+ con_input8 + con_input9;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";

}
function gpa10calc(){
	var input1 = document.getElementById("t45_input").value;
	var input2 = document.getElementById("t46_input").value;
	var input3 = document.getElementById("t47_input").value;
	var input4 = document.getElementById("t48_input").value;
	var input5 = document.getElementById("t49_input").value;
	var input6 = document.getElementById("t50_input").value;
	var input7 = document.getElementById("t51_input").value;
	var input8 = document.getElementById("t52_input").value;
	var input9 = document.getElementById("t53_input").value;
	var input10 = document.getElementById("t54_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);
	var con_input5 = parseInt(input5,10);
	var con_input6 = parseInt(input6,10);
	var con_input7 = parseInt(input7,10);
	var con_input8 = parseInt(input8,10);
	var con_input9 = parseInt(input9,10);
	var con_input10 = parseInt(input10,10);

	var x = document.getElementById("mySelect45");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect46");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect47");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect48");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var zB = document.getElementById("mySelect49");
	var i = zB.selectedIndex;
	var j = zB.options[i].value;
	var sel_5 = parseInt(j,10);

	var zC = document.getElementById("mySelect50");
	var k = zC.selectedIndex;
	var l = zC.options[k].value;
	var sel_6 = parseInt(l,10);

	var zD = document.getElementById("mySelect51");
	var m = zD.selectedIndex;
	var n = zD.options[m].value;
	var sel_7 = parseInt(n,10);

	var zE = document.getElementById("mySelect52");
	var o = zE.selectedIndex;
	var p = zE.options[o].value;
	var sel_8 = parseInt(p,10);

	var zF = document.getElementById("mySelect53");
	var q= zF.selectedIndex;
	var r = zF.options[q].value;
	var sel_9 = parseInt(r,10);

	var zg = document.getElementById("mySelect54");
	var s= zg.selectedIndex;
	var t = zg.options[s].value;
	var sel_10 = parseInt(t,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4)
				  + (sel_5*con_input5) + (sel_6*con_input6) + (sel_7*con_input7) + (sel_8*con_input8)
				  + (sel_9*con_input9) + (sel_10*con_input10);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4 + con_input5 + con_input6 + con_input7
					+ con_input8 + con_input9 + con_input10;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function gpa11calc(){
	var input1 = document.getElementById("t55_input").value;
	var input2 = document.getElementById("t56_input").value;
	var input3 = document.getElementById("t57_input").value;
	var input4 = document.getElementById("t58_input").value;
	var input5 = document.getElementById("t59_input").value;
	var input6 = document.getElementById("t60_input").value;
	var input7 = document.getElementById("t61_input").value;
	var input8 = document.getElementById("t62_input").value;
	var input9 = document.getElementById("t63_input").value;
	var input10 = document.getElementById("t64_input").value;
	var input11 = document.getElementById("t65_input").value;
	var con_input1 = parseInt(input1,10);
	var con_input2 = parseInt(input2,10);
	var con_input3 = parseInt(input3,10);
	var con_input4 = parseInt(input4,10);
	var con_input5 = parseInt(input5,10);
	var con_input6 = parseInt(input6,10);
	var con_input7 = parseInt(input7,10);
	var con_input8 = parseInt(input8,10);
	var con_input9 = parseInt(input9,10);
	var con_input10 = parseInt(input10,10);
	var con_input11 = parseInt(input11,10);

	var x = document.getElementById("mySelect55");
	var a = x.selectedIndex;
	var b = x.options[a].value;
	var sel_1 = parseInt(b,10);

	var y = document.getElementById("mySelect56");
	var c = y.selectedIndex;
	var d = y.options[c].value;
	var sel_2 = parseInt(d,10);

	var z = document.getElementById("mySelect57");
	var e = z.selectedIndex;
	var f = z.options[e].value;
	var sel_3 = parseInt(f,10);

	var zA = document.getElementById("mySelect58");
	var g = zA.selectedIndex;
	var h = zA.options[g].value;
	var sel_4 = parseInt(h,10);

	var zB = document.getElementById("mySelect59");
	var i = zB.selectedIndex;
	var j = zB.options[i].value;
	var sel_5 = parseInt(j,10);

	var zC = document.getElementById("mySelect60");
	var k = zC.selectedIndex;
	var l = zC.options[k].value;
	var sel_6 = parseInt(l,10);

	var zD = document.getElementById("mySelect61");
	var m = zD.selectedIndex;
	var n = zD.options[m].value;
	var sel_7 = parseInt(n,10);

	var zE = document.getElementById("mySelect62");
	var o = zE.selectedIndex;
	var p = zE.options[o].value;
	var sel_8 = parseInt(p,10);

	var zF = document.getElementById("mySelect63");
	var q= zF.selectedIndex;
	var r = zF.options[q].value;
	var sel_9 = parseInt(r,10);

	var zg = document.getElementById("mySelect64");
	var s= zg.selectedIndex;
	var t = zg.options[s].value;
	var sel_10 = parseInt(t,10);

	var zh = document.getElementById("mySelect65");
	var u= zh.selectedIndex;
	var v = zh.options[u].value;
	var sel_11 = parseInt(v,10);

	var totMulti = (sel_1*con_input1) + (sel_2*con_input2) + (sel_3*con_input3) + (sel_4*con_input4)
				  + (sel_5*con_input5) + (sel_6*con_input6) + (sel_7*con_input7) + (sel_8*con_input8)
				  + (sel_9*con_input9) + (sel_10*con_input10) + (sel_11*con_input11);
	var totalUnit = con_input1 + con_input2 + con_input3 + con_input4 + con_input5 + con_input6 + con_input7
					+ con_input8 + con_input9 + con_input10 + con_input11;

	var gpa = totMulti/totalUnit;
	var num = gpa.toFixed(2);

document.getElementById("hide_zero").style.display = "none";
document.getElementById("result_display").innerHTML = num;
 document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}

function clr(){
	document.getElementById("result_display").innerHTML = "";
	document.getElementById("hide_zero").style.display = "block";
	document.getElementById("unit_value").value ="";
	document.getElementById("fis_input").value ="";
	document.getElementById("sec_input").value ="";
	document.getElementById("trd_input").value ="";
	document.getElementById("fth_input").value ="";
	document.getElementById("fith_input").value ="";
	document.getElementById("sith_input").value ="";
	document.getElementById("sevth_input").value ="";
	document.getElementById("eith_input").value ="";
	document.getElementById("nith_input").value ="";
	document.getElementById("t10_input").value ="";
	document.getElementById("t11_input").value ="";
	document.getElementById("t12_input").value ="";
	document.getElementById("t13_input").value ="";
	document.getElementById("t14_input").value ="";
	document.getElementById("t15_input").value  ="";
	document.getElementById("t16_input").value  ="";
	document.getElementById("t17_input").value  ="";
	document.getElementById("t18_input").value  ="";
	document.getElementById("t19_input").value  ="";
	document.getElementById("t20_input").value  ="";
	document.getElementById("t21_input").value ="";
	document.getElementById("t22_input").value ="";
	document.getElementById("t23_input").value ="";
	document.getElementById("t24_input").value ="";
	document.getElementById("t25_input").value ="";
	document.getElementById("t26_input").value ="";
	document.getElementById("t27_input").value ="";
	document.getElementById("t28_input").value ="";
	document.getElementById("t29_input").value ="";
	document.getElementById("t30_input").value ="";
	document.getElementById("t31_input").value ="";
	document.getElementById("t32_input").value ="";
	document.getElementById("t33_input").value ="";
	document.getElementById("t34_input").value ="";
	document.getElementById("t35_input").value ="";
	document.getElementById("t36_input").value ="";
	document.getElementById("t37_input").value ="";
	document.getElementById("t38_input").value ="";
	document.getElementById("t39_input").value ="";
	document.getElementById("t40_input").value ="";
	document.getElementById("t41_input").value ="";
	document.getElementById("t42_input").value ="";
	document.getElementById("t43_input").value ="";
	document.getElementById("t44_input").value ="";
	document.getElementById("t45_input").value ="";
	document.getElementById("t46_input").value ="";
	document.getElementById("t47_input").value ="";
	document.getElementById("t48_input").value ="";
	document.getElementById("t49_input").value ="";
	document.getElementById("t50_input").value ="";
	document.getElementById("t51_input").value ="";
	document.getElementById("t52_input").value ="";
	document.getElementById("t53_input").value ="";
	document.getElementById("t54_input").value ="";
	document.getElementById("t55_input").value ="";
	document.getElementById("t56_input").value ="";
	document.getElementById("t57_input").value ="";
	document.getElementById("t58_input").value ="";
	document.getElementById("t59_input").value ="";
	document.getElementById("t60_input").value ="";
	document.getElementById("t61_input").value ="";
	document.getElementById("t62_input").value ="";
	document.getElementById("t63_input").value ="";
	document.getElementById("t64_input").value ="";
	document.getElementById("t65_input").value ="";
	document.getElementById("error-show").style.display ="none";
	document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(183, 100%, 10%)";
 document.getElementById("input_course").value = "";
 document.getElementById("after_2").style.display ="none";
 document.getElementById("after").style.display ="block";
 document.getElementById("tab_2").style.display ="none";
  document.getElementById("tab_3").style.display ="none";
   document.getElementById("tab_4").style.display ="none";
   document.getElementById("tab_5").style.display ="none";
   document.getElementById("tab_6").style.display ="none";
   document.getElementById("tab_7").style.display ="none";
   document.getElementById("tab_8").style.display ="none";
   document.getElementById("tab_9").style.display ="none";
   document.getElementById("tab_10").style.display ="none";
   document.getElementById("tab_11").style.display ="none";
   location.reload();

}