const utils = {
    request: function (str, fn) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                fn && fn(str)
            }, 1000)
        })
    }
}

export default utils