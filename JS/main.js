var countcomment = 0;
document.getElementById("submit").onclick = function(){
    if(document.getElementById("Comment").value==""){
        alert("Please Enter Your Comment");
        return;
    }
    
    const para = document.createElement("p");
    var com = document.getElementById("Comment").value;
    const node = document.createTextNode(com);
    para.appendChild(node);
    var ele = document.getElementsByClassName("container");
    ele[0].appendChild(para);

    countcomment++;
    document.getElementById("counting")
    .innerHTML = "Total Comments: "+countcomment
}