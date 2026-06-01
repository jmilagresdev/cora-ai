# Cora AI

Cora AI é uma mentora financeira digital para jovens e estudantes. A proposta é transformar organização financeira em conversa simples, acessível e personalizada.

## Problema

Muitos jovens começam a lidar com mesada, bolsa, estágio ou primeiro salário sem entender orçamento, cartão, metas e hábitos de consumo. Bancos mostram números, mas nem sempre explicam decisões.

## Solução

A Cora conversa com o usuário, entende metas pessoais, organiza gastos, explica conceitos financeiros em linguagem simples e cria planos práticos para objetivos como comprar um celular, guardar dinheiro ou controlar a fatura.

## Funcionalidades

- Login e criação de conta
- Sempre começa na tela de login
- Histórico de conversa por usuário
- Tratamento personalizado: "vamos juntas", "vamos juntos" ou "vamos juntes"
- Planejamento lógico de metas
- Cálculo de economia mensal e semanal
- Categorias de gastos editáveis: adicionar, renomear, alterar valor, excluir e marcar como essencial/flexível/opcional
- Campos de dinheiro aceitam valores com vírgula brasileira, como `299,90`
- Área Conta e perfil para atualizar nome, renda mensal e forma de tratamento
- Insights de gastos por categoria
- Recomendações respeitam gastos essenciais como aluguel, luz, água e internet
- Educação financeira simplificada
- Alto contraste
- Resumo em voz alta

## Como executar

Abra o arquivo `index.html` no navegador.

Para uma experiência mais estável, também é possível rodar um servidor local dentro da pasta:

```bash
python -m http.server 4175 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:4175/
```

## Fluxo de apresentação

1. Crie uma conta nova.
2. Informe nome, e-mail, senha, tratamento e renda inicial.
3. No chat, envie: `Quero juntar dinheiro para comprar um celular novo`.
4. Mostre que a Cora pede marca/modelo, valor e prazo.
5. Complete com: `iPhone 13, R$ 2.800, 6 meses`.
6. Mostre o plano financeiro gerado.
7. Em `Insights inteligentes`, adicione categorias reais como `Aluguel`, `Mercado` ou `Academia`.
8. Em `Conta e perfil`, atualize a renda mensal e mostre que os cálculos mudam.
9. Mostre alto contraste e resumo em voz alta.

## Tecnologias

- HTML
- CSS
- JavaScript
- LocalStorage

## Observação técnica

Esta versão é um protótipo funcional front-end. As contas e históricos são salvos no navegador com `localStorage`. Para uma versão comercial, o próximo passo é conectar autenticação segura, banco de dados, criptografia e uma API de IA em backend.


