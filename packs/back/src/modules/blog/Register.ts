import { Resolver, Query, Mutation, Arg, } from "type-graphql";
// import bcrypt from "bcryptjs";

import { BlogUserInfo } from "../../entity/BlogUserInfo";
import { RegisterInput } from "./register/RegisterInput";
// import { isAuth } from "../middleware/isAuth";
// import { logger } from "../middleware/logger";
// import { sendEmail } from "../utils/sendEmail";
// import { createConfirmationUrl } from "../utils/createConfirmationUrl";

@Resolver()
export class RegisterBlogResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => BlogUserInfo)
  async register(@Arg("data")
  {
    userId,
    userPw,
    userNick
    // {@Arg("userNick",{}) userNick : String}
    // lastName,
    // password
  }: RegisterInput): Promise<BlogUserInfo> {
    // const hashedPassword = await bcrypt.hash(password, 12);

    const user = await BlogUserInfo.create({
      // firstName,
      // lastName,
      userId,
      userPw,
      userNick
    }).save();

    // await sendEmail(email, await createConfirmationUrl(user.id));

    return user;
  }
}
