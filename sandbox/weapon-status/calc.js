function calcAtk(rarelity, base, enhanced) {
    let atk;
    let first_digit = enhanced%10;
    
    if (rarelity == 6) {
            if (enhanced < 10) {
                atk = base + Math.round(first_digit*1)
            }
            else if (enhanced < 20) {
                atk = base + 10 + Math.round(first_digit*1.5)
            }
            else if (enhanced < 30) {
                atk = base + 25 + Math.round(first_digit*3)
            }
            else if (enhanced < 40) {
                atk = base + 55 + Math.round(first_digit*3)
            }
            else if (enhanced < 50) {
                atk = base + 85 + Math.round(first_digit*4)
            }
            else if (enhanced < 60) {
                atk = base + 125 + Math.round(first_digit*5.8)
            }
            else if (enhanced < 70) {
                atk = base + 183 + Math.round(first_digit*0)
            }
    }

    if (rarelity == 7) {
        if (enhanced < 10) {
            atk = base + Math.round(first_digit*3)
        }
        else if (enhanced < 20) {
            atk = base + 30 + Math.round(first_digit*3)
        }
        else if (enhanced < 30) {
            atk = base + 60 + Math.round(first_digit*3)
        }
        else if (enhanced < 40) {
            atk = base + 90 + Math.round(first_digit*4.6)
        }
        else if (enhanced < 50) {
            atk = base + 136 + Math.round(first_digit*5)
        }
        else if (enhanced < 60) {
            atk = base + 186 + Math.round(first_digit*4)
        }
        else if (enhanced < 70) {
            atk = base + 226 + Math.round(first_digit*0)
        }
    }

    if (rarelity == 8) {
        if (enhanced < 10) {
            atk = base + Math.round(first_digit*3)
        }
        else if (enhanced < 20) {
            atk = base + 30 + Math.round(first_digit*3)
        }
        else if (enhanced < 30) {
            atk = base + 60 + Math.round(first_digit*3)
        }
        else if (enhanced < 40) {
            atk = base + 90 + Math.round(first_digit*3.5)
        }
        else if (enhanced < 50) {
            atk = base + 125 + Math.round(first_digit*4)
        }
        else if (enhanced < 60) {
            atk = base + 165 + Math.round(first_digit*0)
        }
        else if (enhanced < 70) {
            atk = base + 226 + Math.round(first_digit*0)
        }
    }

    return atk
}
