//Substitua as aspas pelo valor desejado

// ax² + bx + c = 0

const a = ""
const b = ""
const c = ""

//Substitua as aspas pelo valor desejado


function Delt() {
    if (typeof a && typeof b && typeof c == "number") {
        let delt = b*b - (4 * a * c )
        return delt
    } else {
        console.log("Números informados não válidos")
    } 

}

let delt = Delt()
let sqrtdelt = Math.sqrt(delt)

function Validation() {
    if (typeof delt == "number") {
        if (delt > 0) {
            console.log(`
                Δ = b² - 4.a.c
                Δ = (${b})² - 4.${a}.${c}
                Δ = ${b*b} - (${4 * a * c})
                Δ = ${b*b - (4 * a * c )}`)
                
            console.log(`
                ( (-b) +- √Δ ) / (2.a)
                ( -(${b}) +- √${delt} ) / (2.${a})
                ( ${-b} +- ${sqrtdelt} ) / (2.${a})

                x¹ = ( ${-b} + ${sqrtdelt} ) / (2.${a})
                x¹ = ${-b + sqrtdelt} / ${2 * a}
                x¹ = ${(-b + sqrtdelt) / (2 * a)}

                x² = ( ${-b} - ${sqrtdelt} ) / (2.${a})
                x² = ${-b - sqrtdelt} / ${2 * a}
                x² = ${(-b - sqrtdelt) / (2 * a)}`)

        } else if (delt == 0) {
            console.log(`
                Δ = b² - 4.a.c
                Δ = (${b})² - 4.${a}.${c}
                Δ = ${b*b} - (${4 * a * c})
                Δ = ${b*b - (4 * a * c )}`)
            
            console.log(`
                ( (-b) +- √Δ ) / (2.a)
                ( -(${b}) +- √${delt} ) / (2.${a})
                ( ${-b} +- ${sqrtdelt} ) / (2.${a})

                x¹ = ( ${-b} + ${sqrtdelt} ) / (2.${a})
                x¹ = ${-b + sqrtdelt} / ${2 * a}
                x¹ = ${(-b + sqrtdelt) / (2 * a)}

                x² = ( ${-b} - ${sqrtdelt} ) / (2.${a})
                x² = ${-b - sqrtdelt} / ${2 * a}
                x² = ${(-b - sqrtdelt) / (2 * a)}`)

        } else {
            console.log("A equação não possui raiz real, delta negativo.")
        }

    } else { 
        //Nothing
    }        
}


Validation()
