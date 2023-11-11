document.getElementById('submit-code').addEventListener('click', checkCode);

async function checkCode(event) {
    event.preventDefault();

    const codeValueFromInput = document.getElementById('input-code').value;

    const isCodeRight = (codeValueFromInput === 
            (localStorage.getItem('code-part1') + getCookie('code-part2')).toString() + 
            (await getNumberOfPlanetsInStarWars() - Math.log2(4)))
            && window.scrollY > 500 
            && document.getElementById('check1').checked === false
            && document.getElementById('check2').checked === true;


    if(isCodeRight) {
        showCongratulations();
    }
    else {
        alert('wrong')
    }

    function showCongratulations() {
        document.getElementById('accepted-image').removeAttribute('hidden');
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

async function getNumberOfPlanetsInStarWars() {
    return (await fetch('https://swapi.dev/api/planets')).json().then(data => data.count);
}
