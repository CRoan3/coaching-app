
const optionMapping = {
    tsOptionMap(ts) {
        switch (ts) {
            case "Beginner (<1 year)":
                return 1;
            case "Intermediate (1-3 years)":
                return 2;
            case "Advanced (>3 years)":
                return 3;
            default:
                return null; // Handle unexpected values
        }
    },
    genOptionMap(gender) {
        switch (gender) {
            case "Male":
                return 1;
            case "Female":
                return 2;
            case "Non-binary":
                return 3;
            default:
                return null; // Handle unexpected values
        }
    },
};

module.exports = optionMapping;