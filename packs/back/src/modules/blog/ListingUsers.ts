import { Resolver, Query, } from "type-graphql";
// import bcrypt from "bcryptjs";

import { BlogUserInfo } from "../../entity/BlogUserInfo";
// console.log("chk BlogUserInfo : ", BlogUserInfo);
// import { RegisterInput } from "./register/RegisterInput";
// import { isAuth } from "../middleware/isAuth";
// import { logger } from "../middleware/logger";
// import { sendEmail } from "../utils/sendEmail";
// import { createConfirmationUrl } from "../utils/createConfirmationUrl";



@Resolver()
export class ListingUsersResolver {
  @Query(() => String)
  async hello2() {
    return "Hello World!";
  }


  @Query(() => [BlogUserInfo])
  async getUsers(): Promise<BlogUserInfo[]> {
    const reVal = BlogUserInfo.find();
    console.log("reVal : ", reVal);

    return reVal as any;
  }
}
