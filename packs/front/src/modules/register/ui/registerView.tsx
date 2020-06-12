import * as React from "react";
import {    Button, Checkbox } from 'antd';
import Icon  from '@ant-design/icons';
import { withFormik,     FormikProps, Field, Form } from 'formik';
// import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/InputField"
import { Link } from "react-router-dom";
import { NormalizedErrorMap,  RegisterMutationVariables} from "@board/cont";
// import {  RegisterMutationVariables} from '../../schemaTypes';

interface FormValues extends RegisterMutationVariables {
    userId: string;
    userPw : string;
    userNick : string;
}
interface Props {
    onFinish: () => void;
    // submit: (values: FormValues) => Promise<NormalizedErrorMap|null>;
    submit: (values: FormValues) => Promise<NormalizedErrorMap|null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {
    
    render() {
      //  const { handleSubmit, errors} = this.props;
      //  console.log("props : ", this.props)
      //  console.log(errors);
    
        return (
          <Form style={{ display: "flex" }}> 
          <div style={{width: 600, margin:'auto'}}>
          {/* <Form onSubmit={this.handleSubmit} className="login-form"> */}
            <Field  
              name="userId"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              }
              placeholder="이메일"
              component={InputField}
            />
            <Field  
              name="userPw"
              prefix={
                <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              placeholder="비밀번호"
              component={InputField}
            />

            <Field  
              name="userNick"
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              placeholder="닉네임"
              component={InputField}
            />
       
            <div>
              {/* <Checkbox>Remember me</Checkbox>
                Forgot password */}
            
            </div>
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Register
              </Button>
            </div>
            <div>
              {/* Or <a href="/login">Login now!</a> */}
              {/* Or <Link to="/login">Login now!</Link> */}
            </div> 
            </div>
          </Form>
         
        );
    }
}

export const RegisterView = withFormik<Props, FormValues>({
  // validationSchema: validUserSchema,
  // validateOnChange : false,
  // validateOnBlur: false,
  mapPropsToValues: () => ({ userId: "", userPw: "", userNick: "" } as any),
  handleSubmit: async (values, {props, setErrors}) => {

      // console.log("values : ", values);
      // console.log("props : ", props);
      const errors = await props.submit(values);
      // console.log("errors : ", errors);
      if(errors){
          // console.log("aaaa")
          setErrors(errors)
      } else {
        // console.log("bbbb")
        props.onFinish();
      }
  }
})(C);

