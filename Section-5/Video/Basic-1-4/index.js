let quizzes = [
    {
        content: 'How many legs does the dog have?',
        choice_1: 1,
        choice_2: 2,
        choice_3: 3,
        choice_4: 4,
        rightChoice: 4,
    },
    {
        content: 'What does AOT meaning?',
        choice_1: 'Attrack on Titan',
        choice_2: 'Attack on Titan',
        choice_3: 'Angel of Thieves',
        choice_4: 'Ahead of time',
        rightChoice: 2,
    },
    {
        content: 'What does the meaning of C4EJS94?',
        choice_1: 'Code 4E gen JS 94',
        choice_2: 'Code for everyone JS lv94',
        choice_3: 'Code for everyone Javascript gen 94',
        choice_4: 'Copy for every one with Javascript lv94',
        rightChoice: 3,
    },
    {
        content: '95 ^ 2 = ?',
        choice_1: 9025,
        choice_2: 9015,
        choice_3: 8025,
        choice_4: 5015,
        rightChoice: 1,
    },
];
let quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
let answer = Number(prompt(`${quiz.content}\n1. ${quiz.choice_1}\n2. ${quiz.choice_2}\n3. ${quiz.choice_3}\n4. ${quiz.choice_4}`));