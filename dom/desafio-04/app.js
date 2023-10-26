new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		classe2A: "gustavo",
		classe2B: "claudia",
		classeInput: "",
		classeInput2: "",
		bool: "",
		quadrado: "quadrado",
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque";
			}, 500)
		},
		aplicarClasse() {
			return this.bool === "true" ? "gustavo" : "";
		},
		iniciarProgresso() {

		},
	},
})
