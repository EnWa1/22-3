// задание №1
var tvSeries = {
    name: '"Сверхъестественное"',
    releaseDate: '13 сентября 2005',
    mainActor: 'Дженсен Эклс, Джаред Падалеки',
    episodes: 327,
    facts: {
        duration: 'Сериал выходил целых 15 лет!',
        colt:'Латинская надпись на стволе пистолета Colt гласит «Non timebo mala», что означает «Я не буду бояться зла».',
        question:'А какой ваш любимый сериал ?'
    }
}
console.log('Сериал ' + tvSeries.name + ', был выпущен ' + tvSeries.releaseDate + ' года. В главных ролях ' + tvSeries.mainActor + '. В ' + tvSeries.name + ' ' + tvSeries.episodes + ' эпизода. ' + tvSeries.facts.duration + ' ' + tvSeries.facts.colt + ' ' + tvSeries.facts.question)

// задание №2
var day = 'monday'
switch (day){
    case 'monday':
    case 'Monday':
        console.log('Понедельник')
        break;
    case 'tuesday':
    case 'Tuesday':
        console.log('Вторник')
        break;
    case 'wednesday':
    case 'Wednesday':
        console.log('Среда') //отсылка на Уэнсдей ?
        break;
    case 'thursday':
    case 'Thursday':
        console.log('Четверг')
        break;
    case 'friday':
    case 'Friday':
        console.log('Пятница')
        break;
    case 'saturday':
    case 'Saturday':
        console.log('Суботта')
        break;
    case 'sunday':
    case 'Sunday':
        console.log('Воскресенье')
        break;
    default:
        console.log('Неправильный ввод, попробуйте ещё раз')
}