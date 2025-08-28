const Usuario = require("../models/Usuario.js");
const Livro = require("../models/Livro.js");
const EmprestimoService = require("../models/EmprestimoService.js");

describe("Testes de Integração do Sistema de Biblioteca", () => {
  let usuario;
  let livro;
  let emprestimoService;

  beforeEach(() => {
    // Configuração inicial para cada teste
    usuario = new Usuario("Carlos", "carlos@email.com", "senha123");
    livro = new Livro("A Guerra dos Tronos", "George R. R. Martin", 1996);
    emprestimoService = new EmprestimoService();
  });

  // --- Caso de Teste 1: Empréstimo bem-sucedido ---
  test("Deve permitir que um usuário pegue um livro disponível, atualizando o status do livro", () => {
    // Pré-condições:
    // 1. Existe um usuário cadastrado.
    // 2. Existe um livro cadastrado e sua disponibilidade é 'true'.
    expect(livro.disponivel).toBe(true);

    // Entradas:
    const livroParaEmprestar = livro;
    const usuarioQueEmpresta = usuario;

    // Procedimento:
    // Chama o serviço de empréstimo para realizar a operação.
    const resultado = emprestimoService.realizarEmprestimo(
      livroParaEmprestar,
      usuarioQueEmpresta
    );

    // Resultado esperado:
    // 1. A operação de empréstimo retorna sucesso.
    // 2. O status de disponibilidade do livro é alterado para 'false'.
    expect(resultado).toBe(true);
    expect(livro.disponivel).toBe(false);
  });

  // --- Caso de Teste 2: Tentativa de empréstimo de livro indisponível ---
  test("Não deve permitir que um usuário pegue um livro que já foi emprestado", () => {
    // Pré-condições:
    // 1. Existe um usuário.
    // 2. Existe um livro que já está emprestado (disponibilidade é 'false').
    livro.marcarComoEmprestado();
    expect(livro.disponivel).toBe(false);

    // Entradas:
    const livroParaEmprestar = livro;
    const usuarioQueTentaEmprestar = usuario;

    // Procedimento e Resultado esperado:
    // A chamada ao serviço de empréstimo deve lançar um erro informando que o livro não está disponível.
    expect(() => {
      emprestimoService.realizarEmprestimo(
        livroParaEmprestar,
        usuarioQueTentaEmprestar
      );
    }).toThrow("O livro não está disponível para empréstimo.");
    // O status do livro deve permanecer 'false'.
    expect(livro.disponivel).toBe(false);
  });

  // --- Caso de Teste 3: Devolução de um livro ---
  test("Deve permitir a devolução de um livro, atualizando seu status para disponível", () => {
    // Pré-condições:
    // 1. Existe um usuário.
    // 2. Existe um livro que está emprestado (disponibilidade é 'false').
    livro.marcarComoEmprestado();
    expect(livro.disponivel).toBe(false);

    // Entradas:
    const livroParaDevolver = livro;
    const usuarioQueDevolve = usuario;

    // Procedimento:
    // Chama o serviço para realizar a devolução.
    const resultado = emprestimoService.realizarDevolucao(
      livroParaDevolver,
      usuarioQueDevolve
    );

    // Resultado esperado:
    // 1. A operação de devolução retorna sucesso.
    // 2. O status de disponibilidade do livro é alterado para 'true'.
    expect(resultado).toBe(true);
    expect(livro.disponivel).toBe(true);
  });
});
