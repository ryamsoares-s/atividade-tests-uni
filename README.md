# Projeto de Testes para Sistema de Biblioteca

Este projeto contém a implementação de testes unitários e de integração para um sistema simples de biblioteca online, como parte de uma atividade de Teste de Softwarw. 

## Módulos do Sistema

O sistema foi dividido em três módulos principais:

  * **`Usuario.js`**: Responsável pelo cadastro de usuários.
  * **`Livro.js`**: Responsável por gerir os dados dos livros, incluindo o seu estado de disponibilidade.
  * **`EmprestimoService.js`**: Contém a lógica de negócio para orquestrar as operações de empréstimo e devolução, integrando os módulos de Livro e Usuário.

## Tecnologias Utilizadas

  * **Node.js**: Ambiente de execução para o JavaScript.
  * **Jest**: Framework de testes para JavaScript, focada na simplicidade.

## ▶️ Como Executar os Testes

Com o ambiente devidamente configurado, execute o seguinte comando no seu terminal a partir da pasta raiz do projeto (`projeto-biblioteca`):

```bash
npm test
```

### O que acontece a seguir?

  * O `npm` irá executar o script "test" que definimos no `package.json`.
  * O Jest irá procurar automaticamente por todos os ficheiros no projeto que terminem com `.test.js`.
  * Em seguida, ele executará todos os testes definidos nesses ficheiros.
  * Finalmente, será exibido um relatório detalhado no terminal, mostrando quais conjuntos de testes (`suites`) e quais testes individuais passaram ou falharam.

### Resultado Esperado



<img width="295" height="216" alt="image" src="https://github.com/user-attachments/assets/df0fb59f-5c3c-4f21-96c3-182649da2234" />
