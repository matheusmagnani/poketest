# Pokedex style app.

# RFs (Requisitos Funcionais)

- [x] -> Deve ser possivel um novo usuário se cadastrar na aplicaçao.
- [x] -> Deve ser possivel que um usuário faça login na aplicaçao.
- [ ] -> Deve ser possivel cadastrar um pokémon buscando pelo nome.
- [ ] -> Deve ser possivel listar os pokémons cadastrados.


# RN (Regras de Regócio)

- [ ] -> Não deve permitir a inserção de pokémons duplicados.
- [x] -> Apenas usuários autenticados podem cadastrar Pokémons.
- [x] -> O usuário deve fornecer um e-mail e uma senha para cadastrar.
- [x] -> O usuário deve fornecer um e-mail e uma senha para fazer login.
- [x] -> O e-mail deve ser único no sistema.
- [ ] -> O objeto salvo de cadastro de Pokémon deve conter: id, nome, altura, peso, habilidades e imagem.



# RNFs (Regras Nao Funcionais)

- [x] -> A senha para cadastro deve ser armazenada de forma segura utilizando hashing.
- [x] -> As rotas de Cadastrar Pokémon e Listar Pokémons devem ser verificadas com um Token JWT
