const Livro = require("../models/Livro.js");

describe("Testes do Módulo Livro", () => {
  let livro;

  // beforeEach é executado antes de cada teste neste bloco
  beforeEach(() => {
    livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
  });

  // Caso de teste 1 (Função: marcarComoEmprestado): Sucesso ao marcar como emprestado
  test("Deve alterar a disponibilidade para false ao ser marcado como emprestado", () => {
    livro.marcarComoEmprestado();
    expect(livro.disponivel).toBe(false);
  });

  // Caso de teste 2 (Função: marcarComoDevolvido): Sucesso ao marcar como devolvido
  test("Deve alterar a disponibilidade para true ao ser marcado como devolvido", () => {
    // Primeiro, marca como emprestado para garantir que o estado mude
    livro.marcarComoEmprestado();
    expect(livro.disponivel).toBe(false); // Confirma que está emprestado

    // Agora, devolve
    livro.marcarComoDevolvido();
    expect(livro.disponivel).toBe(true);
  });

  // Caso de teste 3: Falha ao criar um livro com ano inválido
  test("Deve lançar um erro ao tentar criar um livro com ano não numérico", () => {
    expect(() => {
      new Livro("Título Válido", "Autor Válido", "ano-invalido");
    }).toThrow("O ano deve ser um número.");
  });
});
