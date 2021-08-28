import {MigrationInterface, QueryRunner} from "typeorm";

export class userPokemonTable1630070232809 implements MigrationInterface {
    name = 'userPokemonTable1630070232809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users-pokemons" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "pokemonId" integer NOT NULL, CONSTRAINT "PK_ddb81361feb10077373a36be630" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users-pokemons"`);
    }

}
