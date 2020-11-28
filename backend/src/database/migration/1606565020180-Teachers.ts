import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Teachers1606565020180 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "teachers",
			columns: [
				{
					name: 'id',
					type: 'bigint',
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',
				},
				{
					name: 'username',
					type: 'varchar',
				},
				{
					name: 'biography',
					type: 'text',
				},
				{
					name: 'email',
					type: 'varchar',
					isUnique: true,
				},
				{
					name: 'userpassword',
					type: 'varchar',
					isUnique: true,
				},
				{
					name: 'schools_schedule',
					type: 'json',
				},
				{
					name: 'bottles',
					type: 'bigint',
					default: 0
				},
				{
					name: 'my_articles',
					type: 'json'
				}
			]
		}))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('teachers')
  }

}
