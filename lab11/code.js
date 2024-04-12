function findGCD() {
    // Получаем значения n и m из полей ввода
    var n = parseInt(document.getElementById('n').value);
    var m = parseInt(document.getElementById('m').value);

    // Вычисляем НОД с использованием алгоритма Евклида
    var gcd = euclideanAlgorithm(n, m);

    // Выводим результат на странице
    document.getElementById('result').textContent = 'НОД(' + n + ', ' + m + ') = ' + gcd;
}

// Реализация алгоритма Евклида
function euclideanAlgorithm(a, b) {
    while (b !== 0) {
        var remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}