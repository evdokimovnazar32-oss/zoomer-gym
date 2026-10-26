const EMOJI_3D = {
    fire: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png",
    plate: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Fork%20and%20Knife%20with%20Plate.png",
    bolt: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png",
    biceps: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Flexed%20Biceps.png",
    sleep: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sleeping%20Face.png",
    pill: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Pill.png",
    camera: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png",
    chart: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bar%20Chart.png",
    trophy: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Trophy.png",
    leg: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Body%20parts/Mechanical%20Leg.png",
    arm: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Body%20parts/Mechanical%20Arm.png",
    shield: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shield.png",
    target: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Direct%20Hit.png",
    avocado: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Avocado.png",
    meat: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Cut%20of%20Meat.png"
};

function icon3D(key, size = 34) {
    const url = EMOJI_3D[key] || EMOJI_3D.fire;
    return `<img src="${url}" width="${size}" height="${size}" style="object-fit:contain; display:inline-block; vertical-align:middle; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.4));" alt="">`;
}

const APP_DATA = {
    nutrition: [
        {
            icon: "fire",
            title: "Калории и энергетический баланс",
            what: "Калории — это единица энергии, которую тело получает из еды и тратит на движение, дыхание и тренировки.",
            why: "Похудение возможно только при дефиците калорий (тратишь больше, чем ешь), а рост мышц — при небольшом профиците (+10–15%).",
            remember: "Не урезай калории сильнее чем на 20%, иначе организм начнет сжигать мышцы и замедлит метаболизм."
        },
        {
            icon: "meat",
            title: "Белки (Протеин)",
            what: "Главный строительный материал для мышечных волокон, связок, иммунитета и гормонов.",
            why: "После силовой тренировки в мышцах возникают микротравмы. Без достатка белка они просто не смогут восстановиться и вырасти.",
            remember: "Держи норму 1.6–2.2 г белка на 1 кг веса тела (курица, яйца, творог, рыба, говядина)."
        },
        {
            icon: "avocado",
            title: "Жиры и Углеводы",
            what: "Углеводы дают запасы гликогена (энергию для работы с весами), а жиры отвечают за выработку тестостерона и здоровье суставов.",
            why: "Без углеводов на тренировке быстро наступит слабость, а дефицит жиров обрушит гормональный фон.",
            remember: "Основа рациона — долгие углеводы (рис, гречка, овсянка, паста) и полезные жиры (орехи, рыба, оливковое масло, желтки)."
        }
    ],
    workoutsTheory: [
        {
            icon: "bolt",
            title: "Full Body (Всё тело за тренировку)",
            what: "За одно занятие ты прорабатываешь все крупные мышечные группы по 1 базовому упражнению.",
            remember: "Идеальный выбор для старта и стажа до 6 месяцев: 3 тренировки в неделю через день дают максимальный отклик роста."
        },
        {
            icon: "biceps",
            title: "Split (Раздельная программа)",
            what: "Мышечные группы делятся по дням (например: ПН — Грудь/Трицепс, СР — Спина/Бицепс, ПТ — Ноги/Плечи).",
            remember: "Позволяет дать больший объем нагрузки на конкретную мышцу. Важно соблюдать прогрессию рабочих весов."
        }
    ],
    muscleGroups: [
        { id: "Грудь", subtitle: "Жим лежа, гантели, брусья и кроссовер", icon: "arm" },
        { id: "Спина", subtitle: "Подтягивания, тяги блока и штанги", icon: "shield" },
        { id: "Ноги", subtitle: "Приседания, жим ногами, румынская тяга", icon: "leg" },
        { id: "Плечи", subtitle: "Армейский жим и махи с гантелями", icon: "bolt" },
        { id: "Руки", subtitle: "Подъемы на бицепс и разгибания на трицепс", icon: "biceps" },
        { id: "Пресс", subtitle: "Скручивания, подъемы ног и планка", icon: "target" }
    ],
    exercises: [
        {
            slug: "bench_press",
            name: "Жим штанги лежа",
            muscleGroup: "Грудь",
            equipment: "Штанга, горизонтальная скамья",
            difficulty: "Средняя",
            recommendedSets: 4,
            recommendedReps: "8–10",
            secondaryMuscles: ["Трицепс", "Передняя дельта"],
            steps: [
                "Ляг на скамью так, чтобы гриф находился строго над глазами.",
                "Сведи и опусти лопатки вниз, плотно упрись всей стопой в пол.",
                "Опусти штангу подконтрольно на низ груди (локти под углом ~75° к корпусу).",
                "На выдохе мощно выжми штангу вверх."
            ],
            mistakes: ["Отрыв таза от скамьи", "Отбив штанги от грудной клетки", "Разведение локтей строго в стороны (90°)"]
        },
        {
            slug: "incline_dumbbell",
            name: "Жим гантелей на наклонной скамье",
            muscleGroup: "Грудь",
            equipment: "Гантели, скамья 30°",
            difficulty: "Средняя",
            recommendedSets: 3,
            recommendedReps: "10–12",
            secondaryMuscles: ["Передняя дельта", "Трицепс"],
            steps: [
                "Установи угол наклона спинки скамьи 30 градусов.",
                "На вдохе опусти гантели до уровня верха груди, растягивая грудные мышцы.",
                "На выдохе выжми гантели вверх по дуге, не ударяя их друг о друга."
            ],
            mistakes: ["Слишком высокий угол скамьи (45° и выше забирает нагрузку в плечи)"]
        },
        {
            slug: "pull_ups",
            name: "Подтягивания широким хватом",
            muscleGroup: "Спина",
            equipment: "Турник / Гравитрон",
            difficulty: "Высокая",
            recommendedSets: 4,
            recommendedReps: "6–10",
            secondaryMuscles: ["Бицепс", "Задняя дельта", "Предплечья"],
            steps: [
                "Возьмись за перекладину хватом чуть шире плеч.",
                "Начни движение с опускания лопаток вниз.",
                "Тянись верхом груди к перекладине, направляя локти вниз по бокам корпуса.",
                "Плавно и без рывков опустись вниз."
            ],
            mistakes: ["Раскачка ногами (рывки)", "Тяга за счет сгибания рук без включения лопаток"]
        },
        {
            slug: "barbell_row",
            name: "Тяга штанги в наклоне",
            muscleGroup: "Спина",
            equipment: "Штанга",
            difficulty: "Средняя",
            recommendedSets: 3,
            recommendedReps: "8–12",
            secondaryMuscles: ["Бицепс", "Поясница"],
            steps: [
                "Наклони корпус вперед примерно на 45°, спина идеально прямая, колени чуть согнуты.",
                "Тяни штангу к низу живота, ведя локти вдоль туловища назад.",
                "В верхней точке сожми лопатки на 1 секунду и плавно опусти вес."
            ],
            mistakes: ["Округление поясницы", "Подъем корпуса вверх во время тяги"]
        },
        {
            slug: "squat",
            name: "Приседания со штангой",
            muscleGroup: "Ноги",
            equipment: "Штанга, силовая рама",
            difficulty: "Высокая",
            recommendedSets: 4,
            recommendedReps: "8–10",
            secondaryMuscles: ["Ягодицы", "Мышцы кора"],
            steps: [
                "Положи гриф на трапеции (не на шею), ноги на ширине плеч, носки чуть врозь.",
                "На вдохе отведи таз назад и присядь до параллели бедра с полом.",
                "На выдохе мощно встань, давя всей стопой и пятками в пол."
            ],
            mistakes: ["Завал коленей внутрь", "Отрыв пяток от пола", "Круглая спина"]
        },
        {
            slug: "leg_press",
            name: "Жим ногами в тренажере",
            muscleGroup: "Ноги",
            equipment: "Тренажер для жима ногами",
            difficulty: "Низкая",
            recommendedSets: 3,
            recommendedReps: "10–12",
            secondaryMuscles: ["Ягодицы"],
            steps: [
                "Плотно прижми поясницу и таз к спинке тренажера.",
                "Опусти платформу вниз до угла 90° в коленях.",
                "Выжми платформу вверх, оставляя колени чуть мягкими в верхней точке."
            ],
            mistakes: ["Полное выпрямление (блокировка) коленей под весом", "Отрыв крестца от сиденья"]
        },
        {
            slug: "lateral_raises",
            name: "Махи гантелями в стороны",
            muscleGroup: "Плечи",
            equipment: "Гантели",
            difficulty: "Низкая",
            recommendedSets: 4,
            recommendedReps: "12–15",
            secondaryMuscles: ["Трапеции"],
            steps: [
                "Встань ровно, руки в локтях чуть согнуты и зафиксированы.",
                "Подними гантели через стороны до уровня плеч, ведя движение локтями.",
                "Плавно опусти гантели вниз без броска."
            ],
            mistakes: ["Читинг корпусом", "Слишком тяжелые гантели, включающие трапецию"]
        },
        {
            slug: "bicep_curl",
            name: "Подъем штанги на бицепс",
            muscleGroup: "Руки",
            equipment: "EZ-гриф или гантели",
            difficulty: "Низкая",
            recommendedSets: 3,
            recommendedReps: "10–12",
            secondaryMuscles: ["Предплечья"],
            steps: [
                "Прижми локти к бокам туловища.",
                "На выдохе подними вес за счет усилия бицепса, не выдвигая локти сильно вперед.",
                "Медленно опусти снаряд вниз."
            ],
            mistakes: ["Раскачка спиной для закидывания веса"]
        },
        {
            slug: "plank",
            name: "Скручивания и Планка",
            muscleGroup: "Пресс",
            equipment: "Коврик",
            difficulty: "Низкая",
            recommendedSets: 3,
            recommendedReps: "15–20",
            secondaryMuscles: ["Поперечная мышца живота"],
            steps: [
                "Ляг на спину, согни колени, поясница прижата к полу.",
                "На выдохе скрути грудной отдел к тазу, сжимая пресс.",
                "Плавно вернись обратно, не кладя голову полностью на пол."
            ],
            mistakes: ["Рывки руками за шею", "Подъем прямой спиной за счет сгибателей бедра"]
        }
    ],
    recovery: [
        {
            icon: "sleep",
            title: "Глубокий сон (7–9 часов)",
            what: "Мышцы растут не на тренировке, а во время сна, когда вырабатывается соматотропин (гормон роста) и восстанавливается ЦНС.",
            remember: "Хронический недосып повышает кортизол, разрушает мышцы и тормозит жиросжигание."
        },
        {
            icon: "bolt",
            title: "Дни отдыха и суперкомпенсация",
            what: "Силовая тренировка запускает стимул, но самой мышечной группе нужно от 48 до 72 часов на восстановление и сверхвосстановление.",
            remember: "Тренировки одной и той же мышцы каждый день без отдыха ведут к застою и травмам."
        }
    ],
    supplementsWarning: "Спортпит — это лишь удобное дополнение к обычному рациону (дает не более 5% результата). Главный фундамент — питание, сон и тяжелые тренировки.",
    supplements: [
        { name: "Креатин моногидрат", what: "Насыщает мышцы энергией АТФ, увеличивая силовые показатели и задержку воды внутри мышечной клетки.", importance: "Топ-1 (Доказанная база, 5 г в день)" },
        { name: "Сывороточный протеин (Whey)", what: "Очищенный белок из молока. Помогает быстро закрыть суточную норму белка, когда нет времени готовить.", importance: "Удобная замена перекуса" },
        { name: "Омега-3 и Витамин D3", what: "Поддерживают здоровье связок, суставов, сосудов и иммунной системы при физических нагрузках.", importance: "База для здоровья" }
    ]
};

function generateWorkoutPlan(state) {
    const repsMap = { hypertrophy: "8–12", fatloss: "12–15", strength: "5–6" };
    const setsMap = { hypertrophy: 4, fatloss: 3, strength: 5 };
    const r = repsMap[state.goal] || "8–12";
    const s = setsMap[state.goal] || 3;

    if (state.programType === "FULL BODY") {
        return [
            {
                dayTitle: "Тренировка А (Всё тело — База)",
                items: [
                    { name: "Приседания со штангой", muscle: "Ноги", slug: "squat", sets: s, reps: r },
                    { name: "Жим штанги лежа", muscle: "Грудь", slug: "bench_press", sets: s, reps: r },
                    { name: "Подтягивания широким хватом", muscle: "Спина", slug: "pull_ups", sets: s, reps: r },
                    { name: "Махи гантелями в стороны", muscle: "Плечи", slug: "lateral_raises", sets: 3, reps: "12–15" }
                ]
            },
            {
                dayTitle: "Тренировка Б (Всё тело — Акцент)",
                items: [
                    { name: "Жим ногами в тренажере", muscle: "Ноги", slug: "leg_press", sets: s, reps: r },
                    { name: "Жим гантелей на наклонной", muscle: "Грудь", slug: "incline_dumbbell", sets: s, reps: r },
                    { name: "Тяга штанги в наклоне", muscle: "Спина", slug: "barbell_row", sets: s, reps: r },
                    { name: "Подъем штанги на бицепс", muscle: "Руки", slug: "bicep_curl", sets: 3, reps: "10–12" }
                ]
            }
        ];
    } else {
        return [
            {
                dayTitle: "День 1: Грудь + Плечи",
                items: [
                    { name: "Жим штанги лежа", muscle: "Грудь", slug: "bench_press", sets: s, reps: r },
                    { name: "Жим гантелей на наклонной", muscle: "Грудь", slug: "incline_dumbbell", sets: s, reps: r },
                    { name: "Махи гантелями в стороны", muscle: "Плечи", slug: "lateral_raises", sets: 4, reps: "12–15" }
                ]
            },
            {
                dayTitle: "День 2: Спина + Руки",
                items: [
                    { name: "Подтягивания широким хватом", muscle: "Спина", slug: "pull_ups", sets: s, reps: r },
                    { name: "Тяга штанги в наклоне", muscle: "Спина", slug: "barbell_row", sets: s, reps: r },
                    { name: "Подъем штанги на бицепс", muscle: "Руки", slug: "bicep_curl", sets: 3, reps: "10–12" }
                ]
            },
            {
                dayTitle: "День 3: Ноги + Пресс",
                items: [
                    { name: "Приседания со штангой", muscle: "Ноги", slug: "squat", sets: s, reps: r },
                    { name: "Жим ногами в тренажере", muscle: "Ноги", slug: "leg_press", sets: s, reps: r },
                    { name: "Скручивания и Планка", muscle: "Пресс", slug: "plank", sets: 3, reps: "15–20" }
                ]
            }
        ];
    }
}
