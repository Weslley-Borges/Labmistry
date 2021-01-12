import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1610275265828 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
			name: "users",
			columns: [
				{
					name: 'id',
					type: 'varchar',
					isPrimary: true,
					generationStrategy: 'uuid',
				},
				{
					name: 'username',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'email',
					type: 'varchar',
					isUnique: true,
					isNullable: false
				},
				{
					name: 'userpassword',
					type: 'varchar',
					isUnique: true,
					isNullable: false
				},
				{
					name: 'state',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'school',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'bottles',
					type: 'bigint',
					default: 0,
					isNullable: false
				},

				// Depende do tipo de usuário
				{
					name: "role",
					type: "varchar",
				},
				{
					name: 'teachers',
					type: 'json',
				}

			]
		}))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }

}
