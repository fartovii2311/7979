let handler = async (m, { isPrems, conn }) => {

let img = 'https://masterpiecer-images.s3.yandex.net/255b0fa4991211eea818761639a32c7e:upscaled'
let texto = `🌟 𝐌𝐄𝐍𝐔2 🌟
*˚₊·˚₊· ͟͟͞͞➳❥ @+${m.sender.split("@")[0]}*
> ┆ *│* ┊▸ ✦ 
> ┆ *│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*> ┣━━━━━━━━━━━ ┅*
*> ┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*> ┃*       *Создатель бота*
*> ┃*              *Нина*
*> ┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*> ┗━━━━━━━━━━━* 
> ┆ │* ┊▸ ✦ 
> ┆ ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
> ┆ ——————«•»——————
> ┆          ☆::Меню2::☆*
> ┆——————«•»——————
> ┆ *Правила
> ┆ *Ушла
> ┆ *Давай
> ┆ *Время
> ┆ *Как дела
> ┆ *Спать
> ┆ *Друг
> ┆ *Смешно
> ┆ *Сука
> ┆ *Секс
> ┆ *Здравствуйте
> ┆ *Красавица
> ┆ *Музыка
> ┆ *Плов
> ┆ *С днём рождения
> ┆ *Спокойной ночи
> ┆ *Суп
> ┆ *Такси
> ┆ *Тост
> ┆ *Новенький
> ┆ *Пидор
> ┆ *Пофиг
> ┆ *Отвали
> ┆ *Пошол нахуй
> ┆ *Я хочу
> ┆ *Красотка
> ┆ *Козел
> ┆ *Что делать
> ┆ *Дурак
> ┆ *Дура
> ┆ *Группа
> ┆ *Афигеть
> ┆ *Админы
> ┆ *Любит
> ┆ *Что делаешь
> ┆ *Блядина
> ┆ *Ты кто 
> ┆ *Удалю
> ┆ *Еду
> ┆ *Давай знакомиться
> ┆ *Бухаю
> ┆ *Милашки
> ┆ *Хочу парня
> ┆ *Женщина
> ┆ *Ебал
> ┆ *Молодец
> ┆ *Кто откуда
> ┆ *Не правильно
> ┆ *Добро пожаловать
> ┆ *Девочки
> ┆ *Кто ты
> ┆ *Проиграла
> ┆ *Мальчики
> ┆ *Скучно
> ┆ *Люблю
> ┆ *Внимание
> ┆ *Доброй ночи
> ┆ *Где была
> ┆ *Привет
> ┆ *Настроение
> ┆ *Покажи сиськи
> ┆ *Ушла
> ┆ *За что
> ┆ *Ахуеть
> ┆ *Писька
> ┆ *Чем занимаешься
> ┆ *Фото
> ┆ *На работу
> ┆ *Где все
> ┆ *В оморок
> ╰━━━⊰ {vs} ⊱━━━━დ*
──────────────────
⚠️ *Ознакомтесь с правильностью команд*.`
const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}
handler.help = ['menuhot (menu +18)']
handler.tags = ['main']
handler.command = ['меню2'] 
export default handler;
