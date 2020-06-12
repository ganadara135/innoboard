import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
//   OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
// import { AuthorBook } from "./AuthorBook";

@ObjectType()
@Entity()
export class BlogFileMgr extends BaseEntity {
  @Field(() => ID) 
  @PrimaryGeneratedColumn()
  user_id: number;

  @Field()
  @Column()
  file_name: string;

  @Field()
  @Column()
  remarks: string;


//   @OneToMany(() => AuthorBook, ab => ab.author)
//   bookConnection: Promise<AuthorBook[]>;
}

/*
blog_cd        VARCHAR(10)       NOT NULL,  --  블로그 코드
user_id        VARCHAR(30)       NOT NULL,  --  사용자 ID
post_year      VARCHAR(4)        NOT NULL,  --  포스팅년도
file_name      VARCHAR(30)       NULL,      --  파일이름
mig_state      VARCHAR(4)        NULL,      --  마이그레이션 상태
mig_date       VARCHAR(10)       NULL,      --  마이그레이션 일자 (DATE)
remarks        VARCHAR(100)      NULL,      --  비고
PRIMARY KEY (blog_cd, user_id, post_year)
*/