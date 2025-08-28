const EmprestimoService = require("../models/EmprestimoService.js");

// Mock da classe Livro
const mockLivro = {
  titulo: "Livro de Teste",
  disponivel: true,
  marcarComoEmprestado: jest.fn(), // jest.fn() cria uma função simulada
  marcarComoDevolvido: jest.fn(),
};

// Mock do objeto Usuario
const mockUsuario = {
  nome: "Usuário de Teste",
};

describe("Testes do Módulo Empréstimo", () => {
  const emprestimoService = new EmprestimoService();

  // Limpa os mocks antes de cada teste
  beforeEach(() => {
    mockLivro.disponivel = true;
    jest.clearAllMocks();
  });

  // --- Testes para realizarEmprestimo ---
  // Caso 1: Sucesso
  test("Deve realizar um empréstimo com sucesso se o livro estiver disponível", () => {
    emprestimoService.realizarEmprestimo(mockLivro, mockUsuario);
    // Verifica se o método para marcar como emprestado foi chamado no livro
    expect(mockLivro.marcarComoEmprestado).toHaveBeenCalledTimes(1);
  });

  // Caso 2: Falha
  test("Deve lançar um erro ao tentar emprestar um livro indisponível", () => {
    mockLivro.disponivel = false; // Define o livro como indisponível
    expect(() => {
      emprestimoService.realizarEmprestimo(mockLivro, mockUsuario);
    }).toThrow("O livro não está disponível para empréstimo.");
    // Garante que o método de emprestar não foi chamado
    expect(mockLivro.marcarComoEmprestado).not.toHaveBeenCalled();
  });

  // --- Testes para realizarDevolucao ---
  // Caso 1: Sucesso
  test("Deve realizar uma devolução com sucesso se o livro estava emprestado", () => {
    mockLivro.disponivel = false; // Livro está emprestado
    emprestimoService.realizarDevolucao(mockLivro, mockUsuario);
    // Verifica se o método para marcar como devolvido foi chamado
    expect(mockLivro.marcarComoDevolvido).toHaveBeenCalledTimes(1);
  });

  // Caso 2: Falha
  test("Deve lançar um erro ao tentar devolver um livro que já está disponível", () => {
    mockLivro.disponivel = true; // Livro já está disponível
    expect(() => {
      emprestimoService.realizarDevolucao(mockLivro, mockUsuario);
    }).toThrow("Este livro já consta como disponível.");
    // Garante que o método de devolução não foi chamado
    expect(mockLivro.marcarComoDevolvido).not.toHaveBeenCalled();
  });
});
