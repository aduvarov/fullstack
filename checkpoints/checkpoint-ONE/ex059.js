'use strcit';

//ex059:
// Определить, войдет ли в конверт с внутренними размерами a и b мм прямоугольная открытка с размерами с и d мм. Для размещения открытки в конверте необходим зазор в 1 мм с каждой стороны. Необходимо проверить оба варианта размещения открытки.
// Результат boolean

let envelopeLength = 50;
let envelopeWidth = 40;
let postcardLength = 48;
let postcardWidth = 38;

function postcardInEnvelope(envelopeLength, envelopeWidth, postcardLength, postcardWidth) {
    if (envelopeLength - postcardLength >= 2) {
        if (envelopeWidth - postcardWidth >= 2) {
            return true;
        } else {
            return false;
        }
    }
    if (envelopeLength - postcardLength >= 2) {
        if (envelopeWidth - postcardWidth >= 2) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
