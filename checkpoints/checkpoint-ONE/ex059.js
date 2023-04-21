'use strcit';

//ex059:
// Определить, войдет ли в конверт с внутренними размерами a и b мм прямоугольная открытка с размерами с и d мм. Для размещения открытки в конверте необходим зазор в 1 мм с каждой стороны. Необходимо проверить оба варианта размещения открытки.
// Результат boolean

let envelopeLength = 50;
let envelopeWidth = 40;
let postcardLength = 48; //10
let postcardWidth = 38; // 45

function postcardInEnvelope(envelopeLength, envelopeWidth, postcardLength, postcardWidth) {
    envelopeLength -= 2;
    envelopeWidth -= 2;

    if (
        (envelopeLength >= postcardLength && envelopeWidth >= postcardWidth) ||
        (envelopeLength >= postcardWidth && envelopeWidth >= postcardLength)
    ) {
        return true;
    } else {
        return false;
    }
}
