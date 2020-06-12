# 데이터베이스 설정
0.  remove yarn.lock    before update dependencies 
1.  postgres 초기화
    pg_ctl initdb -D postgreDB
2.  postgres 시작 명령어    // owned by user "mac"
    /usr/local/Cellar/postgresql@9.6/9.6.16/bin/pg_ctl -D postgreDB -l logfile start
3.  데이터베이스 생성   참고 https://dbrang.tistory.com/749    https://www.guru99.com/postgresql-create-database.html
    3.1 터미널 접속 :   psql postgres
    3.2 db 생성 : create database typegraphqldb;
    3.3 조회 :  \l   db 리스트
               \d   테이블 리스트


# 가동 절차
1. db 시작
    루트폴더에서 아래 명령어 입력
    pg_ctl -D postgreDB -l logfile start
    1.1 접속
        psql -U mac typegraphqldb(db 명)    or   psql db명
2. redis 시작
    터미널창에서 redis-server  입력
3. backend 시작
    packs/back 이동, yarn start    
4. frontend 시작
    packs/front 이동, yarn start    
# type-graphql-series
Code for: https://www.youtube.com/playlist?list=PLN3n1USn4xlma1bBu3Tloe4NyYn9Ko8Gs

# Installing

1. Clone and install dependecies
```
git clone https://github.com/benawad/type-graphql-series.git
cd type-graphql-series
yarn
```
2. Make sure you have PostgreSQL running on your computer with a database called `typegraphql-example` and a user who has access to that database with the username `postgres` and password `postgres`
* Mac: https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb
* Windows: https://www.guru99.com/download-install-postgresql.html
* Docker: https://www.youtube.com/watch?v=G3gnMSyX-XM
* Linux: you know what you're doing
* How to create a user: https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e

3. Make sure you have Redis running on your computer
* Mac: https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298
* Windows: https://redislabs.com/blog/redis-on-windows-10/
* Linux: you know what you're doing

4. Start the server
```
yarn start
```
To verified it worked, you can go to http://localhost:4000

If you need any help setting this up feel free to message me on Discord: https://discord.gg/Vehs99V
