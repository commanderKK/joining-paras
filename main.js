
function getPara1()
{
    var inputs= [];
    for(var i=1; i<=6; i++)
        {
     inputs.push(document.getElementById("para_input_box_" + i).value);
        }
    document.getElementById("showPara1").innerHTML = inputs.join(". ")
}

function getPara2()
{
    var inputs1= [];
    for(var i=1; i<=6; i++)
        {
     inputs1.push(document.getElementById("para_input_box_" + i).value);
        }
    document.getElementById("showPara2").innerHTML = inputs1.join(". ")
}