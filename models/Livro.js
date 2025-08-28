class Livro {
  constructor(titulo, autor, ano) {
    if (!titulo || !autor || !ano) {
      throw new Error("Título, autor e ano são obrigatórios.");
    }
    if (typeof ano !== "number") {
      throw new Error("O ano deve ser um número.");
    }
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.disponivel = true; // Por defeito, um livro novo está sempre disponível
  }

  marcarComoEmprestado() {
    this.disponivel = false;
  }

  marcarComoDevolvido() {
    this.disponivel = true;
  }
}

module.exports = Livro;
