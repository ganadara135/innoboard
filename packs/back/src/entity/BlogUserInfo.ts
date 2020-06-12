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
export class BlogUserInfo extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({unique: true})
  userId: string;

  @Field()
  @Column()
  userPw: string;

  @Field()
  @Column({nullable: true})
  userNick?: string;

  @Field()
  @Column({nullable: true})
  userGender?: string;

  @Field()
  @Column({nullable: true})
  remarks?: string;
}


/*
    blog_cd       VARCHAR(10)     NOT NULL,  -- 블로그 코드
    user_id       VARCHAR(30)     NOT NULL,  -- 사용자 ID
    blog_name     VARCHAR(100)    NULL,      -- 블로그 이름
    user_nick     VARCHAR(30)     NULL,      -- 사용자 별명
    user_name     VARCHAR(30)     NULL,      -- 사용자 이름
    user_gender   VARCHAR(10)     NULL,      -- 성별
    p_first_no    VARCHAR(20)     NULL,      -- 최초등록 번호
    p_first_dt    VARCHAR(10)     NULL,      -- 최초등록 일자
    p_final_no    VARCHAR(20)     NULL,      -- 최종등록 번호
    p_final_dt    VARCHAR(10)     NULL,      -- 최종등록 일자
    m_final_no    VARCHAR(20)     NULL,      -- 마이그레이션 번호
    m_final_dt    VARCHAR(10)     NULL,      -- 마이그레이션 일자
    n_final_no    VARCHAR(20)     NULL,      -- 자연어전처리 번호
    n_final_dt    VARCHAR(10)     NULL,      -- 자연어전처리 일자
    register_dt   VARCHAR(10)     NULL,      -- 사용자등록 일자
    c_state       VARCHAR(10)     NULL,      -- 상태코드 FOR C - 크롤링
    m_state       VARCHAR(10)     NULL,      -- 상태코드 FOR M - 마이그레이션
    n_state       VARCHAR(10)     NULL,      -- 상태코드 FOR N - 자연어전처리
    c_years       VARCHAR(100)    NULL,      -- 작업완료 연도 - 크롤링
    m_years       VARCHAR(100)    NULL,      -- 작업완료 연도 - 마이그레이션
    n_years       VARCHAR(100)    NULL,      -- 작업완료 연도 - 자연어전처리
    remarks       VARCHAR(100)    NULL,      -- 비고
    PRIMARY KEY (blog_cd, user_id)
*/

// Cannot read tslint configuration -
// 'Failed to load /Users/mac/work/innoturn/innoBoard/packs/back/tslint.json:
// Invalid "extends" configuration value - could not require "tslint-config-prettier".
// Review the Node lookup algorithm (https://nodejs.org/api/modules.html#modules_all_together) for the approximate method TSLint uses to find the referenced configuration file.'