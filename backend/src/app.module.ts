import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // Użyj nazwy usługi z pliku docker-compose.yml, np. db
      port: 5432,
      username: 'postgres', // Użyj nazwy użytkownika z docker-compose.yml - domyślny dla obrazu postgres
      password: 'Pass2DB567', // hasło z docker-compose.yml
      database: 'famformdb', // nazwa bazy danych
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
