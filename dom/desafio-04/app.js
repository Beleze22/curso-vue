new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		classeInput: "",
		classeInput2: "",
		classe4: false,
		quadrado: "quadrado",
		cor5: '',
		alturaLargura: {
			width: '100px',
			height: '100px',
			border: 'solid 1px purple',
		},
		width: 0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque";
			}, 500)
		},
		aplicarClasse(event) {
			if (event.target.value == "true") {
				this.classe4 = true;
			} else if (event.target.value == "false") {
				this.classe4 = false;
			}
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 0.1;
				this.width = `${valor}%`;
				if (valor >= 100) clearInterval(temporizador)
			}, 5)
		},
	},
})
