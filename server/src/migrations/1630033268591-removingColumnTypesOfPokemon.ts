import {MigrationInterface, QueryRunner} from "typeorm";

export class removingColumnTypesOfPokemon1630033268591 implements MigrationInterface {
    name = 'removingColumnTypesOfPokemon1630033268591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "weight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "height" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "baseExp"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "baseExp" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "baseExp"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "baseExp" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "height" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "weight" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "image" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "name" text NOT NULL`);
    }

}
