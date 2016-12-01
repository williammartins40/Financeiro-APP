function valorK()
{
	var k = document.calcformSac.periodok.value;
	var t = document.calcformSac.periodo.value;
	var first = parseFloat(k);
	var tempo = parseFloat(t);
	var res02 = parseFloat((first-tempo));
	return res02;
}

function ValorAmortizacao()
{
	var parcelas = document.calcformSac.parcelas.value;
	var taxa = document.calcformSac.taxa.value;
	var capital = document.calcformSac.capital.value;
	var periodo = document.calcformSac.periodo.value;
	
	var dinheiro = parseFloat(capital);
	var tempo = parseFloat(parcelas);
	var amortizacao = parseFloat((dinheiro/tempo)).toFixed(2);	
	document.calcformSac.valoramortizacao.value = amortizacao;
	return amortizacao;
}

function SaldoDevedorT()
{
	var parcelas = document.calcformSac.parcelas.value;
	var periodo = document.calcformSac.periodo.value;
	var tempo = parseFloat(parcelas);
	var periodoatual = parseFloat(periodo);
	var amortizacao = ValorAmortizacao();
	
	var base = parseFloat((tempo-periodoatual));
	var res02 = parseFloat((amortizacao*base)).toFixed(2);
	document.calcformSac.saldodevedort.value = res02;
	return res02;	
}

function SaldoDevedorTum()
{
	var parcelas = document.calcformSac.parcelas.value;
	var periodo = document.calcformSac.periodo.value;
	var tempo = parseFloat(parcelas);
	var periodoatual = parseFloat(periodo);
	var amortizacao = ValorAmortizacao();
	
	var base = parseFloat((periodoatual-1));
	var segundo = parseFloat((tempo-base));
	var res02 = parseFloat((amortizacao*segundo)).toFixed(2);
	document.calcformSac.saldodevedortum.value = res02;
	return res02;	
}

function ValorDoJuros()
{
	var taxa = document.calcformSac.taxa.value;
	var i = parseFloat((taxa/100));
	var parcelas = SaldoDevedorTum();
	var res02 = parseFloat((i*parcelas)).toFixed(2);
	document.calcformSac.parcelajurosordemt.value = res02;
	return res02;
}

function ValorPrestacaoOrdemT()
{
	var taxa = document.calcformSac.taxa.value;
	var parcelas = document.calcformSac.parcelas.value;
	var periodo = document.calcformSac.periodo.value;
	
	var tempo = parseFloat(parcelas);
	var periodoatual = parseFloat(periodo);
	var i = parseFloat((taxa/100));
	var amortizacao = ValorAmortizacao();
	
	
	var base = parseFloat(tempo-periodoatual);
	var base2 = parseFloat(base+1);
	var base3 = parseFloat(base2*i);
	var base4 = parseFloat(base3+1);
	var res02 = parseFloat((amortizacao*base4)).toFixed(2);
	document.calcformSac.prestacaoordemt.value = res02;
	return res02;		
}

function SomaAmortizacoesTK()
{
	var periodok = document.calcformSac.periodok.value;
	var k = valorK();
	var parcela = ValorAmortizacao();
	var res02 = parseFloat((k*parcela)).toFixed(2);
	document.calcformSac.amortizacaotk.value = res02;
	return res02;
}

function JurosAcumuladoEmT()
{
	var taxa = document.calcformSac.taxa.value;
	var i = parseFloat((taxa/100));	
	var periodo = document.calcformSac.periodo.value;		
	var t = parseFloat(periodo);
	var parcelas = document.calcformSac.parcelas.value;		
	var n = parseFloat(parcelas);	
	var meio = parseFloat(2*n);
	var meio2 = parseFloat(meio-t);
	var meio3 = parseFloat(meio2+1);
	var meio4 = parseFloat(meio3/2);
	var parcela = ValorAmortizacao();
	var fist = parseFloat(i*parcela);
	var fist2 = parseFloat(fist*t);
	
	var res02 = parseFloat((fist2*meio4)).toFixed(2);
	document.calcformSac.somajurost.value = res02;
	return res02;	
}

function JurosTK()
{
	var taxa = document.calcformSac.taxa.value;
	var i = parseFloat((taxa/100));	
	var parcelas = document.calcformSac.parcelas.value;		
	var n = parseFloat((parcelas));
	var periodo = document.calcformSac.periodo.value;		
	var t = parseFloat((periodo));
	var a = ValorAmortizacao();
	var k = valorK();
	
	var comeco = parseFloat(((k-1)/2));
	var segundo = parseFloat(((n-t)-comeco));
	var terceiro = parseFloat((k*segundo));
	var res02 = parseFloat(((terceiro*a)*i)).toFixed(2);
	document.calcformSac.somajurostk.value = res02;	
	
	return segundo;
}

function SomaPrestacoesA()
{
	var taxa = document.calcformSac.taxa.value;
	var i = parseFloat((taxa/100));	
	var parcelas = document.calcformSac.parcelas.value;		
	var n = parseFloat((parcelas));
	var periodo = document.calcformSac.periodo.value;		
	var t = parseFloat((periodo));
	var a = ValorAmortizacao();

	var primeiro = parseFloat((2*n));
	var segundo = parseFloat((t+1));
	var terceiro = parseFloat((primeiro-segundo));
	var quarto = parseFloat((terceiro/2));
	var quinto = parseFloat((i*quarto));
	var sexto = parseFloat((quinto+1));
	var res02 = parseFloat(((sexto*t)*a)).toFixed(2);
	document.calcformSac.somaprestacaoa.value = res02;
	
}

function SomaPrestacoesTK()
{
	var tex = JurosTK();
	var tenta = parseFloat(tex);
	var taxa = document.calcformSac.taxa.value;
	var i = parseFloat((taxa/100));	
	var parcelas = document.calcformSac.parcelas.value;		
	var n = parseFloat((parcelas));
	var periodo = document.calcformSac.periodo.value;		
	var t = parseFloat((periodo));
	var a = ValorAmortizacao();	
	var k = valorK();
	
	var primeiro = parseFloat((tenta*i));
	var segundo = parseFloat((primeiro+1));
	var terceiro = parseFloat((k*segundo));
	var res02 = parseFloat((a*terceiro)).toFixed(2);
	document.calcformSac.somaprestacaotk.value = res02;
	
	return res02;
}

function Decrescimo()
{
	var taxa = document.calcformSac.taxa.value;
	var i = parseFloat((taxa/100));		
	var a = ValorAmortizacao();	
	
	var res02 = parseFloat((i*a)).toFixed(2);
	document.calcformSac.decrescimo.value = res02;
	return res02;
	
}

function calcularSac() 
{
		JurosTK();
		Decrescimo();
		SomaPrestacoesA();
		JurosAcumuladoEmT();
		SomaAmortizacoesTK();
		ValorAmortizacao();
		SaldoDevedorT();
		SaldoDevedorTum();
		ValorPrestacaoOrdemT();
		ValorDoJuros();
		SomaPrestacoesTK();
}		
