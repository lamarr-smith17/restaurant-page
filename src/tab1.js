import Bibi from './bibimbap.jpg';
const cd = document.getElementById('content');
export function comp()
{
    const hed = document.createElement("h1");
    const icon = new Image();
    const pT = document.createElement('p');
    pT.innerText = 'This restaurant has the highest quality ingredients, served locally from the best farmers here in the Asura region.';
    hed.innerText = 'Restaurant of Asura';
    icon.src = Bibi;
    cd.append(hed, icon, pT);
}