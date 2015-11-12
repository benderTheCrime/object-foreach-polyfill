
// Object forEach will never be defined

let forEachOwnProperty = function(fn) {
        if (typeof fn !== 'function' && !fn.constructor.name) {
            throw new TypeError('Argument is not a function');
        }

        for (let key in this) {
            let value = this[ key ],
                yields = fn.call(null, value, key);

            if (yields === false) {
                break;
            }
        }
    },
    proto = Object.prototype;

proto.forEach || proto.forEach = forEachOwnProperty;
export { forEachOwnProperty as forEach };