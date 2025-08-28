const Usuario = require("../models/Usuario.js");

// Descreve o conjunto de testes para a classe Usuario
describe("Testes do Módulo Usuário", () => {
  // Caso de teste 1: Sucesso ao criar um usuário com dados válidos
  test("Deve criar um usuário com sucesso ao fornecer dados válidos", () => {
    const usuario = new Usuario(
      "João Silva",
      "joao.silva@email.com",
      "senha123"
    );
    // Verifica se o objeto foi criado e se as propriedades estão corretas
    expect(usuario.nome).toBe("João Silva");
    expect(usuario.email).toBe("joao.silva@email.com");
  });

  // Caso de teste 2: Falha ao criar um usuário com e-mail inválido
  test("Deve lançar um erro ao tentar criar um usuário com e-mail inválido", () => {
    // Espera que a criação do usuário com e-mail sem "@" lance um erro
    expect(() => {
      new Usuario("Maria", "maria-sem-email", "senha456");
    }).toThrow("Formato de e-mail inválido.");
  });

  // Caso de teste 3: Falha ao criar um usuário sem um dos campos obrigatórios
  test("Deve lançar um erro se o nome estiver em falta", () => {
    // Espera que a criação do usuário com nome nulo lance um erro
    expect(() => {
      new Usuario(null, "ana@email.com", "senha789");
    }).toThrow("Nome, e-mail e senha são obrigatórios.");
  });
});
