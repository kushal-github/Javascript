//class calci


class Calci{

	constructor(amount,interest,yrs){
		this.loanAmount=amount;
		this.interestRate=interest;
		this.years=yrs;
	}
}



//Listner for Submit

document.querySelector('.submitBtn').addEventListener('click',function(){


	let loanAmount=document.querySelector('.loanAmount').value;
	let interest=document.querySelector('.interest').value;
	let years=document.querySelector('.repay').value;

	let calciObj=new Calci(loanAmount,interest,years);


	let ui=new CalciUI();

	ui.loading();
	ui.buildResult(calciObj.loanAmount,calciObj.interestRate,calciObj.years);

});

document.querySelector('.controlFields').addEventListener('click',function(){
document.querySelector('.resultPanel').style.display='none';
});

// UI class

class CalciUI{

	constructor(){

	}


	buildResult(monthlyPayment,totalPayment,totalInterest){
		document.querySelector('.monthlyPayResult').innerText=monthlyPayment;
		document.querySelector('.totalPayResult').innerText=totalPayment;
		document.querySelector('.totalInterestResult').innerText=totalInterest;

	}

	loading(){
		document.querySelector('.resultPanel').style.display='none';
		document.querySelector('.loaderPanel').style.display='block';

		setTimeout(function(){
			document.querySelector('.loaderPanel').style.display='none';
			document.querySelector('.resultPanel').style.display='block';
		},3000);
	}


}