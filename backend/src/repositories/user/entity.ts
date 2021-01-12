import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, Index } from 'typeorm'

export enum UserRole {
  ADMIN = "admin",
  TEACHER = "teacher",
  STUDENT = "student"
}

@Entity('users')
export default class User {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  userpassword: string

  @Column()
  state: string

  @Column()
  school: string

  @Column()
  bottles: number

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.STUDENT
  })
  role: UserRole

  @Column("simple-array")
  teachers: string[]
}


/* O que é um UUID ?
UUID é um identificador universalmente exclusivo utilizado para identificação de qualquer coisa no mundo da computação. O UUID é um número de 128 bits representado por 32 dígitos hexadecimais, exibidos em cinco grupos separados por hifens, na forma textual8-4-4-4-12 sendo um total de 36 caracteres (32 caracteres alfanuméricos e 4 hifens). Por exemplo:

3d0ca315-aff9–4fc2-be61–3b76b9a2d798

O objetivo dos UUIDs é possibilitar a identificação unica de uma informação em sistemas distribuídos, sem uma coordenação central. Neste contexto a palavra única deve ser tomada com o significado de “praticamente única” uma vez que os identificadores possuam um tamanho finito, é possível para dois itens diferentes compartilhar do mesmo identificador. O tamanho e o processo de geração do identificador necessitam ser selecionados de forma a tornar esta improbabilidade suficientemente na prática.

Existe uma longa discussão se a utilização de IDs incrementais pode ser considerado um vazamento acidental de informação. (Na minha opinião é sim!). Essa questão é abordada com excelência nesse fantástico artigo do Phil Sturgeon.

Normalmente quando criamos uma tabela no banco de dados, adicionamos uma coluna ID (ou qualquer outro nome representativo) como chave primaria sendo auto-increment. Um ID auto-increment é um número inteiro que começa em 1 e é aumentado em +1 sempre que um novo registro é salvo no banco de dados.

O problema dessa abordagem é que esse ID acaba sendo exposto nas URLs das aplicações para identificar um recurso em específico. Isso é bastante comum em APIs Rest.

Vantagens de utilizar UUIDs
Abaixo eu listo algumas vantagens na adoção dos UUIDs:

- Descentralização na criação de identificadores únicos.
Como o UUID segue uma especificação, você pode gera-lo independente do ambiente ou linguagem de programação.

-Facilidade na sincronização de dados.
Se sua aplicação permitir o uso Offline, você pode gerar registros a partir do cliente e armazena-los localmente. Quando sua aplicação ficar online você não terá problemas ao sincronizar os dados com o servidor, uma vez que os UUIDs são descentralizados e únicos.

- Omite a quantidade de registros criados em uma tabela.

- Dificuldade a manipulação da URL.
Aquele esquema de adicionar +1 não funciona com UUID.

Desvantagens de utilizar UUIDs
Sim! isso mesmo… No mundo da computação não existe bala de prata e nem tudo são flores. Abaixo eu cito algumas desvantagens:

- Um pouquinho mais complicado de depurar.
É mais fácil lembrar de um número 56 do que um 3d0ca315-aff9–4fc2-be61–3b76b9a2d798, por exemplo.

- Maior uso de espaço, uma vez que o UUID é 4 vezes maior.
- Menor desempenho quando armazenado como string.
Os UUIDs em sua forma textual são armazenados como campos CHAR (36) no banco de dados. Isso tem um custo de desempenho em tabelas com muitos registros, porque o BD não consegue indexar corretamente esses registros. (Uma boa alternativa é armazena-los como binários.)

*/