function K()
{
	var periodo = document.calcformPrice.periodo.value;
	var k = document.calcformPrice.periodok.value;
	var res = parseFloat(k-periodo);
	return res;
}

function FVA()
{
	var parcelas = document.calcformPrice.parcelas.value;
	var taxa = document.calcformPrice.taxa.value;
	var capital = document.calcformPrice.capital.value;
	var periodo = document.calcformPrice.periodo.value;
	
	var i = parseFloat((taxa/100));
	var n = parseFloat(parcelas);
	var ind = parseFloat(1+i);
	var base = parseFloat(Math.pow(ind,n));
	var cima = parseFloat((base-1));
	var baixo = parseFloat((base*i));
	var res = parseFloat((cima/baixo));
	
	return res;
}

function FVAT()
{
	var parcelas = document.calcformPrice.parcelas.value;
	var taxa = document.calcformPrice.taxa.value;
	var capital = document.calcformPrice.capital.value;
	var periodo = document.calcformPrice.periodo.value;
	
	var i = parseFloat((taxa/100));
	var t = parseFloat(parcelas);
	var p = parseFloat(periodo);
	var n = parseFloat(t-p);
	var ind = parseFloat(1+i);
	var base = parseFloat(Math.pow(ind,n));
	var cima = parseFloat((base-1));
	var baixo = parseFloat((base*i));
	var res = parseFloat((cima/baixo));
	
	return res;	
}

function FVATK()
{
	var parcelas = document.calcformPrice.parcelas.value;
	var taxa = document.calcformPrice.taxa.value;
	var capital = document.calcformPrice.capital.value;
	var periodo = document.calcformPrice.periodo.value;
	var valork = document.calcformPrice.periodok.value;
	
	var pk = parseFloat(valork);
	var i = parseFloat((taxa/100));
	var t = parseFloat(parcelas);
	var p = parseFloat((periodo));
	var k = parseFloat(pk-p);
	var faz = parseFloat((t-p));
	var n = parseFloat((faz-k));
	var ind = parseFloat(1+i);
	var base = parseFloat(Math.pow(ind,n));
	var cima = parseFloat((base-1));
	var baixo = parseFloat((base*i));
	var res = parseFloat((cima/baixo));
	
	return res;	
}

function FRC()
{
	var parcelas = document.calcformPrice.parcelas.value;
	var taxa = document.calcformPrice.taxa.value;
	var capital = document.calcformPrice.capital.value;
	var periodo = document.calcformPrice.periodo.value;

	var i = parseFloat((taxa/100));
	var n = parseFloat(parcelas);
	
	var ind = parseFloat(1+i);
	var base = parseFloat(Math.pow(ind,n));
	var baixo = parseFloat((base-1));
	var cima = parseFloat((base*i));
	var res = parseFloat((cima/baixo));	
	
	return res;	
}

//Sistemas Price

function ValorParcela()
{
	var parcelas = document.calcformPrice.parcelas.value;
	var taxa = document.calcformPrice.taxa.value;
	var capital = document.calcformPrice.capital.value;
	var periodo = document.calcformPrice.periodo.value;

	var dinheiro = parseFloat(capital);
	var divido = FRC();						
	var valparcela = (dinheiro*divido).toFixed(2);
	document.calcformPrice.valorparcela.value = valparcela;
	return valparcela;
}
function SaldoDevedorT1()
{
	var parcelas = document.calcformPrice.parcelas.value;
	var taxa = document.calcformPrice.taxa.value;
	var capital = document.calcformPrice.capital.value;
	var periodo = document.calcformPrice.periodo.value;
	
	var dinheiro = parseFloat(capital);
	var tempo = parseFloat(parcelas);
	var i = (parseFloat(taxa)/100);		
	var ind = (1+i);	
	var peratual = parseFloat(periodo);
	var ntmenos = parseFloat((tempo-peratual));
	
	var base = Math.pow(ind,ntmenos);
	var baixo = (base*i);
	var cima = (base-1);
	var divido = (cima/baixo);
	var valorparcela = ValorParcela();
	var saldodevedor = (valorparcela*(divido)).toFixed(2);
	document.calcformPrice.saldodevedort.value = saldodevedor;
	return saldodevedor;
}
function SaldoDevedorTmenosum()
{
	var parcelas = document.calcformPrice.parcelas.value;
	var taxa = document.calcformPrice.taxa.value;
	var capital = document.calcformPrice.capital.value;
	var periodo = document.calcformPrice.periodo.value;	
	var dinheiro = parseFloat(capital);
	var tempo = parseFloat(parcelas);
	var i = (parseFloat(taxa)/100);		
	var ind = (1+i);	
	var peratual = parseFloat(periodo);

	var tmenosum = (tempo-(peratual-1));
	var devedor2 = Math.pow(ind,tmenosum);
	var cima2 = (devedor2-1);
	var baixo2 = (devedor2*i);
	var divido2 = (cima2/baixo2);
	var valorparcela = ValorParcela();
	var seila = parseFloat(valorparcela*(divido2)).toFixed(2);
	document.calcformPrice.saldodevedort1.value = seila;
	return seila;
}
function JurosdeOrdemT()
{
	var taxa = document.calcformPrice.taxa.value;
	var i = (parseFloat(taxa)/100);	
	var seila = SaldoDevedorTmenosum();
	var jurost = (i*(seila)).toFixed(2);
	document.calcformPrice.jurosordemt.value = jurost;
	var periodo = document.calcformPrice.periodo.value;
	var t = parseFloat(parcelas);
	return t;
}
function PrimeiraAmortizacao()
{
	var capital = document.calcformPrice.capital.value;
	var dinheiro = parseFloat(capital);	
	var taxa = document.calcformPrice.taxa.value;
	var i = (parseFloat(taxa)/100);	
	var valorparcela = ValorParcela();
	var amortiza1 = (valorparcela-(i*dinheiro)).toFixed(2);
	document.calcformPrice.primeiraamortizacao.value = amortiza1;	
	return amortiza1;
}
function ValordaAmortizacaoemT()
{
	var amortiza1 = PrimeiraAmortizacao();
	var periodo = document.calcformPrice.periodo.value;
	var peratual = parseFloat(periodo);
	var taxa = document.calcformPrice.taxa.value;
	var i = (parseFloat(taxa)/100);	
	var tempo = (peratual-1);
	var ind = (i+1);
	var base = Math.pow(ind,tempo);
	var amortizacao = (amortiza1*base).toFixed(2);
	document.calcformPrice.amortizacaot.value = amortizacao;
}
function TotalAmortizacao()
{
	var capital = document.calcformPrice.capital.value;
	var dinheiro = parseFloat(capital);
	var saldodevedor = SaldoDevedorT();
	var amortizacaototal = (dinheiro-saldodevedor).toFixed(2);
	document.calcformPrice.amortizacaott.value = amortizacaototal;	
	
}
function JurosAcumulado()
{
	var periodo = document.calcformPrice.periodo.value;	
	var parcela = ValorParcela();
	var t = parseFloat(periodo);
	var fva = FVA();
	var fva1 = FVAT();
	var finall = parseFloat((t-fva));
	var finale = parseFloat((finall+fva1));
	
	var res = parseFloat((parcela*finale)).toFixed(2);	
	document.calcformPrice.jurosacum.value = res;
	return res;
}


function AmortizacaoEmTK()
{
	
	var parcela = ValorParcela();
	var fvat = FVAT();
	var fvatk = FVATK();
	var meio = parseFloat((fvat-fvatk));
	var res = parseFloat((parcela*meio)).toFixed(2);	
	document.calcformPrice.amortizacaott2.value = res;
	return res;
}

function JurosAcumuladoEmTK()
{	
	var parcela = ValorParcela();
	var k = K();
	var a = AmortizacaoEmTK();
	var res = parseFloat(((parcela*k)-a)).toFixed(2);
	document.calcformPrice.jurosacum2.value = res;
	return res;
}

function calcularPrice() 
{
		AmortizacaoEmTK();
		JurosAcumuladoEmTK();
		ValorParcela();
		SaldoDevedorT1();
		SaldoDevedorTmenosum();
		JurosdeOrdemT();
		PrimeiraAmortizacao();
		ValordaAmortizacaoemT()
		TotalAmortizacao();
		JurosAcumulado();
}		
