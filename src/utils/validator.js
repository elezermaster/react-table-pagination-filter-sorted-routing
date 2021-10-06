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
                statusValidate = data.trim() === ""
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
                statusValidate = data.length < config.value
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
            if (error && !errors[fieldName]) {
                errors[fieldName] = error
            }
        }
    }
    return errors;
}
