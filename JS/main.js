$(function(){
	$("#first").click(function(){
		$("header").fadeOut(1000);
	});

	$("#forClick").click(function(){
		$("#formreg").fadeIn(500);
	});
	$("#second").click(function(){
		$("#formreg").fadeOut(500);
	});

	$("#minus").click(function(){
		let fval = $("#mynum").attr('placeholder');
		fval = +fval;
		fval -= 1;
		$("#mynum").attr('placeholder',`${fval}`);
		forPriceFun();
	});

	
	$("#plus").click(function(){
		let fvalq = $("#mynum").attr('placeholder');
		fvalq = +fvalq;
		fvalq += 1;
		$("#mynum").attr('placeholder',`${fvalq}`);
		forPriceFun();
	});
	$("#button").click(function(){
		check();
	});
	$("#country").change(function(){
		let cntr = $("#country").val();
		if(cntr == "PL"){
			$("#arrows").attr("placeholder","+48");
			$(".forI").css("background","white");
		}
		if(cntr == "UA"){
			$("#arrows").attr("placeholder", "+380");
			$(".forI").css("background","white");
		}
		if(cntr == "LT"){
			$("#arrows").attr("placeholder", "+370");
			$(".forI").css("background","white");
		}
	});

	function forPriceFun(){
		let quant = $("#mynum").attr('placeholder');
		quant = +quant;
		let price = quant * 10.99;
		$("#forPrice").text(`$${price}`);
	}

	function check(){
		var obj = {};
		let chk = false;
		let ch = false;
		let chq = false;
		let em = $("#name").val();
		let arr = em.split('');
		if(arr.length < 3){
			$("#userMail").text("Too short name!").css("color","red");
		}
		else{
			$("#userMail").text("Enter your name").css("color","lightgrey");
			ch = true;
		}
		
		
		let num = $("#arrows").val();
		let num_arr = num.split('');
		if(num_arr.length < 10){
			$("#usPhone").text("Invalid phone number!").css("color","red");
		}
		else{
			$("#usPhone").text("Your phone").css("color","lightgrey");
			chk = true;
		}

		let str = $("#usEmal").val();
		// var str_spl = str.split();
		if(str.indexOf("@") != -1){
			$("#userMal").text("Enter your email").css("color","lightgrey");
			chq = true;	
		}
		else{
			$("#userMal").text("Incorrect email").css("color","red");
		}
		

		if(chk == true && ch == true && chq == true){
			$("#formreg").fadeOut(500);
			$("#success").fadeIn(500);
			let firstVal = $("#arrows").val();
			let secondVal = $("#usEmal").val();
			let thirdVal = $("#name").val();
			let array = [firstVal,secondVal,thirdVal];
			array = JSON.stringify(array);
			console.log(array);
		}

	}
	
	
	$(".FinBtn").click(function(){
		$("#success").fadeOut(500);
	});
	$("#lastOne").click(function(){
		$("#success").fadeOut(500);
	});
});
