document.getElementById("cal").addEventListener("click",function(){
    let oneInput=document.getElementById("one").value;
    let oneDigit=parseInt(oneInput);
    let twoInput=document.getElementById("two").value;
    let twoDigit=parseInt(twoInput);
    let threeInput=document.getElementById("three").value;
    let threeDigit=parseInt(threeInput);
    const totalExpenses=document.getElementById("te");
    const totalDigit=totalExpenses.innerText;
    totalExpenses.innerText=oneDigit+twoDigit+threeDigit;
    let fourInput=document.getElementById("four").value;
    let fourDigit=parseInt(fourInput);
    let totalBalance=fourDigit-totalExpenses.innerText;
    let bl=document.getElementById("bl");
    let blDigit=bl.innerText
    bl.innerText=totalBalance;
})
document.getElementById("sb").addEventListener("click",function(){
    let fiveInput=document.getElementById("save-input").value;
    let fiveDigit=parseInt(fiveInput);
    let fourInput=document.getElementById("four").value;
    let fourDigit=parseInt(fourInput);
    let sa=document.getElementById("sa");
    let saDigit=sa.innerText;
    let bag=fourDigit*fiveDigit/100;
    sa.innerText=bag
    let oneInput=document.getElementById("one").value;
    let oneDigit=parseInt(oneInput);
    let twoInput=document.getElementById("two").value;
    let twoDigit=parseInt(twoInput);
    let threeInput=document.getElementById("three").value;
    let threeDigit=parseInt(threeInput);
    const totalExpenses=document.getElementById("te");
    const totalDigit=totalExpenses.innerText;
    let tt=oneDigit+twoDigit+threeDigit;
    totalExpenses.innerText=tt;
    let rb=document.getElementById("rb");
    let rbDigit=rb.innerText;
    let total=tt+bag;
    rb.innerText=fourDigit-total;

})