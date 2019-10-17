//let alfabeto = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p.q,r,s.t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,P,Q,R,S,T,U,V,W,X,Y,Z";



window.cipher = {
    encode: (string, offset) => {
    // mensaje redactado a encriptar
        let cifrado = "";
        for (let i = 0; i < string.length; i++) {
            let character = string[i];
            
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let caracterTexto = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    cifrado += String.fromCharCode(caracterTexto);
                    // alert("vamos lucy tu puedes");
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    const caracterTexto = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    cifrado += String.fromCharCode(caracterTexto);
                }
              else {
                cifrado += character;
            }
        }
        return cifrado;
    },
    decode: (string, offset) => {
        // mensaje recibido para desencriptar
        let descifrado = "";

        // inicio recorrido de caracteres
        for (let i = 0; i < string.length; i++) {
            let characterD = string[i];
            // identificacion de espacios vacios
            
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let caracterTexto = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                    descifrado += String.fromCharCode(caracterTexto);
                    // alert("lucy lo estas logrando");
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let caracterTexto = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                    descifrado += String.fromCharCode(caracterTexto);
                }



              else {
                descifrado += characterD;
            }
        }
        //retornar respuesta
        return descifrado;
    }
}


// let a =document.getElementById("msje");
// undefined
// a.value
// "hoila"
// let msjUsuario = a.value;
// undefined
// msjUsuario
// "hoila"