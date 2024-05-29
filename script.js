// aynı değişken ile 2 takımın skor arttırmasını yapamadığım için ayrı ayrı yaptım, birisi oluyor birisi olmuyor bende bu şekilde bir çözüm buldum umarım doğru bir kullanımdır :))
let count = 0;
document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count
}
document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count
}
// hocam 0 'dan aşağı inmesini bu yöntem ile engelleyemedim doğrusunu da ödev değerlendirmede yazabilir misiniz?
// function decreaseBtn(){
//     const countLabel =document.getElementById("countLabel");
//     let currentScore = parseInt(countLabel.innerHTML);
//     if(currentScore > 0 ) {
//         countLabel.innerHTML = --currentScore;
//     }
//     else{
//         alert("Maç Skoru 0'dan küçük olamaz")
//     }
// }
// liverpool js kodları
let score = 0;
document.getElementById("decreaseScore").onclick = function () {
    score -= 1;
    document.getElementById("countScore").innerHTML = score
}
document.getElementById("resetScore").onclick = function () {
    score = 0;
    document.getElementById("countScore").innerHTML = score;

}
document.getElementById("increaseScore").onclick = function () {
    score += 1;
    document.getElementById("countScore").innerHTML = score
}