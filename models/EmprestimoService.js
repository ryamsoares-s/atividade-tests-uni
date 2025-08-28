class EmprestimoService {
  realizarEmprestimo(livro, usuario) {
    if (!livro || !usuario) {
      throw new Error("Livro e usuário são necessários para o empréstimo.");
    }
    if (!livro.disponivel) {
      throw new Error("O livro não está disponível para empréstimo.");
    }
    livro.marcarComoEmprestado();
    return true; // Sucesso
  }

  realizarDevolucao(livro, usuario) {
    if (!livro || !usuario) {
      throw new Error("Livro e usuário são necessários para a devolução.");
    }
    if (livro.disponivel) {
      throw new Error("Este livro já consta como disponível.");
    }
    livro.marcarComoDevolvido();
    return true; // Sucesso
  }
}

module.exports = EmprestimoService;
