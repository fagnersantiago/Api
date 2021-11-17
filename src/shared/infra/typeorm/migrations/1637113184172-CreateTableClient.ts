import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableClient1637113184172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "full_name",
            type: "varchar",
          },

          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "birth_date",
            type: "Date",
          },

          {
            name: "age",
            type: "varchar",
          },
          {
            name: "city_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],

        foreignKeys: [
          {
            name: "FK_City",
            //Referenciando a tabela da chave estrangeira
            referencedTableName: "city",
            //Referenciando a coluna
            referencedColumnNames: ["id"],
            //Referenciando a nome da coluna
            columnNames: ["city_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}
