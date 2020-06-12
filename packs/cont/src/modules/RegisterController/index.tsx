import * as React from 'react';
import {graphql, ChildMutateProps} from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables, } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';  // '../../utils/normalizeErrors';
import { NormalizedErrorMap } from  '../../types/NormalizedErrorMap'  // '../../types/NormalizedErrorMap';

interface Props {
    children: 
        (data: {submit: (values: RegisterMutationVariables) => Promise<NormalizedErrorMap | null>})
     => JSX.Element | null;
}

class C extends React.PureComponent<
 ChildMutateProps<Props, any, RegisterMutationVariables>
> {

    submit = async (values: RegisterMutationVariables) => {
        console.log("cont values : ", values);
        console.log("values.inputData : ", values.inputData);
        const inputData = {...values}
        console.log("inputData : ", inputData)
        // console.log("cont ...values : ", values);
        // ...values
        // console.log("props.result : ", this.props.result)
        // console.log("props : ", this.props)
        const { data, errors, context, } = await this.props.mutate({
            variables: {inputData: values} as any
        })

        console.log('response data : ', data);
        console.log('response errors : ', errors);
        console.log('response context : ', context);

        // if (data && data.register) {
        if(errors){
            return normalizeErrors(errors as any);
        }
        return null;
    
    };

    render() {
        return this.props.children({ submit: this.submit });
    }
}


const REGISTER_MUTATION = gql`
    mutation RegisterMutation($inputData: RegisterInput! ){
        register(data: $inputData){
            id
            userId
            userPw
            userNick  
        }
    }
`;

export const RegisterController = graphql<
    Props,
    RegisterMutation,
    RegisterMutationVariables
>(REGISTER_MUTATION)(C);