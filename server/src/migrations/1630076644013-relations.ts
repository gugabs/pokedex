import {MigrationInterface, QueryRunner} from "typeorm";

export class relations1630076644013 implements MigrationInterface {
    name = 'relations1630076644013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."users-pokemons" ADD CONSTRAINT "FK_65220bf057458005cbd75391900" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."users-pokemons" ADD CONSTRAINT "FK_40d3e9f9dfba3a497a74d671e8a" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."users-pokemons" DROP CONSTRAINT "FK_40d3e9f9dfba3a497a74d671e8a"`);
        await queryRunner.query(`ALTER TABLE "public"."users-pokemons" DROP CONSTRAINT "FK_65220bf057458005cbd75391900"`);
        await queryRunner.query(`ALTER TABLE "public"."sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
    }

}
