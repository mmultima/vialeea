var mmdata = {
animals: [
{
    name: "bear",
    stats: {
        str: 15,
        dex: 15,
        con: 13,
        int: 2,
        wis: 12, 
        cha: 6
    },
    armor: 2, 
    attacks: [
        {
            type: "bite",
            dice: 4,
            amount: 1

        },
        {
            type: "claw",
            dice: 3,
            amount: 1
        },
        {
            type: "claw",
            dice: 3,
            amount: 1
        }
    ],
    speed: 40,
    size: "S",
    advancement: {
        level: 4,
        size: "M",
        armor: 0,
	str: 4,
        dex: -2,
	con: 2,
	attacks: [
            {
                type: "bite",
                dice: 6,
                amount: 1
            },
            {
                type: "claw",
                dice: 4,
                amount: 1
            },
            {
                type: "claw",
                dice: 4,
                amount: 1
            }
        ] 
    }
},
{
    name: "cat, big",
    stats: {
        str: 13,
        dex: 17,
        con: 13,
        int: 2,
        wis: 15,
        cha: 10
    },
    armor: 1,
    attacks: [
        {
            type: "bite",
            dice: 6,
            amount: 1

        },
        {
            type: "claw",
            dice: 4,
            amount: 1
        },
        {
            type: "claw",
            dice: 4,
            amount: 1
        }
    ],
    speed: 40,
    size: "M",
    advancement: {
        level: 7,
        size: "L",
        armor: 2,
        str: 8,
        dex: -2,
        con: 4,
        attacks: [
            {
                type: "bite",
                dice: 8,
                amount: 1
            },
            {
                type: "claw",
                dice: 6,
                amount: 1
            },
            {
                type: "claw",
                dice: 6,
                amount: 1
            }
        ]
    }
},

{
    name: "cat, small",
    stats: {
        str: 12,
        dex: 21,
        con: 13,
        int: 2,
        wis: 12,
        cha: 6
    },
    armor: 1,
    attacks: [
        {
            type: "bite",
            dice: 4,
            amount: 1

        },
        {
            type: "claw",
            dice: 2,
            amount: 1
        },
        {
            type: "claw",
            dice: 2,
            amount: 1
        }
    ],
    speed: 50,
    size: "S",
    advancement: {
        level: 4,
        size: "M",
        armor: 0,
        str: 4,
        dex: -2,
        con: 2,
        attacks: [
            {
                type: "bite",
                dice: 6,
                amount: 1
            },
            {
                type: "claw",
                dice: 3,
                amount: 1
            },
            {
                type: "claw",
                dice: 3,
                amount: 1
            }
        ]
    }
}

]
};
