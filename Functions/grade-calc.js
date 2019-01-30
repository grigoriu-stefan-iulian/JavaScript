const studentScore = (score, maxScore = 20) => {
    if (typeof score !== 'number' || typeof maxScore !== 'number') {
        throw Error('Grade and/or maxScore must be a number')
    }

    const grade = score / maxScore * 100;
    let gradeLetter;
    if (grade >= 90 && grade <= 100) {
        gradeLetter = 'A'
    } else if (grade >= 80) {
        gradeLetter = 'B'
    } else if (grade >= 70) {
        gradeLetter = 'C'
    } else if (grade >= 60) {
        gradeLetter = 'D'
    } else if (grade >= 0) {
        gradeLetter = 'F'
    }

    return `You got a ${gradeLetter} (${grade}%)!`
}

try {
    const result = studentScore(18);
    console.log(result)
} catch (e) {
    console.log(e.message) // e.message gets access to the message in the Error constructor function
}
