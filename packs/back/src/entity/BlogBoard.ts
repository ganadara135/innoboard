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
  blog_cd: number;

  @Field()
  @Column()
  user_id: string;

  @Field()
  @Column()
  post_title: string;

  @Field()
  @Column()
  post_text: string;

  @Field()
  @Column()
  remarks: string;
} 

/*
    blog_cd         VARCHAR(10)       NOT NULL,  -- 블로그 코드
    user_id         VARCHAR(30)       NOT NULL,  -- 사용자 ID
    post_no         VARCHAR(30)       NOT NULL,  -- 게시판번호
    post_title      VARCHAR(200)      NULL,      -- 게시판제목
    post_text       TEXT              NULL,      -- 게시판글
    real_date       VARCHAR(20)       NULL,      -- 등록일시
    post_date       VARCHAR(10)       NULL,      -- 등록일자
    post_year       VARCHAR(4)        NULL,      -- 등록년도
    post_month      VARCHAR(2)        NULL,      -- 등록월
    post_hour       VARCHAR(2)        NULL,      -- 등록시간
    post_wday       VARCHAR(2)        NULL,      -- 등록요일
    url_page        VARCHAR(50)       NULL,      -- 게시판URL
    crawl_date      VARCHAR(10)       NULL,      -- 데이터수집 일자
    mgrtn_date      VARCHAR(10)       NULL,      -- 마이그레이션 일자
    preprocess_1    VARCHAR(10)       NULL,      -- 전처리1
    preprocess_2    VARCHAR(10)       NULL,      -- 전처리2
    preprocess_3    VARCHAR(10)       NULL,      -- 전처리3
    category_cd1    VARCHAR(10)       NULL,      -- 카테고리1
    category_cd2    VARCHAR(100)      NULL,      -- 카테고리2
    remarks         VARCHAR(100)      NULL,      -- 비고
    PRIMARY KEY (blog_cd, user_id, post_no)
*/