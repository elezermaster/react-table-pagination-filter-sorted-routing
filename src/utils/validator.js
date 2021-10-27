import lodash from 'lodash'

export const validator = (data, config) => {
    const errors = {}
    function validate(
        validateMethod,
        data,
        config,
    ) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                if (typeof data === 'string' || data == null) {
                    statusValidate = (data?.trim() === "" || data?.length === 0 || data === undefined)
                } else if (Array.isArray(data)) {
                    //console.log("data typeof array", data)
                    statusValidate = (data.length === 0)
                } else {
                    //console.log("another data typeof array", data)
                }
                break;
            case "isEmail": {
                const emailRegExp = /^\S+@\S+\.\S+$/g
                statusValidate = !emailRegExp.test(data)
                break;
            }
            case "isPasswordHasCapitalSymbol": {
                const capitalRegExp = /[A-Z]+/g
                statusValidate = !capitalRegExp.test(data)
                break;
            }
            case "isPasswordHasAnyDigit": {
                const digitRegExp = /\d+/g
                statusValidate = !digitRegExp.test(data)
                break;
            }
            case "isPasswordHasMinimalLength": {
                statusValidate = data?.length < config.value
                break;
            }
            case "isEqualToPassword": {
                statusValidate = !(lodash.isEqual(config.compareFrom, config.compareTo))
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod],
            )
            if (error && !errors[fieldName]) { //only the first error message to show
                errors[fieldName] = error
            }
        }
    }
    return errors;
}
