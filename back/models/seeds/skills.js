const Skill = require('../skill');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HeroCoder', { useNewUrlParser: true });


const skills = [{
    title: "Расенган",
    opisanie: "Мана фокусируется в ладони пользователя, с её же помощью формирует из него сферу, внутри которой мана вращается с огромной скоростью, что даёт такой сильный эффект при ударе. ",
    img:'back/models/seeds/img/perks/6.png',
    params: {
        damage: 100,
        chance: 0.2,
        xp: 140
    }
},
{
    title: "Чидори",
    opisanie: "Осуществляется через сосредоточивание большого количества маны в ладони руки, пока та не становиться видна. Доводя до лимита собственное тело, тот, кто использует это умение, всё с большей скоростью сгущает всё больше маны, которая становиться всё мощнее и становися оружием пробивающим любую преграду.",
    img:'back/models/seeds/img/perks/2.png',
    params: {
        damage: 120,
        chance: 0.15,
        xp: 100
    }
},
{
    title: "Огненная длань",
    opisanie: "Герой выполнет призыв огненной птицы, которая атакует соперника и наносит тому урон",
    img:'back/models/seeds/img/perks/3.png',
    params: {
        damage: 50,
        chance: 0.60,
        xp: 170
    }
},
{
    title: "Призыв леденяного элементаря",
    opisanie: "Герой призывает на свою сторону леденяного элементаря для одной атаки, имеющего огромный урон",
    img:'back/models/seeds/img/perks/9.png',
    params: {
        damage: 300,
        chance: 0.1,
        xp: 220
    }
},
{
    title: "Лечение",
    opisanie: "Герой может немного восстановить свое здоровье прямо посреди битвы",
    img:'back/models/seeds/img/perks/1.png',
    params: {
        health: 70,
        chance: 0.2,
        xp: 250
    }
},
]


Skill.insertMany(skills).then(() => {
    mongoose.connection.close();
}); 