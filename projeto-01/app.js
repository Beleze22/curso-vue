new Vue({
  el: '#app',
  data: {
    jogoAtivo: false,
    vidaJogador: 100,
    vidaMonstro: 100,
    logJogador: [],
    logMonstro: [],
  },
  methods: {
    ataque() {
      const danoJogador = Math.floor(Math.random() * 6) + 7
      const danoMonstro = Math.floor(Math.random() * 6) + 4
      if (this.vidaJogador == 0 || this.vidaMonstro == 0) {
        return
      }
      if (this.vidaJogador > 0) {
        if (danoJogador < this.vidaJogador) {
          this.vidaJogador = this.vidaJogador - danoJogador
        } else {
          this.vidaJogador = 0
        }
      }
      if (this.vidaMonstro > 0) {
        if (danoMonstro < this.vidaMonstro) {
          this.vidaMonstro = this.vidaMonstro - danoMonstro
        } else {
          this.vidaMonstro = 0
        }
      }
    },
    ataqueEspecial() {
      const danoJogador = Math.floor(Math.random() * 6) + 6
      const danoMonstro = Math.floor(Math.random() * 6) + 8
      if (this.vidaJogador == 0 || this.vidaMonstro == 0) {
        return
      }
      if (this.vidaJogador > 0) {
        if (danoJogador < this.vidaJogador) {
          this.vidaJogador = this.vidaJogador - danoJogador
        } else {
          this.vidaJogador = 0
        }
      }
      if (this.vidaMonstro > 0) {
        if (danoMonstro < this.vidaMonstro) {
          this.vidaMonstro = this.vidaMonstro - danoMonstro
        } else {
          this.vidaMonstro = 0
        }
      }
    },
    // Adicionar condicionais para prever possível vida indo a zero utilizando o curar
    curar() {
      const danoJogador = Math.floor(Math.random() * 4) + 4
      const cura = Math.floor(Math.random() * 5) + 5
      const diff = cura - danoJogador
      if (this.vidaJogador == 0 || this.vidaMonstro == 0) {
        return
      }
      if (diff < 0) {
        if ((-diff) < this.vidaJogador) {
          this.vidaJogador = this.vidaJogador + diff
        } else {
          this.vidaJogador = 0
        }
      } else {
        this.vidaJogador = this.vidaJogador + diff
      }
    },
    novoJogo() {
      this.vidaJogador = 100
      this.vidaMonstro = 100
      this.jogoAtivo = true
      this.logJogador = []
      this.logMonstro = []
    },
  },
  computed: {
    aplicarProgressoMonstro() {
      return {
        backVermelho: this.vidaMonstro < 20,
        progressoVerde: this.vidaMonstro >= 20,
      }
    },
    aplicarProgressoJogador() {
      return {
        backVermelho: this.vidaJogador < 20,
        progressoVerde: this.vidaJogador >= 20,
      }
    },
    setBackGroundJogador() {
      return {
        backVermelho: this.vidaJogador == 0,
      }
    },
    setBackGroundMonstro() {
      return {
        backVermelho: this.vidaMonstro == 0,
      }
    },
    acabou() {
      return this.vidaJogador == 0 || this.vidaMonstro == 0
    },
  },
  watch: {
    vidaJogador(novo, antigo) {
      if (novo == 100) {
        return
      }
      diff = antigo - novo
      this.logJogador.push(diff)
    },
    vidaMonstro(novo, antigo) {
      if (novo == 100) {
        return
      }
      diff = antigo - novo
      this.logMonstro.push(diff)
    }
  }
})