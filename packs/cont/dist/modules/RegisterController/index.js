"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors"); // '../../utils/normalizeErrors';
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log("cont values : ", values);
            console.log("values.inputData : ", values.inputData);
            const inputData = { ...values };
            console.log("inputData : ", inputData);
            // console.log("cont ...values : ", values);
            // ...values
            // console.log("props.result : ", this.props.result)
            // console.log("props : ", this.props)
            const { data, errors, context, } = await this.props.mutate({
                variables: { inputData: values }
            });
            console.log('response data : ', data);
            console.log('response errors : ', errors);
            console.log('response context : ', context);
            // if (data && data.register) {
            if (errors) {
                return normalizeErrors_1.normalizeErrors(errors);
            }
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
// const REGISTER_MUTATION = gql`
//     mutation BlogRegister{
//         register(data:{ userId: "eee", userPw: "eee", userNick:"eee"}){
//             id
//             userId
//             userPw
//             userNick  
//         }
//     }
// `;
const REGISTER_MUTATION = graphql_tag_1.default `
    mutation RegisterMutation($inputData: RegisterInput! ){
        register(data: $inputData){
            id
            userId
            userPw
            userNick  
        }
    }
`;
exports.RegisterController = react_apollo_1.graphql(REGISTER_MUTATION)(C);
//# sourceMappingURL=index.js.map