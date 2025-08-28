class Usuario {
  constructor(nome, email, senha) {
    if (!nome || !email || !senha) {
      throw new Error("Nome, e-mail e senha são obrigatórios.");
    }
    if (typeof email !== "string" || !email.includes("@")) {
      throw new Error("Formato de e-mail inválido.");
    }
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}

module.exports = Usuario;
