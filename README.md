################# Cadastro de Médicos ###############

# Marquei com:

- ✔ os itens CONCLUIDOS
- ✘ os itens NÃO CONCLUIDOS

- Desenvolver um sistema que faça a gestão de cadastros de médicos.
O Sistema deve suportar as seguintes operações:
✔ Insert
✔ Update
✔ Select
✘ Soft Delete

-No cadastro do médico devem ser cadastrados os seguintes itens abaixo:
✔ Nome do Médico com no máximo 120 caracteres
✔ CRM somente Números e no formato (00.000.00)
✔ Telefone Fixo
✔ Telefone Celular
✔ CEP Formatado (00000-000)

    ✘ o Ao cadastrar o Cep deve ser feita uma requisição via XHR para
    a api dos correios e retornar todos os dados de endereço do
    cliente.
✔ Especialidade médica (ao mínimo duas especialidades)

Itens importantes:

# Não Concluidas
  ✘ Poder realizar pesquisas por todos os campos do cadastro do médico
inclusive endereço.
  ✘ Utilizar alguma ferramenta de validação (exemplo YUP)
  ✘ Funções Especialistas (Realizam somente uma operação)

# Concluídas
✔ Estar em no padrão REST
✔ Utilizar o Postman ou Insomina (documentação e requisição)
✔ GIT

Utilizei:
✔ Docker
✔ Testes Unitário
✔ Estruturação de Banco de dados PostgreSQL
✔ Tenho Conhecimento em NoSQL
✔ Tenho Conhecimento  Metodologias ágeis


Ferramentas  utilizadas no desenvolvimento:
✔Node.JS

Segui as orientações abaixo:
✔ TypeScript
✔ TypeORM
✔ Express
 ✘ Migrations e Seeds
✔ React

Lista das especialidades  cadastradas no banco de dados:
✔ ALERGOLOGIA
✔ ANGIOLOGIA
✔ BUCO MAXILO
✔ CARDIOLOGIA CLÍNICA
✔ CARDIOLOGIA INFANTIL
✔ CIRURGIA CABEÇA E PESCOÇO
✔ CIRURGIA CARDÍACA
✔ CIRURGIA DE TÓRAX
