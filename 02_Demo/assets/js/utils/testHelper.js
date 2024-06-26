export const it = function (description, callback) {
    try {
        callback();
        console.log(`\t✅ ${description}`);
    } catch (error) {
        console.error(`\n\t❌ ${description}`);
        console.error(error);
    }
};

export const assert = function (condition, messageErreur) {
    if (!condition) {
        throw new Error(messageErreur);
    }
};
