import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurveys1614883735692 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "surveys",
                columns: [
                {
                    name: 'id',
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name:"title",
                    type:"varchar"
                },
                {
                    name:"description",
                    type:"varchar",
                },
                {
                    name:"create_at",
                    type:"varchar",
                },

            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys");
    }

}
