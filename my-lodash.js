var _lodash = {

    //chunk函数，把数组进行分组
    // @param {array}[arr][需要操作的数组]
    // @param {number}[number][每个子数组里的数据的个数]
    // @return {array}[返回一个数组]
    chunk: function(arr, size = 1) {
        var result = []
        for (var i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size))
        }
        return result
    },
    /**
     * [identity This method returns the first argument it receives.]
     * @param  {*} value [anyvalue]
     * @return {*}       [return value]
     */
    identity: function(value) {
        return value
    },
    //操作一个数组，并移除其中值为false的数据，The values false, null, 0, "", undefined, and NaN are falsey.
    // @param{array}[arr][需要操作的数组]
    // @return{array}[返回一个数组]
    compact: function(arr) {
        var newarr = [false, null, 0, "", undefined, NaN]
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < newarr.length; j++) {
                if (arr[i] == newarr[j] || isNaN(arr[i])) {
                    arr.splice(i, 1)
                }
            }
        }
        return arr
    },
    //concat 把数组串联起来
    //@param{}[任意数组或值]
    //@return{array}[返回数组]
    concat: function(arr) {
        var newarr = []
        for (var m = 0; m < arguments.length; m++) {
            newarr.push(arguments[m])
        }
        for (var i = 0; i < newarr.length; i++) {
            if (typeof(newarr[i]) == "object") {
                var theSonarr = newarr[i]
                newarr.splice(i, 1)
                for (var j = theSonarr.length - 1; j >= 0; j--) {
                    if (i == 0) {
                        newarr.splice(0, 0, theSonarr[j])
                    } else {
                        newarr.splice(i, 0, theSonarr[j])
                    }
                }
            }
        }
        return newarr
    },
    //difference
    //@param{array}[arr][需要过滤的数组]
    //@param{arr}[arr][需要排除的数值]
    //@return{array}[arr][排除后的新数组]
    difference: function(arr, value) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < value.length; j++) {
                if (arr[i] == value[j]) {
                    arr.splice(i, 1)
                }
            }
        }
        return arr
    },
    // differenceBy
    /**
     * [differenceBy description]
     * @return {[type]} [description]
     * @augments {[type]}
     */
    differenceBy: function(arr, value, f) {
        var temArr
        var temValue
        if (typeof(f) == "function") {
            temArr = arr.map(f)
            temValue = value.map(f)
        }
        if (typeof(f) == "string") {
            temArr = arr.map(it => it[f])
            temValue = value.map(it => it[f])
        }
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < value.length; j++) {
                if (temArr[i] == temValue[j]) {
                    arr.splice(i, 1)
                }
            }
        }
        return arr
    },
    differenceWith: function(arr, value, f) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < value.length; j++) {
                if (f(arr[i], value[j]))
                    arr.splice(i, 1)
            }
        }
        return arr
    },
    //drop   将 arr 中的前 n 个元素去掉，然后返回剩余的部分
    //@param{array}[arr][操作的数组]
    //@param{number}[n][去掉的元素个数，默认为1]
    //@return {array}[arr][返回修改后的数组]
    drop: function(arr, n) {
        if (arguments[1] == undefined) {
            var n = 1
        }
        for (var i = 1; i <= n; i++) {
            arr.shift()
        }
        return arr
    },

    //drop   将 arr 中的末尾n 个元素去掉，然后返回剩余的部分
    //@param{array}[arr][操作的数组]
    //@param{number}[n][去掉的元素个数，默认为1]
    //@return {array}[arr][返回修改后的数组]
    dropRight: function(arr, n) {
        if (arguments[1] == undefined) { //设置默认为1
            var n = 1
        }
        for (var i = 1; i <= n; i++) { //从末尾删除，删除n个
            arr.pop()
        }
        return arr
    },
    /**
     * [dropRightWith: Creates a slice of array excluding elements dropped from the end. Elements
     *  are dropped until predicate returns falsey. The predicate is invoked with three
     *  arguments: (value, index, array).]
     * @param  {Array} array  [The array to query]
     * @param  {function} f  [The function invoked per iteration]
     * @return {Array}        [Returns the slice of array]
     */
    dropRightWhile: function(array, f) {

    },
    dropWhile: function(array, f) {
        if (typeof(f) === "string") {
            for (var i = 0; i < array.length; i++) {
                if (array[i][f]) {
                    array.shift()
                } else {
                    return array
                }
            }
        } else if (typeof(f) === "function") {
            for (i = 0; i < array.length; i++) {
                if (f(array[i])) {
                    array.shift()
                } else {
                    return array
                }
            }
        }
    },

    //fill   使用 value 值来填充（也就是替换） arr，从start位置开始, 到end位置结束（但不包含end位置）
    //@param{array}[arr][需要修改的数组]
    //@param{value}[value][填充 arr 元素的值,默认为*]
    //@param{number}[start][[start=0] 起始位置（包含）]
    //@param{number}[end][默认[end=arr.length]结束位置（不含）]
    fill: function(arr, value, start, end) {
        if (arguments[2] == undefined) { //设置起始位置默认为0
            var start = 0
        }
        if (arguments[3] == undefined) { //设置结束位置默认为arr.length
            var end = arr.length
        }
        for (var i = start; i < end; i++) {
            arr[i] = value
        }
        return arr
    },
    //first 获取数组的第一个元素
    first: function(arr) {
        var a = arr[0]
        return a
    },
    //flatten 降维
    //@param{array}[arr][需要操作的数组]
    //@param{boolean}[isDeep][是否递归为一位数组]
    //@return{array}[arr][返回修改后的数组]
    flatten: function(arr) {
        return arr.reduce(function(result, value) {
            return result.concat(value)
        }, [])
    },
    //flattenDeep 相当于flatten(arr,true)
    flattenDeep: function flattenDeep(arr) {
        return arr.reduce(function(result, value) {
            if (Array.isArray(value)) {
                return result.concat(flattenDeep(value))
            } else {
                return result.concat(value)
            }
        }, [])
    },
    /**
     * @param  {array}
     * @return {[arr]}
     */
    flattenDepth: function flattenDepth(arr, depth = 1) {
        if (depth == 0) {
            return arr
        }
        return arr.reduce(function(result, value) {
            if (Array.isArray(value)) {
                return result.concat(flattenDepth(value, depth - 1))
            } else {
                return result.concat(value)
            }
        }, [])
    },
    //initial 删除数组的最后一个元素
    initial: function(arr) {
        var l = arr.length
        arr.pop(arr[l - 1])
        return arr
    },
    //intersection([arrsay])取出各数组中全等的元素
    //@param{arr}[arr][操作的数组]
    //@return{array}[返回共有元素的数组]
    intersection: function(arr) {
        var temp = arr //把arr赋值给一个新的数组，用来操作
        var result = [] //空数组，用来存放形同的元素
        for (var j = 1; j < arguments.length; j++) {
            for (var i = 0; i < temp.length; i++) { //第一个数组分别依次与其他数组进行检查
                for (var k = 0; k < arguments[j].length; k++) {
                    if (temp[i] == arguments[j][k]) { //相同的元素放到新数组里，原数组删除该元素，把数组下标重置
                        result.push(temp[i])
                        temp.splice(i, 1)
                        i--
                        break
                    }
                }
            }
            temp = result //形同的元素为一个数组，作为第一个数组与其他数组进行检查。初始化，进行第二轮检查
            result = []
        }
        return temp
    },
    //last,取出数组的最后一个元素
    last: function(arr) {
        return arr[arr.length - 1]
    },
    //pull移除数组arr中所有和 values 相等的元素
    // @param{arr}[arr][操作的数组]
    // @param{valus}[*][移除的元素]
    // @return{array}[输出修改后的数组]
    pull: function(arr, x) {
        for (var a = 1; a < arguments.length; a++) { //如果移除元素有多个，循环获取需要移除的元素
            var b = arguments[a]
            for (var i = 0; i < arr.length; i++) { //循环删除数组中与移除元素相同的值
                if (arr[i] == b) {
                    arr.splice(i, 1)
                }
            }
        }
        return arr
    },
    /**
     * @param  {array}[arr]
     * @param  {[type]}
     * @return {[type]}
     */
    pullAll: function(arr, values) {
        for (var j = 0; j < values.length; j++) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == values[j]) {
                    arr.splice(i, 1)
                    i--
                }
            }
        }
        return arr
    },
    /**
     * @param  {[array]}
     * @param  {[*]}
     * @return {[array]}
     */
    pullAt: function(arr, indexes) {
        if(Array.isArray(indexes)){
          var remove = [...indexes].sort((a,b) => a - b)
        } else{
          var remove = [indexes]
        }
        var curr = 0
        var removed = []
        for(var i = 0; i < remove.length; i++){
          removed.push(arr[remove[i] - curr])
          arr.splice(remove[i] - curr,1)
          curr++
        }
        return arr
    },
    /**identity 返回第一个参数
     * @param  {*}
     * @return {[*]}返回值为第一个参数
     */
    identity: function(value) {
        return arguments[0]
    },
    // first 返回数组的第一个元素
    first: function(arr) {
        return arr[0]
    },
    /**
     * indexOf   搜索数组中的与value值相同的元素，并返回元素的索引
     * @param  {array}[arr]
     * @param  {*}[value]
     * @param  {number}[fromIndex = 0] 搜索开始的索引，如果为负表示从尾端开始搜索
     * @return {number}返回索引
     */
    indexOf: function(arr, value, fromIndex = 0) {
        if (fromIndex >= 0) {
            for (var i = fromIndex; i < arr.length; i++) {
                if (arr[i] == value) {
                    return i
                }
            }
            return -1
        } else {
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i] == value) {
                    return i
                }
            }
            return -1
        }
    },
    /**lastIndexOf 从右向左遍历数组
     * @param  {[type]}
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    lastIndexOf: function(arr, value, fromIndex) {
        if (fromIndex == undefined) {
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i] == value) {
                    return i
                }
            }
            return -1
        } else {
            for (var i = arr.length - fromIndex; i >= 0; i--) {
                if (arr[i] == value) {
                    return i
                }
            }
            return -1
        }
    },
    /**
     * join Converts all elements in arr into a string separated by separator.
     * @param  {array}[arr]
     * @param  {String}[separator]
     * @return {String}
     */
    join: function(arr, separator = ",") {
        var result = ""
        for (var i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) { //最后一位不加separator
                result += arr[i]
            } else {
                result += arr[i] + separator.toString()
            }
        }
        return result
    },
    /**
     * @param  {array}[arr]
     * @param  {Number}[n]索引，如果为负，则从数组末尾开始
     * @return {*}返回被选中的元素
     */
    nth: function(arr, n = 0) {
        if (n >= 0) {
            return arr[n]
        } else {
            return arr[arr.length + n]
        }
    },
    head: function(arr) {
        return arr[0]
    },
    /**
     * reverse 反向输出给定数组
     * @param  {array}[arr]
     * @return {array}
     */
    reverse: function(arr) {
        var result = []
        for (var i = 0; i < arr.length; i++) {
            result.unshift(arr[i])
        }
        arr = result
        return arr
    },
    /**
     * slice 裁剪数组
     * @param  {array}[arr]
     * @param  {number}[start = 0][起始位置]
     * @param  {[number}[end = array.length]结束位置
     * @return {array}[返回裁剪后的原数组]
     */
    slice: function(arr, start = 0, end = array.length) {
        arr.splice(start, end - start)
        return arr
    },
    /**
     * 取出数组中的前n个元素
     * @param  {array}[arr]
     * @param  {Number}[n]
     * @return {array}
     */
    take: function(arr, n = 1) {
        var result = []
        n > arr.length ? n = arr.length : n
        for (var i = 0; i < n; i++) {
            result.push(arr[i])
        }
        return result
    },
    /**
     * @param  {[type]}
     * @param  {Number}
     * @return {[type]}
     */
    takeRight: function(arr, n = 1) {
        var result = []
        n > arr.length ? n = arr.length : n
        for (var i = arr.length - n; i < arr.length; i++) {
            result.push(arr[i])
        }
        return result
    },
    /**
     * @param  {arrays}
     * @return {array}
     */
    union: function(arr) {
        var result = arr
        for (var i = 1; i < arguments.length; i++) {
            var m = arguments[i] //得到第i个参数
            for (var j = 0; j < m.length; j++) {
                var n = m //创建一个新的变量储存当前m的值
                for (var k = 0; k < result.length; k++) {
                    //每个n的元素与result的每个元素进行比较，
                    //相同则把n中的该元素删除，剩余的则是不同的元素
                    if (n[j] == result[k]) {
                        n.splice(j, 1)
                        j--
                    }
                }
            }
            for (var p = 0; p < n.length; p++) { //把n中与result不同的元素加入result中
                result.push(n[p])
            }
        }
        return result
    },
    /**
     * 给出一个数组，把其中相同的元素删掉，只保留第一次出现的
     * @param  {array}[arr]
     * @return {array}
     */
    uniq: function(arr) {
        var result = arr
        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < i; j++) {
                if (result[i] == result[j]) { //把当前元素与前面所有元素进行对比，如果相同，则删除当前元素
                    result.splice(i, 1)
                    i-- //由于删掉了一个元素，把索引提前
                    break //跳出循环，进行下一个元素的操作
                }
            }
        }
        return result
    },
    /**
     * @param  {arrays}[array]
     * @return {array}[result]
     */
    zip: function(arrs) {
        var result = []
        for (var j = 0; j < arrs.length; j++) {
            result[j] = []
            for (var i = 0; i < arguments.length; i++) {
                result[j].push(arguments[i][j])
            }
        }
        return result
    },
    /**
     * @param  {array}[arr]
     * @return {boject}[result]
     */
    unzip: function(arr) {
        var result = [],
            tmp = []
        for (var i = 0; i < arr[0].length; i++) {
            for (var j = 0; j < arr.length; j++) {
                tmp.push(arr[j][i])
            }
            result.push(tmp)
            tmp = []
        }
        return result
    },

    /**
     * without函数，Creates an array excluding all given values using SameValueZero for equality comparisons.
     * @param  {array}[arr]
     * @param  {*}[n]
     * @return {array}
     */
    without: function(arr, n) {
        var result = arr
        for (var j = 1; j < arguments.length; j++) {
            for (var i = 0; i < result.length; i++) {
                if (arguments[j] == result[i]) {
                    result.splice(i, 1)
                    i--
                }
            }
        }
        return result
    },
    /**把多个数组中没有重复出现过的元素找出来(不改变原数组)
     * @param  {array}[arr]
     * @return {array}
     */
    xor: function(arr) {
        var result = []
        var tmp = {}
        for (var i = 0; i < arguments.length; i++) {
            var curr = arguments[i]
            for (var j = 0; j < curr.length; j++) {
                if (!tmp[curr[j]]) {
                    tmp[curr[j]] = 1
                } else {
                    tmp[curr[j]]++
                }
            }
        }
        for (var key in tmp) {
            if (tmp[key] === 1) {
                result.push(parseInt(key))
            }
        }
        return result
    },
    /**
     * @param  {[type]}
     * @return {[type]}
     */
    fromPairs: function(arr) {
        var result = {}
        for (var i = 0; i < arr.length; i++) {
            result[arr[i][0]] = arr[i][1]
        }
        return result
    },
    //两数相加
    add: function(num1, num2) {
        return num1 + num2
    },
    /**
     * [ceil 按照所给的精度向上取整]
     * @param  {Number} num       [description]
     * @param  {Number} precision [description]
     * @return {Numben}           [description]
     */
    ceil: function(num, precision = 0) {
        var tmp = Math.pow(10, precision)
        return num = Math.ceil(num * tmp) / tmp
    },
    //两个数相除
    divide: function(dividend, divisor) {
        return dividend / divisor
    },
    //向下取整
    floor: function(num, precision = 0) {
        var tmp = Math.pow(10, precision)
        return num = Math.floor(num * tmp) / tmp
    },
    /**
     * [max 求一个数组内的最大值，如果数组为空或假，返回undefined]
     * @param  {Array} array  [The array to iterate over]
     * @return {Number}       [最大值]
     */
    max: function(array) {
        return array.length === 0 ? undefined : Math.max(...array)
    },
    /**
     * [maxBy 与max类似，但是接受第二个参数]
     * @param  {Array} array    [description]
     * @param  {iteratee} iteratee [description]
     * @return {}          [description]
     */
    maxBy: function(array, iteratee) {
        if (typeof(iteratee) === "string") {
            var tmp = iteratee
            iteratee = function(n) {
                return n[tmp]
            }
        }
        return array.length > 0 ? array.reduce((a, b) => iteratee(a) > iteratee(b) ? a : b) : undefined
    },
    //mean: 求平均数
    mean: function(array) {
        return array.reduce((a, b) => a + b) / array.length
    },
    //求平均数
    meanBy: function(array, iteratee) {
        if (typeof(iteratee) === "function") {
            return array.reduce(((a, b) => a + iteratee(b)), 0) / array.length
        } else if (typeof(iteratee) === "string") {
            return array.reduce(((a, b) => a + b[iteratee]), 0) / array.length
        }
    },
    //求最小值
    min: function(array) {
        return array.length == 0 ? undefined : Math.min(...array)
    },
    //求最小值
    minBy: function(array, iteratee) {
        if (typeof(iteratee) === "string") {
            var tmp = iteratee
            iteratee = function(n) {
                return n[tmp]
            }
        }
        return array.length > 0 ? array.reduce((a, b) => iteratee(a) > iteratee(b) ? b : a) : undefined
    },
    //求两数相乘
    multiply: function(num1, num2) {
        return num1 * num2
    },
    //round 按照所给的精度四舍五入
    round: function(num, pricision = 0) {
        var tmp = Math.pow(10, pricision)
        return Math.round(num * tmp) / tmp
    },
    //subtract， 两数相减
    subtract: function(num1, num2) {
        return num1 - num2
    },
    //sum 求数组所有元素之和
    sum: function(array) {
        return array.reduce((a, b) => a + b)
    },
    //sumBy
    sumBy: function(array, iteratee) {
        if (typeof(iteratee) === "function") {
            return array.reduce(((a, b) => a + iteratee(b)), 0)
        } else if (typeof(iteratee) === "string") {
            return array.reduce(((a, b) => a + b[iteratee]), 0)
        }
    },
    //取出数组的除去第一个元素剩下的元素
    tail: function(array) {
        array.shift()
        return array
    },
    //JSON解析器
    parseJson: function parseJson(jsonStr) {
        var i = 0
        var str = jsonStr
        return parseValue()

        function parseValue() {
            debugger;
            if (str[i] === '"') {
                return parseString()
            } else if (str[i] === '[') {
                return parseArray()
            } else if (str[i] === "{") {
                return parseObj()
            } else if (str[i] === "n") {
                return parseNull()
            } else if (str[i] === "t") {
                return parseTrue()
            } else if (str[i] === "f") {
                return parseFalse()
            } else {
                return parseNumber()
            }
        }

        function parseString() {
            var result = ""
            i++
            while (str[i] !== '"') {
                result += str[i++]
            }
            i++
            return result
        }
        //"[1,2,3]"
        function parseArray() {
            i++
            var result = []
            while (str[i] !== "]") {
                result.push(parseValue())
                if (str[i] === ",") {
                    i++
                }
            }
            i++
            return result
        }

        function parseNull() {
            result = str.substr(i, 4)
            if (result === "null") {
                i += 4
                return null
            } else {
                throw new Error("Unexpected char at pos: " + i)
            }
        }

        function parseFalse() {
            result = str.substr(i, 5)
            if (result === "false") {
                i += 5
                return false
            } else {
                throw new Error("Unexpected char at pos: " + i)
            }
        }

        function parseTrue() {
            result = str.substr(i, 4)
            if (result === "true") {
                i += 4
                return true
            } else {
                throw new Error("Unexpected char at pos: " + i)
            }
        }

        function parseNumber() {
            var numStr = ""
            while (str[i] >= 0 && str[i] <= 9) {
                numStr += str[i++]
            }
            return parseFloat(numStr)
        }

        function parseObj() {
            i++
            var result = {}
            var key
            var value
            while (str[i] !== "}") {
                key = parseString()
                i++
                value = parseValue()
                result[key] = value
                if (str[i] === ",") {
                    i++
                }
            }
            i++
            return result
        }
    },
    /**
     * [isRange 看number是否在start和end之间，如果只给了end,start默认为0]
     * @param  {number}  number [description]
     * @param  {number}  start  [description]
     * @param  {number}  end    [description]
     * @return {Boolean}        [description]
     */
    isRange: function(number, start, end) {
        if (end == undefined) {
            end = start
            start = 0
        }
        var curr = Array.from(number, start, end).sort((a, b) => a - b)
        if (curr[0] !== number && curr[2] !== number) {
            return true
        } else {
            return false
        }
    },
    /**
     * [size 给一个数组/对象/字符串，返回一个长度]
     * @param  {Array|Object|String} collection [description]
     * @return {number}                         [description]
     */
    size: function(collection) {
        if (typeof(collection) === "string" || Array.isArray(collection)) {
            return collection.length
        } else {
            var count = 0
            for (var key in collection) {
                count++
            }
            return count
        }
    },
    /**
     * [delay 函数延迟wait后执行]
     * @param  {Function}  fn   [description]
     * @param  {[type]}    wait [description]
     * @param  {...[type]} args [description]
     * @return {[type]}         [description]
     */
    delay: function(fn, wait, ...args){
      setTimeout(function(){
        fn(...args)
      }, wait)
    },
    /**
     * [capitalize 把给出的字符串变为首字母大写]
     * @param  {[string]} str [description]
     * @return {[str]}     [description]
     */
    capitalize: function(str){
      str = str.toLowerCase()
      var result = ""
      for(var i = 0; i < str.length; i++){
        if((str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) || (str[i].charCodeAt() >= 97 && str[i].charCodeAt()<= 120)){
          result+=str[i]
        }
      }
      return result.substring(0, 1).toUpperCase() + result.substring(1)
    },
    /**
     * [camelCase 把给出的字符串变为首字母大写]
     * @param  {[string]} str [description]
     * @return {[string]}     [description]
     */
    camelCase: function(str){
      return str = str.toLowerCase().match(/[a-z]+/g).reduce((sum, curr) => sum+=curr.replace(/^\w/g , s => s.toUpperCase()), "").replace(/^\w/g,s => s.toLowerCase())
    },
    /**
     * [endWith Checks if string ends with the given target string]
     * @param  {[string]} str      [description]
     * @param  {[string]} target   [description]
     * @param  {[number]} position [description]
     * @return {[boolean]}          [description]
     */
    endsWith: function(str, target, position = str.length){
      return str[position - 1] === target ? true : false
    },
    /**
     * [upperFirst 首字符大写]
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    upperFirst: function(str){
      return str[0].toUpperCase() + str.substring(1)
    },
    /**
     * [castArray 如果输入的不是一个数组，就把他们放到一个数组里]
     * @param  {[*]} value [description]
     * @return {[array]}       [description]
     */
    castArray: function(value){
      if(Array.isArray(value)){
        return value
      } else {
        var result = []
        for(var i = 0; i < arguments.length;i++){
          result.push(arguments[i])
        }
        return result
      }
    },
    /**
     * [escape 把字符串中的特殊符号转为HTML实体]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    escape: function(string = ''){
      var obj = {
        '&' : '&amp;',
        '>' : '&gt;',
        '<' : '&lt;',
        "'" : '&apos;' ,
        '"' : '&quot;',
      }
      return string.replace(/[\&\>\<\'\"]/g, it => obj[it])
    },
    /**
     * [escapeRegExp 把所有特殊符号转义]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    escapeRegExp: function(string = ''){
      return string.replace(/[\^\.\*\+\?\(\)\[\]\{\}\|]|\s/g, it => '\\' + it)
    },
    /**
     * [kebabCase 把所给的字符串转为类似'foo-bar'的格式]
     * @param  {String} string [description]
     * @return {[string]}        [description]
     */
    kebabCase: function(string = ''){
      return string = string.match(/[a-z]+|[A-Z][a-z]+|[a-zA-Z]+/g).reduce((sum, curr) => sum += `-${curr.toLowerCase()}`,'').substring(1)
    },
    /**
     * [lowerCase 单词用空格隔开，并转为小写]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    lowerCase: function(string = ''){
      return string = string.match(/[a-z]+|[A-Z][a-z]+|[a-zA-Z]+/g).reduce((sum, curr) => sum += ` ${curr.toLowerCase()}`,'').substring(1)
    },
    /**
     * [lowerFirst 把单词首字母转为小写]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    lowerFirst: function(string = ''){
      return string.replace(/^\w/, it => it.toLowerCase())
    },
    /**
     * [pad 如果一个字符创的长度比length小，就用chars补充到length]
     * @param  {String} string [description]
     * @param  {Number} length [description]
     * @param  {String} chars  [description]
     * @return {[string]}        [description]
     */
    pad: function(string = '', length = 0, chars = ' '){
      lenLeft = Math.floor((length - string.length) / 2)
      lenRight = length - string.length - lenLeft
      var strLeft = '', strRight = ''
      while(lenRight > strRight.length){
        strRight+=chars
        strLeft+=chars
      }
      return strLeft.substr(0, lenLeft) + string + strRight.substr(0, lenRight)
    },
    /**
     * [padEnd 从后边拼chars]
     * @param  {String} string [description]
     * @param  {Number} length [description]
     * @param  {String} chars  [description]
     * @return {[type]}        [description]
     */
    padEnd: function(string = '', length = 0, chars = ' '){
      var lenRight = length - string.length
      var strRight = ''
      while(lenRight > strRight.length){
        strRight += chars
      }
      return string + strRight.substr(0, lenRight)
    },
    /**
     * [padStart description]
     * @param  {String} string [description]
     * @param  {Number} length [description]
     * @param  {String} chars  [description]
     * @return {[type]}        [description]
     */
    padStart: function(string = '', length = 0, chars = ' '){
      var lenLeft = length - string.length
      var strLeft = ''
      while(lenLeft > strLeft.length){
        strLeft += chars
      }
      return strLeft.substr(0, lenLeft) + string
    },
    /**
     * [parseInt description]
     * @param  {[type]} string [description]
     * @param  {Number} radix  [description]
     * @return {[type]}        [description]
     */
    parseInt: function(string, radix = 10){
      return parseInt(string, radix)
    },
    /**
     * [repeat string重复出现n次]
     * @param  {String} string [description]
     * @param  {Number} n      [description]
     * @return {[type]}        [description]
     */
    repeat: function(string = '', n = 1){
      var result = ''
      while(n > 0){
        result += string
        n--
      }
      return result
    },
    /**
     * [replace replace]
     * @param  {String} string      [description]
     * @param  {[type]} pattern     [description]
     * @param  {[type]} replacement [description]
     * @return {[type]}             [description]
     */
    replace: function(string = '', pattern, replacement){
      return string.replace(pattern, replacement)
    },
    /**
     * [snakeCase 把给定的字符串转为foo_bar的形式]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    snakeCase: function(string = ""){
      return string = string.match(/[a-z]+|[A-Z][a-z]+|[a-zA-Z]+/g).reduce((sum, curr) => sum += `_${curr.toLowerCase()}`,'').substring(1)
    },
    /**
     * [split description]
     * @param  {String} string    [description]
     * @param  {[type]} separator [description]
     * @param  {[type]} limit     [description]
     * @return {[type]}           [description]
     */
    split: function(string = '', separator, limit){
      if(limit === undefined){
        return string.split(separator)
      } else{
        var array = string.split(separator)
        array.length = limit
        return array
      }
    },
    /**
     * [startCase description]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    startCase: function(string = ''){
      return string = string.match(/[a-z]+|[A-Z][a-z]+|[a-zA-Z]+/g).reduce((sum, curr) => sum += ` ${curr.replace(/^\w/, s => s.toUpperCase())}`,'').substring(1)
    },
    /**
     * [startsWith 判断字符串在pos位置是否以target开头]
     * @param  {String} string   [description]
     * @param  {[type]} target   [description]
     * @param  {Number} position [description]
     * @return {[type]}          [description]
     */
    startsWith: function(string = '', target, position = 0){
      return string.match(target).index === position
    },
    /**
     * [toLower 全部转为小写]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    toLower: function(string = ''){
      return string.toLowerCase()
    },
    /**
     * [toLower 全部转为大写]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    toUpper: function(string = ''){
      return string.toUpperCase()
    },
    /**
     * [trim 消除string两边的chars]
     * @param  {String} string [description]
     * @param  {String} chars  [description]
     * @return {[type]}        [description]
     */
    trim: function(string = '', chars = ' '){
      return string.replace(/[^a-zA-Z]*$|^[^a-zA-Z]*/g, '')
    },
    /**
     * [trimEnd 清除sting后边的chars]
     * @param  {String} string [description]
     * @param  {String} chars  [description]
     * @return {[type]}        [description]
     */
    trimEnd: function(string = '', chars = ' '){
      return string.replace(/[^a-zA-Z]*$/g, '')
    },
    trimStart: function(string = '', chars = ' '){
      return string.replace(/^[^a-zA-Z]*/g, '')
    },
    /**
     * [unescape 把转义的符号换回]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    unescape: function(string = ''){
      var obj = {
        '&amp;' : '&',
        '&gt;' : '>',
        '&lt;' : '<',
        '&apos;' : "'" ,
        '&quot;' : '"',
      }
      return string.replace(/(&amp;)|(&gt;)|(&lt;)|(&apos;)|(&quot;)/g, it => obj[it])
    },
    /**
     * [upperCase 全字母大写]
     * @param  {String} string [description]
     * @return {[type]}        [description]
     */
    upperCase: function(string = ''){
      return string = string.match(/[a-z]+|[A-Z][a-z]+|[a-zA-Z]+/g).reduce((sum, curr) => sum += ` ${curr.toUpperCase()}`,'').substring(1)
    },
    upperFirst: function(string = ''){
      return string.replace(/^./g, it => it.toUpperCase())
    },
    /**
     * [words 把字符串的单词split出来]
     * @param  {String} string  [description]
     * @param  {RegExp} pattern [description]
     * @return {[type]}         [description]
     */
    words: function(string = '', pattern = /\w+/g){
      return string.match(pattern)
    },
    /**
     * [isArguments 判断value是否为arguments对象]
     * @param  {[*]}  value [description]
     * @return {Boolean}       [description]
     */
    isArguments: function(value){
      return Object.prototype.toString.call(value) == '[object Arguments]'
    },
    /**
     * [isArray 判断一个value是否为数组类型]
     * @param  {[*]}  value [description]
     * @return {Boolean}       [description]
     */
    isArray: function(value){
      return Object.prototype.toString.call(value) == '[object Array]'
    },
    /**
     * [isArrayBuffer 判断一个value是否为ArrayBuffer类型]
     * @param  {[type]}  value [description]
     * @return {Boolean}       [description]
     */
    isArrayBuffer: function(value){
      return value instanceof ArrayBuffer
    },
    /**
     * [isArrayLike description]
     * @return {Boolean} [description]
     */
    isArrayLike: function(){

    },
    isBoolean: function(value){
      return Object.prototype.toString.call(value) == "[object Boolean]"
    },
    isBuffer: function(){
      return  value instanceof Buffer
    },











































}
