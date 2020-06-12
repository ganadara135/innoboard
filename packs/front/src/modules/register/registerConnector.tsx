import * as React from "react";
import {RegisterController} from '@board/cont';
// 임시조치
// import {RegisterController } from "/Users/mac/work/innoturn/innoBoard/packs/cont/dist/index"

import { RegisterView } from "./ui/registerView";
import { RouteComponentProps } from "react-router-dom";


// container -> view
// container -> connector -> view
// controller -> connector -> view


// export const RegisterConnector = () => <RegisterView/>;

export class RegisterConnector extends React.PureComponent<
    RouteComponentProps<{}>
> {
    onFinish = () => {
        this.props.history.push("/listUsers", {
            message: "현재 등록된 사용자들의 목록을 보여줍니다"
        });
        // this.props.history.push("/m/confirm-email", {
        //     message: "check your email to confirm your account"
        // });
    }

    // dummySubmit = async (values: any) => {
    //     console.log(values);
    //     return null;
    // };

    render() {
        return (
          <RegisterController >
              {({ submit }) => <RegisterView onFinish={this.onFinish} submit={submit} />} 
          </RegisterController>
        );
    }
}