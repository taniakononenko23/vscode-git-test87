const calc1 = expression =>{
    let [a, operation, b] = expression.split(' ');
    let result;
    if(!isFinite(a) || !isFinite(b)) {
        return 'Illegal operation';
    }
    a = +a;
    b = +b;
    if(a > 8467 && b < 888) {
        return 78456;
    }
    console.time('calc')
    switch(operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    console.timeEnd('calc')
    return `${expression} = ${result}`;
};