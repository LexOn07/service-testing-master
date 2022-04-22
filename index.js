function testService(events) {
    if(events.length % 2 == 0){
        let obj = {}
        let count = 0
        for(let i = 0; i != events.length; i++){
            if(obj[events[i][0]] != events[i][1]){
                if(typeof obj[events[i][0]] == 'undefined' && events[i][1] == 'out'){
                    return false
                }
                obj[events[i][0]] = events[i][1]
                events[i][1] == 'out' ? count-- : count++  
            }else{
                return false
            }
        }
        if(count === 0){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}



//для отладки без jest
console.log(testService([
    ['Pavel', 'in'],
    ['Vova', 'in'],
    ['Pavel', 'out'],
    ['Dmitriy', 'in'],
    ['Vova', 'out'],
    ['Pavel', 'in'],
    ['Dmitriy', 'out'],
    ['Pavel', 'out'],
]))

module.exports = testService
