



function calcularIdade() {
    let nasc = document.getElementById("anoN").value;
    let data = new Date().getFullYear();
    const idade = data - nasc;
    document.getElementById("msgresp").innerHTML = `a sua idade é ${idade} anos`
}