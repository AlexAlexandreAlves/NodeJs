<template>
  <v-layout flex align-center justify-center fill-height>
    <v-flex xs12 sm4 align-center justify-center>
      <v-card>
        <v-card-text class="pt-2">
          <v-form v-model="formValido">
            <v-text-field
              label="Email"
              :rules="regrasEmail"
              v-model="email"
              required
              outline
            />

            <v-text-field
              label="Senha"
              :rules="regrasSenha"
              v-model="senha"
              type="password"
              counter
              required
            />

            <v-select
              :items="itens"
              v-model="tipo"
              :rules="regrasTipo"
              label="Tipo de Usuário"
              item-text="nome"
              item-value="valor"
            />

            <v-btn
              :disabled="!formValido"
              @click="adicionarUsuario"
              color="primary"
              >Criar</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import UserService from "../../services/UserService.js";

export default {
  data() {
    return {
      email: "",
      senha: "",
      tipo: "",
      formValido: "falso",
      msgSucesso: "",
      msgSucesso: "",
      itens: [
        { nome: "Administrador", valor: "1" },
        { nome: "Balcão", valor: "2" },
        { nome: "Cozinha", valor: "3" },
      ],
      regrasEmail: [
        (v) => !!v || "Email precisa ser preenchido",
        (v) => /.+@.+/.test(v) || "Email Inválido",
      ],
      regrasSenha: [
        (v) => !!v || "Senha precisa ser preenchido",
        (v) =>
          (v && v.length >= 8) || "Senha precisar ter ao menos 8 caracteres",
      ],
      regrasTipo: [(v) => !!v || "Tipo de usuário precisa ser preenchido"],
    };
  },
  methods: {
    adicionarUsuario: function () {
      this.msgSucesso = "";
      this.msgErro = "";
      let dados = {
        email: this.email,
        senha: this.senha,
        tipo: this.tipo,
      };
      UserService.sigUp(dados)
        .then((response) => {
          alert(responde.data);
          this.msgSucesso = response.data;
        })
        .catch((e) => {
          alert(e);
          this.msgErro = e;
        });
    },
  },
};
</script>
