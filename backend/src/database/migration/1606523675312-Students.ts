import {MigrationInterface, QueryRunner,Table} from "typeorm";

/* 
	25/11/2020 - Author: Weslley Borges dos Santos
	Migration da tabela Students
*/

export class Students1606523675312 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "students",
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
					name: 'state',
					type: 'varchar',
				},
				{
					name: 'school',
					type: 'varchar',
				},
				{
					name: 'bottles',
					type: 'bigint',
					default: 0
				},
				{
					name: 'teachers_id',
					type: 'json'
				}
			]
			// foreignKeys: [
			// 	{
			// 		name: "my_teachers",
			// 		columnNames: ['teachers_id'],
			// 		referencedTableName: 'teachers',
			// 		referencedColumnNames: ['id'],
			// 		onUpdate: 'CASCADE'
			// 	}
			// ]
		}))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('students')
  }

}
