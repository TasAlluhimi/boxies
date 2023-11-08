let cont = document.querySelector("#cont");

for (let i = 0; i < 101; i++) {
    let box = document.createElement("div");
    box.setAttribute("id", "box");
    box.setAttribute("class", "box");

cont.appendChild(box);


let para = document.createElement("p");
para.setAttribute("id", "para");
para.setAttribute("class", "para");
para.textContent = i;
if (i % 2 == 0) {
    box.style.backgroundColor="green"
    box.addEventListener("mouseover", () => {
        para.textContent = "even number"
    })
} else if(i % 2 != 0) {
    box.style.backgroundColor="yellow"
    box.addEventListener("mouseover", () => {
        para.textContent = "odd number"
    })
}

if(isPrime(i)){
    box.style.backgroundColor="red"
    box.addEventListener("mouseover", () => {
        para.textContent = "prime number"
    })
}

box.appendChild(para)
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}



// addEventListener("mouseover")