var f_members=[
"Family Member 2: Samanvi Vuppalapati",
"Family Member 3: Kalyan Vuppalapati",
"Family Member 4: Shireesha Datla",
];

var images=[
"p2.jpg",
"p3.jpg",
"p4.jpg",
];

var i=0;
function next_member(){
document.getElementById("f_member").innerHTML=f_members[i];
document.getElementById("image").src=images[i];
i++;
if(i==3){
    i=0;
}   
}