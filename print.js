(function ($) {
	$(document).ready(function () {
		const logoUEPG = "<img src='https://intranet.hu.uepg.br/wp-content/uploads/2019/05/uepg_fl_313x70.png'>";
		const logoHU = "<img src='https://intranet.hu.uepg.br/wp-content/uploads/2019/04/logo_azul_transparente.png' style='float:right;'><br><br><br><br>";

		var style = "<style>";
		style = style + "img {width: auto; height: 55px; opacity: 0.5;}";
		style = style + "h2 {font-size: 12px; font-family: Arial, Helvetica, sans-serif; text-align: center; font-weight: bold;}";
		style = style + "h3 {font-size: 12px; font-family: Arial, Helvetica, sans-serif; text-align: right; font-weight: normal;}";
		style = style + "h4 {font-size: 12px; font-family: Arial, Helvetica, sans-serif; text-align: center; font-weight: normal;}";
		style = style + "p {font-size: 12px; font-family: Arial, Helvetica, sans-serif; text-align: justify; line-height: 20px;}";
		style = style + "</style >";

		var printPDF = function (content) {
			var win = window.open('', '', 'height=700,width=700');
			win.document.write('<html><head>');
			win.document.write('<meta charset="utf8">');
			win.document.write(style);
			win.document.write('</head>');
			win.document.write('<content>');
			win.document.write(content);
			win.document.write('</content></html>');
			win.document.close();
			win.print();
		}

		var writeDate = function () {
			var newDate = new Date();
			var currentDate = newDate.getDate() + " de ";
			switch (newDate.getMonth() + 1) {
				case 1:
					currentDate = currentDate + "janeiro";
					break;
				case 2:
					currentDate = currentDate + "fevereiro";
					break;
				case 3:
					currentDate = currentDate + "março";
					break;
				case 4:
					currentDate = currentDate + "abril";
					break;
				case 5:
					currentDate = currentDate + "maio";
					break;
				case 6:
					currentDate = currentDate + "junho";
					break;
				case 7:
					currentDate = currentDate + "julho";
					break;
				case 8:
					currentDate = currentDate + "agosto";
					break;
				case 9:
					currentDate = currentDate + "setembro";
					break;
				case 10:
					currentDate = currentDate + "outubro";
					break;
				case 11:
					currentDate = currentDate + "novembro";
					break;
				case 12:
					currentDate = currentDate + "dezembro";
					break;
			}
			currentDate = currentDate + " de " + newDate.getFullYear();
			return currentDate;
		}

		$("#submit.orientacao").click(function () {
			var content = logoUEPG;
			content = content + logoHU;
			content = content + "<h2>TERMO DE COMPROMISSO DE ORIENTAÇÃO</h2><br><br><br><br>";
			content = content + "<p>A fim de dar cumprimento a elaboração do Trabalho de Conclusão de Residência (TCR), componente obrigatório para integralização do Currículo da Residência Multiprofissional em " + $("#area.orientacao").val() + " - " + $("#especifico.orientacao").val() + ", após deliberada e acordada a proposta de projeto de pesquisa apresentado pelo(a) residente " + $("#residente.orientacao").val() + ", eu, professor(a) " + $("#titulacao.orientacao").val() + " " + $("#orientador.orientacao").val() + " comprometo-me a assumir a responsabilidade de conduzir a orientação do TCR cujo tema versa sobre " + $("#tema.orientacao").val() + ", respeitando o Regulamento do TCR do Hospital Universitário Regional dos Campos Gerais.</p><br><br><br><br><br><br><br>";
			content = content + "<p>Ponta Grossa, " + writeDate() + ".</p><br><br><br><br><br><br><br><br><br><br>";
			content = content + "<h2>____________________________________</h2>";
			content = content + "<h2>" + $("#titulacao.orientacao").val() + " " + $("#orientador.orientacao").val() + "</h2>";

			printPDF(content);
		});

		$("#submit.divulgacao").click(function () {
			var content = logoUEPG;
			content = content + logoHU;
			content = content + "<h2>AUTORIZAÇÃO DE DIVULGAÇÃO</h2><br><br><br><br>";
			content = content + "<p>Eu " + $("#residente.divulgacao").val() + ", R.G n° " + $("#rg.divulgacao").val() + " e C.P.F. " + $("#cpf.divulgacao").val() + " residente da Residência Multipofissional em " + $("#area.divulgacao").val() + " - " + $("#especifico.divulgacao").val() + ", do Hospital Universitário Regional dos Campos Gerais, autorizo que a Instituição de Ensino ou meu orientador divulgue a obra intitulada " + $("#obra.divulgacao").val() + " em qualquer canal de comunicação e que a mesma seja encaminhada para submissão e posterior publicação em eventos e/ou periódicos de caráter científico, desde que seja preservada a autoria da obra, e até que cesse esta autorização.</p><br><br><br><br><br><br><br>";
			content = content + "<p>Ponta Grossa, " + writeDate() + ".</p><br><br><br><br><br><br><br><br><br><br>";
			content = content + "<h2>____________________________________</h2>";
			content = content + "<h2>" + $("#residente.divulgacao").val() + "</h2><br><br><br><br><br><br><br>";
			content = content + "<h2>____________________________________</h2>";
			content = content + "<h2>" + $("#titulacao.divulgacao").val() + " " + $("#orientador.divulgacao").val() + "</h2>";

			printPDF(content);
		});

		$("#submit.defesa").click(function () {
			var content = logoUEPG;
			content = content + logoHU;
			content = content + "<h2>SOLICITAÇÃO DE DEFESA</h2><br><br>";
			content = content + "<h3>Ponta Grossa, " + writeDate() + ".</h3><br><br>";
			content = content + "<p>Ilma. Sra.<br>Profa. Me. Luciane Patrícia Andreani Cabral<br>Diretora Acadêmica<br>Hospital Universitário Regional dos Campos Gerais</p><br>";
			content = content + "<p>Senhora Diretora:<br>Vimos pelo presente solicitar a V.S.ª a marcação da data para a defesa do trabalho de conclusão de residência intitulado “" + $("#tema.defesa").val() + "” do residente " + $("#residente.defesa").val() + " sob minha orientação.<br>Dessa forma, indicamos o dia " + $("#dia.defesa").val() + " de " + $("#mes.defesa").val() + " de " + $("#ano.defesa").val() + ", às " + + $("#hora.defesa").val() + ":" + $("#minuto.defesa").val() + " horas, para a realização da referida defesa. Aproveitamos também o presente documento para indicar os nomes dos professores para composição da Banca examinadora:";
			content = content + "<h4>" + $("#titulacao.defesa").val() + " " + $("#orientador.defesa").val() + " Orientador(a)<h4>";
			content = content + "<h4>" + $("#titulacao1.defesa").val() + " " + $("#titular1.defesa").val() + " Titular (" + $("#instituicao1.defesa").val() + ")<h4>";
			content = content + "<h4>" + $("#titulacao2.defesa").val() + " " + $("#titular2.defesa").val() + " Titular (" + $("#instituicao2.defesa").val() + ")<h4>";
			content = content + "<h4>" + $("#titulacao3.defesa").val() + " " + $("#suplente.defesa").val() + " Suplente (" + $("#instituicao3.defesa").val() + ")<h4><br>";
			content = content + "<p>Aproveitando a oportunidade, apresentamos os nossos votos de estima e consideração.</p><p>Atenciosamente,</p><br><br><br><br><br>";
			content = content + "<h2>____________________________________</h2>";
			content = content + "<h2>" + $("#residente.defesa").val() + "</h2><br><br><br><br><br>";
			content = content + "<h2>____________________________________</h2>";
			content = content + "<h2>" + $("#titulacao.defesa").val() + " " + $("#orientador.defesa").val() + "</h2>";

			printPDF(content);
		});

		$("#submit.autenticidade").click(function () {
			var content = logoUEPG;
			content = content + logoHU;
			content = content + "<h2>TERMO DE AUTENTICIDADE</h2><br><br><br><br>";
			content = content + "<p>Eu " + $("#residente.autenticidade").val() + ", R.G n° " + $("#rg.autenticidade").val() + " e C.P.F. " + $("#cpf.autenticidade").val() + " residente da Residência Multipofissional em " + $("#area.autenticidade").val() + " - " + $("#especifico.autenticidade").val() + ", do Hospital Universitário Regional dos Campos Gerais, declaro para os devidos fins que tenho ciência do Regulamento e das normas emanadas por esta Instituição no tocante à elaboração do Trabalho de Conclusão de Curso (TCR).</p>";
			content = content + "<p>Outrossim, declaro que o trabalho científico intitulado " + $("#tema.autenticidade").val() + " foi por mim elaborado, e que o mesmo não contém qualquer tipo de colagem, cópia ou de qualquer outro instrumento que possa configurar como delito de plágio ou autoria de terceiros.</p>";
			content = content + "<p>Assim, demonstrando plena consciência dos efeitos legais, civis, penais, administrativos e educacionais, caso venha configurar o crime de plágio ou violação aos direitos autorais e de reprovação automática no TCR, o que impedirá a obtenção do meu Diploma de Conclusão da Residência, firmo o presente termo.</p><br><br>";
			content = content + "<p>Ponta Grossa, " + writeDate() + ".</p><br><br><br><br><br><br><br><br><br><br>";
			content = content + "<h2>____________________________________</h2>";
			content = content + "<h2>" + $("#residente.autenticidade").val() + "</h2>";

			printPDF(content);
		});

		$("#submit.realizacao").click(function () {
			var content = logoUEPG;
			content = content + logoHU;
			content = content + "<h2>TERMO DE COMPROMISSO PARA REALIZAÇÃO DE TRABALHO DE CONCLUSÃO DE RESIDÊNCIA – TCR</h2><br>";
			content = content + "<p>Dados de identificação do residente:<br>Nome: " + $("#residente.realizacao").val() + "<br>Residência Multiprofissional: " + $("#area.realizacao").val() + " - " + $("#especifico.realizacao").val() + "</p>";
			content = content + "<p>Dados de Identificação do Trabalho:<br>Título: " + $("#tema.realizacao").val() + "<br>Nome do Orientador: "+ $("#titulacao.realizacao").val() + " " + $("#orientador.realizacao").val() + "<br>Nome do Co-orientador: " + $("#titulacao1.realizacao").val() + " " + $("#coorientador.realizacao").val() + "</p><br>";
			content = content + "<h2>CLÁUSULA PRIMEIRA – DOS COMPROMISSOS DO(A) RESIDENTE</h2>";
			content = content + "<p>1. Conduzir as atividades para o desenvolvimento do TCR acima descrito, sob a orientação do(a) professor(a) orientador(a) e equipe de apoio à pesquisa (se houver).</p><p>2. Respeitar o Regulamento do Trabalho de Conclusão de Residência para os Cursos de Residência Multiprofissional em Saúde do HURCG.</p><p>3. Estar em todos os encontros previstos com o docente orientador e ou equipe de apoio à pesquisa. </p><p>4. Cumprir rigorosamente os prazos definidos para entrega das diversas etapas do trabalho pelo orientador e equipe de apoio à pesquisa. </p><p>4.1. Os prazos de entregas serão registrados em papel quando em conversas pessoais com assinatura do residente e docente que proferiu a reunião, ou eletronicamente, via e-mail. </p><p>4.2. O descumprimento de até três prazos de entrega implicará no desligamento do(a) residente a proposta de TCR acima descrita, a perda do(a) professor(a) orientador(a) e auxílio da equipe de apoio à pesquisa.</p><br>";
			content = content + "<p>Ponta Grossa, " + writeDate() + ".</p><br><br><br><br><br><br><br>";
			content = content + "<h2>____________________________________</h2>";
			content = content + "<h2>" + $("#residente.realizacao").val() + "</h2>";

			printPDF(content);
		});
	});
}(jQuery));