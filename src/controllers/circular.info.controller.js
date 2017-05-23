const getCircularInfoByHour = (size, weekend, timeChoosen) => {
    var circularHorarios = require('./circularHorarios')();
    
    if (weekend === '1') {
        delete circularHorarios.Sábado;
    } else if (weekend === '2') {
        delete circularHorarios['Segunda a Sexta'];
    }

    for (var dayWeek in circularHorarios) {
        for (var shift in circularHorarios[dayWeek]) {
            var hours = circularHorarios[dayWeek];

            if (timeChoosen || timeChoosen !== '') {
                var index = getApproachTimeIndex(hours[shift], timeChoosen);
                hours[shift].splice(0, index);
            }

            shiftCollumnSort(hours, shift, size);
        }
    }

    return circularHorarios;
}

const getApproachTimeIndex = (hours, timeChoosen) => {
    return timeToFloat(hours[hours.length - 1]) <= timeToFloat(timeChoosen) ?

        hours.length :

        hours.findIndex(function (time, index) {
            if (timeToFloat(time) >= timeToFloat(timeChoosen)) {
                return index + 1;
            }
            return 0;
        });
}

const timeToFloat = (time) => {
    return time ? parseFloat(time.toString().replace(':', '.')) : null;
}

const shiftCollumnSort = (object, shift, size) => {
    var newArray = [];
    for (var i = 0, x = object[shift].length; i < x; i += size) {
        newArray.push(object[shift].slice(i, i + size));
    }
    object[shift] = newArray;
}

const CircularCtrl = {};


CircularCtrl.getCircularInfoByHour = getCircularInfoByHour
CircularCtrl.getApproachTimeIndex = getApproachTimeIndex
CircularCtrl.timeToFloat = timeToFloat
CircularCtrl.shiftCollumnSort = shiftCollumnSort

export default CircularCtrl;