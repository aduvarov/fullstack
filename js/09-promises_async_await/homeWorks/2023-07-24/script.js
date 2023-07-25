'use strict';

let num1 = document.querySelector('.number1');
let num2 = document.querySelector('.number2');
let num3 = document.querySelector('.number3');
let num4 = document.querySelector('.number4');
let plus1 = document.querySelector('.plus1');
let minus1 = document.querySelector('.minus1');

plus1.addEventListener('click', () => {
    if (num1.innerHTML < 9) {
        num1.innerHTML = +num1.innerHTML + 1;
    } else {
        if (num2.innerHTML < 9) {
            num2.innerHTML++;
            num1.innerHTML = 0;
        } else {
            if (num3.innerHTML < 9) {
                num3.innerHTML++;
                num2.innerHTML = 0;
                num1.innerHTML = 0;
            } else {
                if (num4.innerHTML < 9) {
                    num4.innerHTML++;
                    num3.innerHTML = 0;
                    num2.innerHTML = 0;
                    num1.innerHTML = 0;
                } else {
                }
            }
        }
    }
});
minus1.addEventListener('click', () => {
    if (num1.innerHTML > 0) {
        num1.innerHTML = +num1.innerHTML - 1;
    } else {
        if (num2.innerHTML > 0) {
            if (num1.innerHTML > 0) {
                num1.innerHTML = +num1.innerHTML - 1;
            } else {
                num2.innerHTML--;
            }
            num1.innerHTML = 9;
        } else {
            if (num1.innerHTML > 0) {
                num1.innerHTML = +num1.innerHTML - 1;
            } else if (num2.innerHTML > 0) {
                num2.innerHTML = +num2.innerHTML - 1;
            } else {
                if (num3.innerHTML > 0) {
                    num3.innerHTML--;
                    num2.innerHTML = 9;
                    num1.innerHTML = 9;
                } else {
                    if (num1.innerHTML > 0) {
                        num1.innerHTML = +num1.innerHTML - 1;
                    } else if (num2.innerHTML > 0) {
                        num2.innerHTML = +num2.innerHTML - 1;
                    } else if (num3.innerHTML > 0) {
                        num3.innerHTML = +num3.innerHTML - 1;
                    } else if (num4.innerHTML > 0) {
                        num4.innerHTML--;
                        num3.innerHTML = 9;
                        num2.innerHTML = 9;
                        num1.innerHTML = 9;
                    }
                }
            }
        }
    }
});
let numb1 = document.querySelector('.num1');
let numb2 = document.querySelector('.num2');
let numb3 = document.querySelector('.num3');
let numb4 = document.querySelector('.num4');
let numb5 = document.querySelector('.num5');
let numb6 = document.querySelector('.num6');
let numb7 = document.querySelector('.num7');
let numb8 = document.querySelector('.num8');
let plus2 = document.querySelector('.plus2');
let minus2 = document.querySelector('.minus2');

plus2.addEventListener('click', () => {
    if (numb1.innerHTML < 1) {
        numb1.innerHTML = +numb1.innerHTML + 1;
    } else {
        if (numb2.innerHTML < 1) {
            numb2.innerHTML++;
            numb1.innerHTML = 0;
        } else {
            if (numb3.innerHTML < 1) {
                numb3.innerHTML++;
                numb2.innerHTML = 0;
                numb1.innerHTML = 0;
            } else {
                if (numb4.innerHTML < 1) {
                    numb4.innerHTML++;
                    numb3.innerHTML = 0;
                    numb2.innerHTML = 0;
                    numb1.innerHTML = 0;
                } else {
                    if (numb5.innerHTML < 1) {
                        numb5.innerHTML++;
                        numb4.innerHTML = 0;
                        numb3.innerHTML = 0;
                        numb2.innerHTML = 0;
                        numb1.innerHTML = 0;
                    } else {
                        if (numb6.innerHTML < 1) {
                            numb6.innerHTML++;
                            numb5.innerHTML = 0;
                            numb4.innerHTML = 0;
                            numb3.innerHTML = 0;
                            numb2.innerHTML = 0;
                            numb1.innerHTML = 0;
                        } else {
                            if (numb7.innerHTML < 1) {
                                numb7.innerHTML++;
                                numb6.innerHTML = 0;
                                numb5.innerHTML = 0;
                                numb4.innerHTML = 0;
                                numb3.innerHTML = 0;
                                numb2.innerHTML = 0;
                                numb1.innerHTML = 0;
                            } else {
                                if (numb8.innerHTML < 1) {
                                    numb8.innerHTML++;
                                    numb7.innerHTML = 0;
                                    numb6.innerHTML = 0;
                                    numb5.innerHTML = 0;
                                    numb4.innerHTML = 0;
                                    numb3.innerHTML = 0;
                                    numb2.innerHTML = 0;
                                    numb1.innerHTML = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});

minus2.addEventListener('click', () => {
    if (numb1.innerHTML > 0) {
        numb1.innerHTML = +numb1.innerHTML - 1;
    } else {
        if (numb2.innerHTML > 0) {
            if (numb1.innerHTML > 0) {
                numb1.innerHTML = +numb1.innerHTML - 1;
            } else {
                numb2.innerHTML--;
                numb1.innerHTML = 1;
            }
        } else {
            if (numb1.innerHTML > 0) {
                numb1.innerHTML = +numb1.innerHTML - 1;
            } else if (num2.innerHTML > 0) {
                numb2.innerHTML = +numb2.innerHTML - 1;
            } else {
                if (numb3.innerHTML > 0) {
                    numb3.innerHTML--;
                    numb2.innerHTML = 1;
                    numb1.innerHTML = 1;
                } else {
                    if (numb1.innerHTML > 0) {
                        numb1.innerHTML = +numb1.innerHTML - 1;
                    } else if (numb2.innerHTML > 0) {
                        numb2.innerHTML = +numb2.innerHTML - 1;
                    } else if (numb3.innerHTML > 0) {
                        numb3.innerHTML = +numb3.innerHTML - 1;
                    } else if (numb4.innerHTML > 0) {
                        numb4.innerHTML--;
                        numb3.innerHTML = 1;
                        numb2.innerHTML = 1;
                        numb1.innerHTML = 1;
                    } else {
                        if (numb5.innerHTML > 0) {
                            numb5.innerHTML--;
                            numb4.innerHTML = 1;
                            numb3.innerHTML = 1;
                            numb2.innerHTML = 1;
                            numb1.innerHTML = 1;
                        } else {
                            if (numb1.innerHTML > 0) {
                                numb1.innerHTML = +numb1.innerHTML - 1;
                            } else if (numb2.innerHTML > 0) {
                                numb2.innerHTML = +numb2.innerHTML - 1;
                            } else if (numb3.innerHTML > 0) {
                                numb3.innerHTML = +numb3.innerHTML - 1;
                            } else if (numb4.innerHTML > 0) {
                                numb4.innerHTML = +numb4.innerHTML - 1;
                            } else if (numb5.innerHTML > 0) {
                                numb5.innerHTML--;
                                numb4.innerHTML = 1;
                                numb3.innerHTML = 1;
                                numb2.innerHTML = 1;
                                numb1.innerHTML = 1;
                            } else {
                                if (numb6.innerHTML > 0) {
                                    numb6.innerHTML--;
                                    numb5.innerHTML = 1;
                                    numb4.innerHTML = 1;
                                    numb3.innerHTML = 1;
                                    numb2.innerHTML = 1;
                                    numb1.innerHTML = 1;
                                } else {
                                    if (numb1.innerHTML > 0) {
                                        numb1.innerHTML = +numb1.innerHTML - 1;
                                    } else if (numb2.innerHTML > 0) {
                                        numb2.innerHTML = +numb2.innerHTML - 1;
                                    } else if (numb3.innerHTML > 0) {
                                        numb3.innerHTML = +numb3.innerHTML - 1;
                                    } else if (numb4.innerHTML > 0) {
                                        numb4.innerHTML = +numb4.innerHTML - 1;
                                    } else if (numb5.innerHTML > 0) {
                                        numb5.innerHTML = +numb5.innerHTML - 1;
                                    } else if (numb6.innerHTML > 0) {
                                        numb6.innerHTML--;
                                        numb5.innerHTML = 1;
                                        numb4.innerHTML = 1;
                                        numb3.innerHTML = 1;
                                        numb2.innerHTML = 1;
                                        numb1.innerHTML = 1;
                                    } else {
                                        if (numb7.innerHTML > 0) {
                                            numb7.innerHTML--;
                                            numb6.innerHTML = 1;
                                            numb5.innerHTML = 1;
                                            numb4.innerHTML = 1;
                                            numb3.innerHTML = 1;
                                            numb2.innerHTML = 1;
                                            numb1.innerHTML = 1;
                                        } else {
                                            if (numb1.innerHTML > 0) {
                                                numb1.innerHTML = +numb1.innerHTML - 1;
                                            } else if (numb2.innerHTML > 0) {
                                                numb2.innerHTML = +numb2.innerHTML - 1;
                                            } else if (numb3.innerHTML > 0) {
                                                numb3.innerHTML = +numb3.innerHTML - 1;
                                            } else if (numb4.innerHTML > 0) {
                                                numb4.innerHTML = +numb4.innerHTML - 1;
                                            } else if (numb5.innerHTML > 0) {
                                                numb5.innerHTML = +numb5.innerHTML - 1;
                                            } else if (numb6.innerHTML > 0) {
                                                numb6.innerHTML = +numb6.innerHTML - 1;
                                            } else if (numb7.innerHTML > 0) {
                                                numb7.innerHTML--;
                                                numb6.innerHTML = 1;
                                                numb5.innerHTML = 1;
                                                numb4.innerHTML = 1;
                                                numb3.innerHTML = 1;
                                                numb2.innerHTML = 1;
                                                numb1.innerHTML = 1;
                                            } else {
                                                if (numb8.innerHTML > 0) {
                                                    numb8.innerHTML--;
                                                    numb7.innerHTML = 1;
                                                    numb6.innerHTML = 1;
                                                    numb5.innerHTML = 1;
                                                    numb4.innerHTML = 1;
                                                    numb3.innerHTML = 1;
                                                    numb2.innerHTML = 1;
                                                    numb1.innerHTML = 1;
                                                } else {
                                                    if (numb1.innerHTML > 0) {
                                                        numb1.innerHTML = +numb1.innerHTML - 1;
                                                    } else if (numb2.innerHTML > 0) {
                                                        numb2.innerHTML = +numb2.innerHTML - 1;
                                                    } else if (numb3.innerHTML > 0) {
                                                        numb3.innerHTML = +numb3.innerHTML - 1;
                                                    } else if (numb4.innerHTML > 0) {
                                                        numb4.innerHTML = +numb4.innerHTML - 1;
                                                    } else if (numb5.innerHTML > 0) {
                                                        numb5.innerHTML = +numb5.innerHTML - 1;
                                                    } else if (numb6.innerHTML > 0) {
                                                        numb6.innerHTML = +numb6.innerHTML - 1;
                                                    } else if (numb7.innerHTML > 0) {
                                                        numb7.innerHTML = +numb7.innerHTML - 1;
                                                    } else if (numb8.innerHTML > 0) {
                                                        numb8.innerHTML--;
                                                        numb7.innerHTML = 1;
                                                        numb6.innerHTML = 1;
                                                        numb5.innerHTML = 1;
                                                        numb4.innerHTML = 1;
                                                        numb3.innerHTML = 1;
                                                        numb2.innerHTML = 1;
                                                        numb1.innerHTML = 1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
