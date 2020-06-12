interface Error {
    path: string;
    message: string;
};

export const normalizeErrors = (errors: Error[]): any => {
    const errMap: { [key: string]: string } = {};

    // errors.forEach(err => {
    //     errMap[err.path] = err.message;
    // });

    // Objects, {}, in JavaScript does not have the method .map(), it's only for Arrays, []
    Object.keys(errors).forEach( (val, i, arr) => {
        errMap[i] = val;
    });
    return errMap;
}